const express = require('express');
const router = express.Router();
const subjectController = require('../controllers/subjectController');

// GET all subjects
router.get('/', subjectController.getAllSubjects);

// GET one subject by ID
router.get('/:id', subjectController.getSubjectById);

// POST create a new subject
router.post('/', subjectController.createSubject);

// PUT update subject by ID
router.put('/:id', subjectController.updateSubjectById);

// DELETE subject by ID
router.delete('/:id', subjectController.deleteSubjectById);

// POST create multiple subjects
router.post('/bulk', subjectController.createMultipleSubjects);

// DELETE multiple subjects by IDs
router.delete('/bulk', subjectController.deleteMultipleSubjects);


module.exports = router;
