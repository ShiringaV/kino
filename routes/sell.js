import exspress from 'express'
import { getSells, getSell } from '../controllers/sell.js'

const router = exspress.Router()

router.get('/', getSells)

router.get('/:id', getSell)

export default router