import express from 'express'
import { getPages, getPage, postPage, putPage, deletePage } from '../../controllers/admin/page.js'

const router = express.Router()

router.get('/', getPages)

router.get('/:id', getPage)

router.post('/:id', postPage)

router.put('/:id', putPage)

router.delete('/:id', deletePage)

export default router