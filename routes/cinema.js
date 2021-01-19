import exspress from 'express'
import { getCinemas, getCinema, getCinemaHall, getAboutCinema} from '../controllers/cinema.js'

const router = exspress.Router()

router.get('/', getCinemas)

router.get('/:id', getCinema)

router.get('/hall/:id', getCinemaHall)

router.get('/about/:id', getAboutCinema)

export default router