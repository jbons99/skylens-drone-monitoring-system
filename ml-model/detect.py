from ultralytics import YOLO
import cv2
from collections import Counter

image_path = "/Users/jordanbonserio/Documents/1.jpeg"

model = YOLO("yolo11s.pt")  

results = model.predict(
    source=image_path,
    imgsz=1280,
    conf=0.20,
    iou=0.60,
    augment=True,
    verbose=False
)

result = results[0]

print("\nDetected objects:")
found_any = False
class_counts = Counter()

for box in result.boxes:
    class_id = int(box.cls[0])
    class_name = result.names[class_id]
    confidence = float(box.conf[0])

    print(f"- {class_name} ({confidence:.2f})")
    class_counts[class_name] += 1
    found_any = True

if not found_any:
    print("- Nothing detected")

# Summary
print("\nSummary:")
total_objects = sum(class_counts.values())
print(f"Total objects detected: {total_objects}")

if total_objects > 0:
    for class_name, count in class_counts.items():
        print(f"- {class_name}: {count}")

annotated = result.plot()
output_path = "/Users/jordanbonserio/Documents/output_detected.jpg"
cv2.imwrite(output_path, annotated)

print(f"\nAnnotated image saved as: {output_path}")
