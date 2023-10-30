require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const studentRoute = require('./routes/studentRoute');
const subjectRoute = require('./routes/subjectRoute'); // Impor rute mata pelajaran
const logRequest = require('./middleware/logger'); // Import middleware logging

const app = express();
app.use(bodyParser.json());

// Koneksi ke MongoDB dari variabel lingkungan .env
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// Gunakan middleware logging untuk mencetak informasi endpoint yang diakses
app.use(logRequest);

// Menggunakan route untuk entitas Student
app.use('/api/students', studentRoute);

// Menggunakan rute untuk entitas Subject
app.use('/api/subjects', subjectRoute); // Gunakan rute mata pelajaran di endpoint /api/subjects

// Mengambil nilai PORT dari variabel lingkungan .env atau menggunakan 3000 jika tidak ada
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log(`Server berjalan di port ${PORT}`);
    console.log(`http://localhost:${PORT}`);
});
