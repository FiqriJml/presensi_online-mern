const mongoose = require('mongoose');

const subjectAttendanceSchema = new mongoose.Schema({
  student: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Student',
    required: true
  },
  subject: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Subject',
    required: true
  },
  date: {
    type: Date,
    default: Date.now,
    required: true
  },
  isPresent: {
    type: Boolean,
    required: true
  }
});

const SubjectAttendance = mongoose.model('SubjectAttendance', subjectAttendanceSchema);

module.exports = SubjectAttendance;
