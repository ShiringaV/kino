import express from 'express'
import { getFilms, getFilm, getFilmsList, getBookingPage} from '../controllers/films.js'

const router = express.Router();

// All routes in here are starting with api/films/
router.get('/', getFilms)

router.get('/:id', getFilm)

router.get('/list', getFilmsList)

router.get('booking/:id', getBookingPage)

export default router