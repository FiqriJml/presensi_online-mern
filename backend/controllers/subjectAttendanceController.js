const SubjectAttendance = require('../models/subjectAttendance');

// GET all subject attendances
const getAllSubjectAttendances = async (req, res) => {
  try {
    const subjectAttendances = await SubjectAttendance.find();
    res.json(subjectAttendances);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// GET subject attendance by ID
const getSubjectAttendanceById = async (req, res) => {
  const { id } = req.params;
  try {
    const subjectAttendance = await SubjectAttendance.findById(id);
    if (!subjectAttendance) {
      return res.status(404).json({ error: 'Subject attendance not found' });
    }
    res.json(subjectAttendance);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// POST create a new subject attendance
const createSubjectAttendance = async (req, res) => {
  const { student, subject, isPresent } = req.body;
  try {
    const subjectAttendance = new SubjectAttendance({ student, subject, isPresent });
    await subjectAttendance.save();
    res.status(201).json(subjectAttendance);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// PUT update subject attendance by ID
const updateSubjectAttendance = async (req, res) => {
    const { id } = req.params;
    const { isPresent } = req.body;
    try {
      const subjectAttendance = await SubjectAttendance.findByIdAndUpdate(
        id,
        { isPresent },
        { new: true }
      );
      if (!subjectAttendance) {
        return res.status(404).json({ error: 'Subject attendance not found' });
      }
      res.json(subjectAttendance);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };

// DELETE subject attendance by ID
const deleteSubjectAttendance = async (req, res) => {
    const { id } = req.params;
    try {
      const subjectAttendance = await SubjectAttendance.findByIdAndDelete(id);
      if (!subjectAttendance) {
        return res.status(404).json({ error: 'Subject attendance not found' });
      }
      res.json({ message: 'Subject attendance deleted successfully' });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };

module.exports = {
  getAllSubjectAttendances,
  getSubjectAttendanceById,
  createSubjectAttendance,
  updateSubjectAttendance,
  deleteSubjectAttendance
};
