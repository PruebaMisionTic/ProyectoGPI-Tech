const express = require("express")

const router= express.Router()

router.get("/", (req,res)=>{
    res.send("Hola Grupo")
})

router.get("/aboutus", (req,res)=>{
    res.send("Esto es Acerca de nosotros")
})

module.exports=router;