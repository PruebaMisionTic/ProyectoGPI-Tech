const mongoose=require("mongoose")
const atlasUrl= "mongodb+srv://admin:mintic2021@cluster0.klady.mongodb.net/GPI-Tech?retryWrites=true&w=majority";

try{
    //conexion con el cluster de bases de datos
    mongoose.connect(
        atlasUrl, {useNewUrlParser: true, useUnifiedTopology: true},
        ()=> console.log("Estamos conectadisimos a MongoDB en Atlas con Mongoose")
        );
    }
        catch(e){console.log ("Error en la conexion :( ");
    }
