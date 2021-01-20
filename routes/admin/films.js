import express from 'express'
import { postFilm, putFilm, deleteFilm } from '../../controllers/admin/films.js'

const router = express.Router()

router.post('/', postFilm)

router.put('/:id', putFilm)

router.delete('/:id', deleteFilm)

export default router