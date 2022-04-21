import Producto from '../model/Producto.js';

const home = (req, res) =>{ 
    res.send("Bienvenidos Estudiantes PCA - SENA - Controlador Productos");
};

// Consulta (find) para buscar todos los productos
const read = async (req, res) =>{ 
    const productos = await Producto.find()
    res.json(productos);
};

const readId = async (req, res) =>{ 
    const { id } = req.params;
    // Consulta (findById) producto por ID
    const producto = await Producto.findById(id);
    if(!producto){
        const error = new Error('No Encontrado');
        return res.status(404).json({
            status: 'error',
            msg: error.message
        });
    }; 
    res.json(producto);
};

const create = async (req, res) =>{ 
          
    const producto = new Producto(req.body);
    
    try {
        // save sirve para almacenar informacion en la BD de MongoDB 
        const productoAlmacenado = await producto.save();
        res.json({
            productoAlmacenado
        });
    } catch (error) {
        return res.status(404).json({
            status: 'error',
            error: error.message
        });
    }

};

const actualizar = async (req, res) =>{ 
    const { id } = req.params;

    const producto = await Producto.findById(id);

    if(!producto){
        const error = new Error('No Encontrado');
        return res.status(404).json({
            status: 'error',
            msg: error.message
        });
    }; 

    // Actualizar
    producto.nombre = req.body.nombre || producto.nombre;
    producto.precio = req.body.precio || producto.precio;
    producto.cantidad = req.body.cantidad || producto.cantidad;
    producto.iva = req.body.iva || producto.iva;

    try{
        const productoActualizado = await producto.save();
        res.json(productoActualizado);
    }catch (error){
        return res.status(404).json({
            status: 'error',
            error: error.message
        });
    }
};

const eliminar =  async (req, res) =>{ 
    const { id } = req.params;
    const producto = await Producto.findById(id);
    if(!producto){
        const error = new Error('No Encontrado');
        return res.status(404).json({
            status: 'error',
            msg: error.message
        });
    }; 
    // Eliminar
    try{
        // delete metodo para eliminar documentos
        await producto.delete();
        res.json({msg: "Producto Eliminado"});
    }catch (error){
        return res.status(404).json({
            status: 'error',
            error: error.message
        });
    }
};



export {
    home,
    read,
    readId,
    create,
    actualizar,
    eliminar
}