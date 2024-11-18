// server.js
import express from 'express';
import cors from 'cors';
import router from './routes/AuthRoute.js'; // Pastikan jalur ini sesuai dengan struktur proyek Anda
import db from './config/Database.js'; // Pastikan jalur ini sesuai dengan struktur proyek Anda

const app = express();

app.use(cors());
app.use(express.json());

// Gunakan rute yang telah didefinisikan
app.use('/api', router);

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
