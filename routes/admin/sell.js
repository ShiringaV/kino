import express from 'express'
import { getSells, postSell, putSell, deleteSell } from '../../controllers/admin/sell.js'

const router = express.Router()

router.get('/', getSells)

router.post('/', postSell)

router.put('/:id', putSell)

router.delete('/:id', deleteSell)

export default router