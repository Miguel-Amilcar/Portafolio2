/** ---Ejercicio - preparar el Webserver para subirlo a un hosting---
1- crear variable de entorno instalar npm i dotenv
2- crear en la raíz un archivo llamado .env configurar le puerto 8081
3- en este archivo principal agregar el require('dotenv').config()
4- en este archivo principal agregar const port = process.env.PORT
5- y en el listen utilizar la variable port
6- especificar en el archivo package.json en script el comando
"start": "node app15.js"
7- para verificar si funciona el script ejecutar el comando npm start
8- crear archivo .gitignore y agregar en .gitignore node_modules/
9- git init -si es la primera vez que se inicializa
10- git add . **este es para tomar un tipo snapshot
11- git commit -m "Primer commit - webserver listo"
12- git push
*/

const express = require('express')
const hbs = require('hbs')
require('dotenv').config()

const app = express()
const port = process.env.PORT
/**
---Pasos para desplegar la aplicación en Railway.app---
5- git add .
6- git commit -m "Me server listo"
8- copiar los comandos en GitHub: git remote add origin https://github.com/tonyescobcgt/05-webserver-railway.git
10- git branch -M main
11- git push -u origin main

*/

 // Utilización de Handlebars hbs para el renderizado de la página web
app.set('view engine', 'hbs')

 // Uso de parciales "código que se repite en más de un lugar o páginas web"
hbs.registerPartials(__dirname + '/views/partials')

 // Servir contenido estático public3 donde está el templated
app.use(express.static('public'))
// Enviando argumentos a /
app.get('/', (req, res) => {
    res.render('inicio', {
        nombre: 'Miguel Amilcar Mejía Tó',
        titulo: 'Desarrollo Web'
        
    })
})

app.get('/lenguajes', (req, res) => {
    res.render('lenguajes', {
        nombre: 'Miguel Amilcar Mejía Tó',
        titulo: 'Desarrollo Web'
    })
})

app.get('/proyectos', (req, res) => {
    res.render('proyectos', {
        nombre: 'Miguel Amilcar Mejía Tó',
        titulo: 'Desarrollo Web'
    })
})

app.get('*', (req, res) => {
    res.sendFile(__dirname + '/public/404.html')
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
})
