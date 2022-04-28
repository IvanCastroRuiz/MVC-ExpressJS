import mongoose from 'mongoose';

const productoShema = mongoose.Schema({
        nombre: {
            type: String,
            required: true
        },
        precio: {
            type: Number,
            required: true
        },
        cantidad: {
            type: Number,
            required: true
        },
        iva: {
            type: Number,
            required: true
        },
        
    },
    {
        timestamps: true,
    }
);

const Producto = mongoose.model('Producto', productoShema);
export default Producto;