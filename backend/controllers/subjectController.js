const Subject = require('../models/subject');

// GET all subjects
const getAllSubjects = async (req, res) => {
  try {
    const subjects = await Subject.find();
    res.json(subjects);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// GET one subject by ID
const getSubjectById = async (req, res) => {
  const { id } = req.params;
  try {
    const subject = await Subject.findById(id);
    if (!subject) {
      return res.status(404).json({ error: 'Subject not found' });
    }
    res.json(subject);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// POST create a new subject
const createSubject = async (req, res) => {
  const { name, students } = req.body;
  try {
    const subject = new Subject({ name, students });
    await subject.save();
    res.status(201).json(subject);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// PUT update subject by ID
const updateSubjectById = async (req, res) => {
  const { id } = req.params;
  const { name, students } = req.body;
  try {
    const subject = await Subject.findByIdAndUpdate(id, { name, students }, { new: true });
    if (!subject) {
      return res.status(404).json({ error: 'Subject not found' });
    }
    res.json(subject);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// DELETE subject by ID
const deleteSubjectById = async (req, res) => {
  const { id } = req.params;
  try {
    const subject = await Subject.findByIdAndDelete(id);
    if (!subject) {
      return res.status(404).json({ error: 'Subject not found' });
    }
    res.json({ message: 'Subject deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// POST create multiple subjects
const createMultipleSubjects = async (req, res) => {
    const subjectsData = req.body;
    try {
      const subjects = await Subject.insertMany(subjectsData);
      res.status(201).json(subjects);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };

// DELETE multiple subjects by IDs
const deleteMultipleSubjects = async (req, res) => {
    const { ids } = req.body;
    try {
      const result = await Subject.deleteMany({ _id: { $in: ids } });
      res.json({ message: `${result.deletedCount} subjects deleted successfully` });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };

module.exports = {
  getAllSubjects,
  getSubjectById,
  createSubject,
  updateSubjectById,
  deleteSubjectById,
  createMultipleSubjects,
  deleteMultipleSubjects
};
