import Detection from "../models/Detection.js";

export const uploadDetection = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({
        message: "image file is required",
        success: false,
      });
    }

    const detection = await Detection.create({
      user: req.id,
      missionName: req.body.missionName || "",
      notes: req.body.notes || "",
      originalName: req.file.originalname,
      imageUrl: `/uploads/${req.file.filename}`,
      status: "UPLOADED",
      total_objects: 0,
      counts: {
        people: 0,
        vehicles: 0,
      },
    });

    return res.status(201).json({
      message: "image uploaded successfully",
      success: true,
      detection,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
      success: false,
    });
  }
};

export const getDetections = async (req, res) => {
  try {
    const detections = await Detection.find({ user: req.id })
      .sort({ createdAt: -1 })
      .lean();

    return res.status(200).json({
      success: true,
      detections,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
      success: false,
    });
  }
};
