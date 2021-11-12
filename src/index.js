const express = require("express")
const path = require("path")
const exphdbs = require("express-handlebars")
const methodOverride = require("method-override")

//variables
const app = express()
require ("./database")

//setiamos nuestro servidor
 app.set("port",5500)
 app.set("views",path.join(__dirname,"views"))
 app.engine(".hbs", exphdbs({
    defaultLayout:"main",  //marco por defecto
    layoutsDir:path.join(app.get("views"),"layouts"),     //este es el directorio por defecto de sus marcos o plantillas,
                                                        //con esta linea optiene la direccion de los views y 
                                                        //los concatena con los layouts
    partialsDir: path.join(app.get("views"), "partials"),
    extname: ".hbs",
 })
 );
 app.set("view engine","hbs"); // esto es para recordarle al servidor que debe usar esta configuracion

 //le creamos funciones al index
 app.use(express.urlencoded({extended:false}))   // no se acepta formatos diferentes a datos
 app.use(methodOverride("_method")) // extiende las funcionalidades de los formularios
 //pendiente configurar sessions


//rutas
app.use(require("./routes/index"))
app.use(require("./routes/proyectos"))
app.use(require("./routes/usuarios"))

//archivos
app.use(express.static(path.join(__dirname, "public")))

 //servidor escucha
 app.listen(app.get("port"), ()=>{
     console.log("Servidor activo y funcionando desde el puerto",app.get("port"))
 })