const express = require("express")
const router = express.Router()
const Users = require("../models/users")
const bcrypt = require("bcrypt")


router.get("/users", async(req, res)=>{
    try{
    const users = await Users.find()
    res.status(200).send(users)
    }
    catch (error) {
    res.status(500).send({
        message: "errore interno del server",
        error: error
        })
    }
})


router.post("/users", async(req, res)=>{
    const salt = await bcrypt.genSalt(10)
    const hashpassword = await bcrypt.hash(req.body.password, salt)
    const users = new Users({
        email: req.body.email,
        password: hashpassword,
        name: req.body.name,
        surname: req.body.surname
    })
    try{
        const newuser = await users.save()
        res.status(200).send({
        message: "utente salvato con successo nel database",
        payload: newuser,
        })
    }
    catch (error){
        res.status(500).send({
            message: "errore interno del server",
            error: error,
            })    
    }

} )

router.delete("/users/:id", async(req,res)=>{
    const {id} = req.params

try{
const user = await Users.findById(id).deleteOne()
if(!user){
return res.status(404).send({
    message: "non esiste nessun utente con questo id",
})
}
res.status(200).send({
    message: "utente eliminato con successo",
})
}
catch (error){
    res.status(500).send({
        message: "errore nella connessione al server",
        error: error
    })

}
})

router.patch("/users/:id", async(req, res)=>{
    const {id} = req.params
    const userExist = await Users.findById(id)
    if(!userExist){
        res.status(404).send({
            message: "non esiste nessun utente con questo id"
        })
    }
    try{
      const dataToUpdate = req.body
      const options = {
        new: true
    } 
      const result = await Users.findByIdAndUpdate(id, dataToUpdate, options)
      res.status(200).send({
        message: "utente aggiornato con successo",
        payload: result
    })
    }
    catch (error){
        res.status(500).send({
            message: "errore interno del server",
            error: error,
            })    
    } 
})

module.exports = router