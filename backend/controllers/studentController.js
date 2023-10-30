const Student = require('../models/student');

// GET all students
const getAllStudents = async (req, res) => {
  try {
    const students = await Student.find();
    res.json(students);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// GET one student by ID
const getStudentById = async (req, res) => {
  const { id } = req.params;
  try {
    const student = await Student.findById(id);
    if (!student) {
      return res.status(404).json({ error: 'Student not found' });
    }
    res.json(student);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// POST create a new student
const createStudent = async (req, res) => {
  const { name, studentClass, rollNumber, subjects } = req.body;
  try {
    const student = new Student({ name, studentClass, rollNumber, subjects });
    await student.save();
    res.status(201).json(student);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// POST create multiple students
const createMultipleStudents = async (req, res) => {
  const studentsData = req.body;
  try {
    const students = await Student.insertMany(studentsData);
    res.status(201).json(students);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// PUT update student by ID
const updateStudentById = async (req, res) => {
  const { id } = req.params;
  const { name, studentClass, rollNumber, subjects } = req.body;
  try {
    const student = await Student.findByIdAndUpdate(id, { name, studentClass, rollNumber, subjects }, { new: true });
    if (!student) {
      return res.status(404).json({ error: 'Student not found' });
    }
    res.json(student);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// DELETE student by ID
const deleteStudentById = async (req, res) => {
  const { id } = req.params;
  try {
    const student = await Student.findByIdAndDelete(id);
    if (!student) {
      return res.status(404).json({ error: 'Student not found' });
    }
    res.json({ message: 'Student deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// DELETE multiple students by IDs
const deleteMultipleStudents = async (req, res) => {
  const { ids } = req.body;
  try {
    const result = await Student.deleteMany({ _id: { $in: ids } });
    res.json({ message: `${result.deletedCount} students deleted successfully` });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getAllStudents,
  getStudentById,
  createStudent,
  createMultipleStudents,
  updateStudentById,
  deleteStudentById,
  deleteMultipleStudents
};
