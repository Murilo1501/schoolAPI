const models = require('../models')

class PessoaController{

    static async selectAll(req,res){
        try{
            const all = await models.Pessoas.findAll()
            return res.status(200).json(all)
        }catch(err){
            res.status(500).json(err.message)
        }
    
    }

    static async insert(req,res){
        const newUser = req.body
        try{
            const insert = await models.Pessoas.create(newUser)
           return  res.status(200).send(insert)
        }catch(err){
            res.status(500).json(err.message)
        }
    }

    static async update(req,res){
        const updatedUser = req.body
        const {id} = req.params
        try{
             await models.Pessoas.update(updatedUser,{
                where:{
                    id:Number(id)
                }
            })

            const updated = await models.Pessoas.findOne({
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
            await models.Pessoas.destroy({
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
            const user = await models.Pessoas.findOne({
                where:{
                    id:Number(id)
                }
            })
            return res.status(200).json(user)
        }catch(err){
            res.status(500).send(err.message)
        }
    }

    static async selectByIdMatricula(req,res){
        try{
            const {estudanteId,matriculaId} = req.params
            const matricula = await models.Matriculas.findOne({
                where:{
                    id:Number(matriculaId),
                    estudante_id:Number(estudanteId)
                }
            })
            return res.status(200).json(matricula)
        }catch(err){
            res.status(500).send(err.message)
        }
    }

    static async insertMatricula(req,res){
        const {estudanteId} = req.params
        const newMatricula = {...req.body,estudante_id:Number(estudanteId)}
        try{
            const insert = await models.Matriculas.create(newMatricula)
           return  res.status(200).send(insert)
        }catch(err){
            res.status(500).json(err.message)
        }
    }

    static async updateMatricula(req,res){
        const updatedUser = req.body
        const {estudanteId,matriculaId} = req.params
        try{
             await models.Matriculas.update(updatedUser,{
                where:{
                    id:Number(matriculaId),
                    estudante_id:Number(estudanteId)
                }
            })

            const updated = await models.Matriculas.findOne({
                where:{
                    id:Number(matriculaId)
                }
            })

            return res.status(200).json(updated)
        }catch(err){
            res.status(500).send(err.message)
        }
    }

    static async deleteMatricula(req,res){
        try{
            const {estudanteId,matriculaId} = req.params
            await models.Matriculas.destroy({
                where:{
                    id:Number(matriculaId)
                }
            })
            return res.status(200).json('Matricula deleted')
        }catch(err){
            res.status(500).send(err.message)
        }
    }

}

module.exports = PessoaController