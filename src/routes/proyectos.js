const express = require("express")

const router= express.Router()

router.get("/proyectos", (req,res)=>{
    res.send("Aqui te van estar los proyectos guardados en nuestra BD")
})

module.exports=router;