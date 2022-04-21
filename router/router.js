import express from 'express';
const router = express.Router();

import { 
    home,
    create,
    read,
    readId,
    actualizar,
    eliminar
} from '../controller/producto.js';

router
    .route('/home')
    .get(home)

router
    .route('/create')
    .post(create)


router
    .route('/read')
    .get(read)

router
    .route('/read/:id')
    .get(readId)

router
    .route('/update/:id')
    .put(actualizar)

router
    .route('/eliminar/:id')
    .delete(eliminar)

export default router;