const models = require('../models')

class NivelController{

    static async selectAll(req,res){
        try{
            const all = await models.Niveis.findAll()
            return res.status(200).json(all)
        }catch(err){
            res.status(500).json(err.message)
        }
    
    }

    static async insert(req,res){
        const newUser = req.body
        try{
            const insert = await models.Niveis.create(newUser)
           return  res.status(200).send(insert)
        }catch(err){
            res.status(500).json(err.message)
        }
    }

    static async update(req,res){
        const updatedUser = req.body
        const {id} = req.params
        try{
             await models.Niveis.update(updatedUser,{
                where:{
                    id:Number(id)
                }
            })

            const updated = await models.Niveis.findOne({
                where:{
                    id:Number(id)
                }
            })

            return res.status(200).json(updated)
        }catch(err){
            res.status(500).send(err.message)
        }
    }

    static async delete(req,res){
        try{
            const {id} = req.params
            await models.Niveis.destroy({
                where:{
                    id:Number(id)
                }
            })
            return res.status(200).json('user deleted')
        }catch(err){
            res.status(500).send(err.message)
        }
    }

    static async selectById(req,res){
        try{
            const {id} = req.params
            const user = await models.Niveis.findOne({
                where:{
                    id:Number(id)
                }
            })
            return res.status(200).json(user)
        }catch(err){
            res.status(500).send(err.message)
        }
    }
}

module.exports = NivelController