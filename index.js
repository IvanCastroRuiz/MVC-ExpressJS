import express from 'express';
import conectarDB from './config/db.js';
import dotenv from 'dotenv';
import cors from 'cors';
import router from './router/router.js';

const port = process.env.port || 4000;
const host = process.env.HOST || '0.0.0.0';
dotenv.config({ path: '.env' });
//dotenv.config();
const app = express();


// middlewares
// Se utiliza para realizar la comunicacion entre el servidor del frontend y el backend
/*const dominiosPermitidos = [process.env.FRONTEND_URL];
const corsOptions = {
    origin: function(origin, callback){
        if(dominiosPermitidos.indexOf(origin) !== -1){
            // El origen del Request esta permitido
            callback(null, true);
        }else{
            callback(new error('No permitido por CORS'));
        }
    }
}*/   

//app.use(cors(corsOptions)); 
app.use(cors()); 
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/', router);

// Conexion Base de datos
conectarDB();

app.get('/', (req, res) => {
    res.send(`El servidor esta funcionando en el puerto ${port} y host ${host}`);
});


app.listen(port, () => {
    console.log(`El servidor esta funcionando en el puerto ${port} y host ${host}`);
});