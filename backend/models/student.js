const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  studentClass: {
    type: String, // Mengganti class menjadi studentClass
    required: true
  },
  rollNumber: {
    type: String,
    required: true
  },
  subjects: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Subject'
  }]
});

const Student = mongoose.model('Student', studentSchema);

module.exports = Student;
