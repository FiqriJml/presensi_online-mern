const express = require('express');
const router = express.Router();
const studentController = require('../controllers/studentController');

// Endpoint: GET /api/students
router.get('/', studentController.getAllStudents);
// GET one student by ID
router.get('/:id', studentController.getStudentById);
// POST create a new student
router.post('/', studentController.createStudent);
// POST create multiple students
router.post('/multiple', studentController.createMultipleStudents);
// PUT update student by ID
router.put('/:id', studentController.updateStudentById);
// DELETE student by ID
router.delete('/:id', studentController.deleteStudentById);
// DELETE multiple students by IDs
router.delete('/multiple', studentController.deleteMultipleStudents);




module.exports = router;
