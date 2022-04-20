import express from 'express';
const router = express.Router();

import { 
    home,
    create,
    read,
    actualizar,
    deleted
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
    .route('/update')
    .put(actualizar)

router
    .route('/delete')
    .delete(deleted)

export default router;