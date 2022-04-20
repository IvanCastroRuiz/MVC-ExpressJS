import Producto from '../model/Producto.js';

const home = (req, res) =>{ 
    res.send("Bienvenidos Estudiantes PCA - SENA - Controlador Productos");
};

const read = (req, res) =>{ 
    res.send("Crear Leer");
};

const create = (req, res) =>{ 
    res.send("Crear create");
    const producto = new Producto(req.body);
    console.log(producto);
    const {nombre, precio, cantidad, iva} = req.body;
    console.log(nombre, precio, cantidad, iva);
};

const actualizar = (req, res) =>{ 
    res.send("Crear update");
};

const deleted = (req, res) =>{ 
    res.send("Crear delete");
};

export {
    home,
    read,
    create,
    actualizar,
    deleted
}