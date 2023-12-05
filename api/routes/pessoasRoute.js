const {Router } = require('express')
const PessoaController = require('../controllers/PessoaController')

const router = Router()

router.get('/pessoas',PessoaController.selectAll)
router.get('/pessoas/:id',PessoaController.selectById)
router.post('/pessoas',PessoaController.insert)
router.put('/pessoas/:id',PessoaController.update)
router.delete('/pessoas/:id',PessoaController.delete)
router.get('/pessoas/:estudanteId/matricula/:matriculaId',PessoaController.selectByIdMatricula)
router.post('/pessoas/:estudanteId/matricula',PessoaController.insertMatricula)
router.put('/pessoas/:estudanteId/matricula/:matriculaId',PessoaController.updateMatricula)
router.delete('/pessoas/:estudanteId/matricula/:matriculaId',PessoaController.deleteMatricula)

module.exports = router