require('./config/config')
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())
app.get('/', (req, res) => {
    res.json('Hola')
})
app.post('/usuario', (req, res) => {
    let body = req.body;
    if (body.nombre === undefined) {
        res.status(400).json({
            ok: false,
            title: "Se necesita el nombre"
        })
    } else {
        res.json({
            body
        })
    }

})
app.put('/usuario/:id', (req, res) => {
    let id = req.params.id;
    res.json(id)
})
app.listen(process.env.PORT, () => console.log("Escuchando ", process.env.PORT))