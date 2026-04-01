from flask import Flask, request, jsonify, send_from_directory
from ultralytics import YOLO
from collections import Counter
import cv2
import os
import uuid

app = Flask(__name__)

# Folders for uploaded and processed images
UPLOAD_FOLDER = "uploads"
OUTPUT_FOLDER = "outputs"

os.makedirs(UPLOAD_FOLDER, exist_ok=True)
os.makedirs(OUTPUT_FOLDER, exist_ok=True)

# Load YOLO model once when server starts
model = YOLO("yolo11s.pt")


@app.route("/")
def home():
    return jsonify({
        "message": "SkyLens detection API is running"
    })


@app.route("/detect", methods=["POST"])
def detect_objects():
    # Check if file was sent
    if "image" not in request.files:
        return jsonify({"error": "No image file uploaded"}), 400

    file = request.files["image"]

    if file.filename == "":
        return jsonify({"error": "No file selected"}), 400

    # Create unique filename
    file_ext = os.path.splitext(file.filename)[1].lower()
    unique_name = f"{uuid.uuid4()}{file_ext}"

    image_path = os.path.join(UPLOAD_FOLDER, unique_name)
    output_filename = f"annotated_{unique_name}"
    output_path = os.path.join(OUTPUT_FOLDER, output_filename)

    # Save uploaded file
    file.save(image_path)

    try:
        # Run YOLO prediction
        results = model.predict(
            source=image_path,
            imgsz=1280,
            conf=0.20,
            iou=0.60,
            augment=True,
            verbose=False
        )

        result = results[0]

        class_counts = Counter()
        detections = []

        for box in result.boxes:
            class_id = int(box.cls[0])
            class_name = result.names[class_id]
            confidence = float(box.conf[0])

            class_counts[class_name] += 1
            detections.append({
                "class": class_name,
                "confidence": round(confidence, 2)
            })

        total_objects = sum(class_counts.values())

        # Save annotated image
        annotated = result.plot()
        cv2.imwrite(output_path, annotated)

        return jsonify({
            "message": "Detection complete",
            "total_objects": total_objects,
            "counts": dict(class_counts),
            "detections": detections,
            "original_image": f"/uploads/{unique_name}",
            "annotated_image": f"/outputs/{output_filename}"
        })

    except Exception as e:
        return jsonify({
            "error": "Detection failed",
            "details": str(e)
        }), 500


@app.route("/uploads/<filename>")
def get_uploaded_file(filename):
    return send_from_directory(UPLOAD_FOLDER, filename)


@app.route("/outputs/<filename>")
def get_output_file(filename):
    return send_from_directory(OUTPUT_FOLDER, filename)


if __name__ == "__main__":
    app.run(debug=True, host="0.0.0.0", port=5000)
