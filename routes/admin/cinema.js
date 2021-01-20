import express from 'express'
import { postCinema, putCinema, deleteCinema, 
    postHall, putHall, deleteHall } from '../../controllers/admin/cinema.js'

const router = express.Router()

router.post('/', postCinema)
router.put('/:id', putCinema)
router.delete('/:id', deleteCinema)

router.post('/hall', postHall)
router.put('/hall/:id', putHall)
router.delete('/hall/:id', deleteHall)

export default router