const express = require("express")
const router = express.Router()
const DataBase = require("../models/databasediprova")

router.get("/DataBase", async(req, res)=>{
    try {
        const database = await DataBase.find()
        res.status(200).send(database)
    } catch (error) {
        res.status(500).send({
            message: "Errore interno del server",
            error: error     
            })
    }
})

module.exports = router