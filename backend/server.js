require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const studentRoute = require('./routes/studentRoute');
const subjectRoute = require('./routes/subjectRoute'); // Impor rute mata pelajaran
const logRequest = require('./middleware/logger'); // Import middleware logging
const cors = require('cors');

const app = express();
app.use(bodyParser.json());

// Mengaktifkan CORS untuk semua rute
app.use(cors());

// Koneksi ke MongoDB dari variabel lingkungan .env
// Menghubungkan ke MongoDB
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('error', (error) => {
  console.error('Koneksi MongoDB gagal:', error.message);
});

db.once('open', () => {
  console.log('Berhasil terhubung ke MongoDB');
  // Definisikan rute-rute API Anda di sini
  // ...
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
