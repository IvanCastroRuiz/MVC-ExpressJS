import express from 'express';
import conectarDB from './config/db.js';
import dotenv from 'dotenv';
import cors from 'cors';
import router from './router/router.js';

const port = process.env.port || 4000;
const host = process.env.HOST || '0.0.0.0';
dotenv.config({ path: '.env' });
const app = express();


// Conexion Base de datos
conectarDB();

app.use('/', router);

// middlewares
// Se utiliza para realizar la comunicacion entre el servidor del frontend y el backend
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.get('/', (req, res) => {
    res.send(`El servidor esta funcionando en el puerto ${port} y host ${host}`);
});


app.listen(port, () => {
    console.log(`El servidor esta funcionando en el puerto ${port} y host ${host}`);
});