const {Router } = require('express')
const TurmaController = require('../controllers/TurmaController')

const router = Router()

router.get('/turmas',TurmaController.selectAll)
router.get('/turmas/:id',TurmaController.selectById)
router.post('/turmas',TurmaController.insert)
router.put('/turmas/:id',TurmaController.update)
router.delete('/turmas/:id',TurmaController.delete)

module.exports = router