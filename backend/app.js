const express  = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 3060;
const cors = require("cors");

const formularioBD = express();

formularioBD.use(bodyParser.json());


const DIRECTORIO_PERMITIDO_CORS = "http://localhost:3000";
formularioBD.use(cors({
  origin: DIRECTORIO_PERMITIDO_CORS
}));

//MySQL
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'formulariosolicitud'
})


//ruta
formularioBD.get('/', (req, res) => {
    res.send('hola q hace??');
});


//todos los formularios
formularioBD.get('/formularios' , (req, res) => {
    const sql = 'SELECT * FROM solicitudproductoservicio';

    connection.query(sql, (error, resultado) => {
        if(error) throw error;
        if(resultado.length > 0){
            res.json(resultado);
        }else {
            res.send('no hay resultados');
        }
    });
});

formularioBD.get('/formularios/:id' , (req, res) => {
    const {id} = req.params
    const sql = `SELECT * FROM solicitudproductoservicio WHERE id = ${id}`;
    connection.query(sql, (error, resultado) => {
        if(error) throw error;

        if(resultado.length > 0){
            res.json(resultado);
        }else {
            res.send('no hay resultados');
        }
    }); 
});

formularioBD.post('/add' , (req, res) => {
    const sql = 'INSERT INTO solicitudproductoservicio SET ?';
    const formularioObj = {
        detalle: req.body.detalle,
        fechaDeSolicitud: req.body.fechaDeSolicitud,
        responsableDeSolicitud: req.body.responsableDeSolicitud,
        monto: req.body.monto
    }
    connection.query(sql, formularioObj, error => {
        if (error) throw error;
        res.send('formulario creado!');
    });
});

formularioBD.put('/update/:id' , (req, res) => {
    const {id} = req.params;
    const {detalle, fechaDeSolicitud, responsableDeSolicitud,monto} = req.body;
    const sql = `UPDATE solicitudproductoservicio SET detalle = '${detalle}', fechaDeSolicitud = '${fechaDeSolicitud}', responsableDeSolicitud = '${responsableDeSolicitud}', monto = '${monto}'
    WHERE id = ${id}`;

    connection.query(sql, error => {
        if(error) throw error;
        res.send('formulario actualizado!');
    });
});

formularioBD.delete('/delete/:id' , (req, res) => {
    const {id} = req.params;
    const sql = `DELETE FROM solicitudproductoservicio WHERE id = ${id}`;

    connection.query(sql, error => {
        if(error) throw error;
        res.send('formulario eliminado!');
    });
});


//verificar coneccion
connection.connect(error => {
    if(error) throw error;
    console.log('base de datos corriendo!');
});

formularioBD.listen(PORT, () => console.log(`servidor corriendo en el puertoo ${PORT}`));