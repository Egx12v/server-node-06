require('dotenv').config()
const express = require('express')
var hbs = require('hbs');//? Agregamos la importación para poder usar los partials
const app = express()
const port = process.env.PORT;// hacemos el puerto dinamico
//console.log(process.env.PORT)

//? para servir contenio estatico hay que usar un middleware
//? para ello usamos lo siguinte

//*Le decimos a express usar hbs*/
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials', function (err) { });//*Usamos el partial desde hbs*/

app.use(express.static('public'))///! Al hacer esto se desactiva la varra principal ya que el middleware toma este primero
/* app.get('/', (req, res) => {
    res.send('Hello World')
}) */ //! Esto no se ejecuta si hay middleWare()
//! NEw
//! HBS
app.get('/', (req, res) => {
    res.render("home", {
        nombre: "Rvo ",
        Titulo: "Curso de node "
    })//!Traemos la vista desde view a la cual podemos pasarle paramtros
})


app.get('/elements', (req, res) => {
    res.render("elements")//!vista nueva a elemens
})
app.get('/generic', (req, res) => {
    res.render("generic")//!vista nueva a elemens
})


app.get('/generic', (req, res) => {
    res.sendFile(__dirname + "/public/generic.html")//!Usamo sendFile para enviar algo y no una cadena (Importante usar el dirname (requiere de ruta absoluta)) 
})
app.get('/elements', (req, res) => {
    res.sendFile(__dirname + "/public/elements.html")//!Usamo sendFile para enviar algo y no una cadena (Importante usar el dirname (requiere de ruta absoluta)) 
})

app.get('/hola', (req, res) => {
    res.send('Ruta from hola')
})
app.get('*', (req, res) => {
    //res.send('404 | Page not found!!! :(')
    //?Tambien podemos servir paginas directamente
    res.sendFile(__dirname + "/public/404.html")//!Usamo sendFile para enviar algo y no una cadena (Importante usar el dirname (requiere de ruta absoluta)) 
})


//app.listen(8080)

app.listen(port, () => {
    console.log(`Server is running in port: ${port}`)
})