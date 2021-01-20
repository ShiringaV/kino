import express from 'express'
import { getNews, postNews, putNews, deleteNews } from '../../controllers/admin/news.js'

const router = express.Router()

router.get('/', getNews)

router.post('/', postNews)

router.put('/:id', putNews)

router.delete('/:id', deleteNews)

export default router