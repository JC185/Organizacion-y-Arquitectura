const express = require('express');
const app = express();
app.use(express.json());

let empleados = [];
let departamentos = [];
let puestos = [];

let empleadoId = 1;
let departamentoId = 1;
let puestoId = 1;

// Crear un empleado
app.post('/empleados', (req, res) => {
    const { nombre, puestoId, departamentoId } = req.body;
    const empleado = { id: empleadoId++, nombre, puestoId, departamentoId };
    empleados.push(empleado);
    res.status(201).json(empleado);
});

// Obtener todos los empleados
app.get('/empleados', (req, res) => {
    res.json(empleados);
});

// Actualizar un empleado
app.put('/empleados/:id', (req, res) => {
    const { id } = req.params;
    const { nombre, puestoId, departamentoId } = req.body;
    const empleado = empleados.find(e => e.id === parseInt(id));

    if (empleado) {
        empleado.nombre = nombre || empleado.nombre;
        empleado.puestoId = puestoId || empleado.puestoId;
        empleado.departamentoId = departamentoId || empleado.departamentoId;
        res.status(200).json(empleado);
    } else {
        res.status(404).json({ error: 'Empleado no encontrado' });
    }
});

// Eliminar un empleado
app.delete('/empleados/:id', (req, res) => {
    const { id } = req.params;
    const initialLength = empleados.length;
    empleados = empleados.filter(e => e.id !== parseInt(id));

    if (empleados.length < initialLength) {
        res.status(204).send();
    } else {
        res.status(404).json({ error: 'Empleado no encontrado' });
    }
});

// Crear un departamento
app.post('/departamentos', (req, res) => {
    const { nombre } = req.body; // Extrae el nombre del cuerpo de la solicitud
    if (!nombre) { 
        return res.status(400).json({ error: 'El nombre del departamento es requerido' });
    }

    const departamento = { id: departamentoId++, nombre }; // Crea el objeto de departamento con el nombre
    departamentos.push(departamento); // Agrega el nuevo departamento a la lista de departamentos
    res.status(201).json(departamento); // Devuelve el departamento creado
});


// Obtener todos los departamentos
app.get('/departamentos', (req, res) => {
    res.json(departamentos);
});

// Actualizar un departamento
app.put('/departamentos/:id', (req, res) => {
    const { id } = req.params;
    const { nombre } = req.body;
    const departamento = departamentos.find(d => d.id === parseInt(id));

    if (departamento) {
        departamento.nombre = nombre || departamento.nombre;
        res.status(200).json(departamento);
    } else {
        res.status(404).json({ error: 'Departamento no encontrado' });
    }
});

// Eliminar un departamento
app.delete('/departamentos/:id', (req, res) => {
    const { id } = req.params;
    const initialLength = departamentos.length;
    departamentos = departamentos.filter(d => d.id !== parseInt(id));

    if (departamentos.length < initialLength) {
        res.status(204).send();
    } else {
        res.status(404).json({ error: 'Departamento no encontrado' });
    }
});

// Crear un puesto
app.post('/puestos', (req, res) => {
    const { nombre } = req.body; // Extrae el nombre del cuerpo de la solicitud
    if (!nombre) { 
        return res.status(400).json({ error: 'El nombre del puesto es requerido' });
    }

    const puesto = { id: puestoId++, nombre }; // Crea el objeto de puesto con el nombre
    puestos.push(puesto); // Agrega el nuevo puesto a la lista de puestos
    res.status(201).json(puesto); // Devuelve el puesto creado
});


// Obtener todos los puestos
app.get('/puestos', (req, res) => {
    res.json(puestos);
});

// Actualizar un puesto
app.put('/puestos/:id', (req, res) => {
    const { id } = req.params;
    const { nombre } = req.body;
    const puesto = puestos.find(p => p.id === parseInt(id));

    if (puesto) {
        puesto.nombre = nombre || puesto.nombre;
        res.status(200).json(puesto);
    } else {
        res.status(404).json({ error: 'Puesto no encontrado' });
    }
});

// Eliminar un puesto
app.delete('/puestos/:id', (req, res) => {
    const { id } = req.params;
    const initialLength = puestos.length;
    puestos = puestos.filter(p => p.id !== parseInt(id));

    if (puestos.length < initialLength) {
        res.status(204).send();
    } else {
        res.status(404).json({ error: 'Puesto no encontrado' });
    }
});

// Iniciar el servidor
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});
