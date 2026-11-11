const express = require('express');
const app = express();

const PORT = 3000;

const waktuMulai = new Date();

app.get('/', (req, res) => {
    res.send('Selamat datang di server Kelompok 8!');
});

app.get('/info', (req, res) => {
    res.send(
        'Server dijalankan pada: ' +
        waktuMulai.toLocaleString('id-ID')
    );
});

app.get('/anggota', (req, res) => {
    const anggota = [
        { nama: 'Salwa Alawiyah' },
        { nama: 'Rizki Harfan' },
        { nama: 'Siti Salwa' },
        { nama: 'Rizqi Achmad'}
    ];

    res.json(anggota);
});

app.listen(PORT, () => {
    console.log(`Server berjalan di http://localhost:${PORT}`);
    console.log('Tekan CTRL + C untuk menghentikan server');
});
