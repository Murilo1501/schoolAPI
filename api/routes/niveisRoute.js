const {Router } = require('express')
const NivelController = require('../controllers/NivelController')

const router = Router()

router.get('/niveis',NivelController.selectAll)
router.get('/niveis/:id',NivelController.selectById)
router.post('/niveis',NivelController.insert)
router.put('/niveis/:id',NivelController.update)
router.delete('/niveis/:id',NivelController.delete)

module.exports = router