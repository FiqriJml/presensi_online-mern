const express = require('express');
const router = express.Router();
const subjectAttendanceController = require('../controllers/subjectAttendanceController');

// GET all subject attendances
router.get('/', subjectAttendanceController.getAllSubjectAttendances);

// GET subject attendance by ID
router.get('/:id', subjectAttendanceController.getSubjectAttendanceById);

// POST create a new subject attendance
router.post('/', subjectAttendanceController.createSubjectAttendance);

// PUT update subject attendance by ID
router.put('/:id', subjectAttendanceController.updateSubjectAttendance);

// DELETE subject attendance by ID
router.delete('/:id', subjectAttendanceController.deleteSubjectAttendance);

module.exports = router;
