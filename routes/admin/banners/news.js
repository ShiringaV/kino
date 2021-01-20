import express from 'express'
import { getBannerNews, postBannerNews, putBannerNews, deleteBannerNews } from '../../../controllers/admin/banners/news.js'

const router = express.Router()

router.get('/', getBannerNews)

router.post('/', postBannerNews)

router.put('/:id', putBannerNews)

router.delete('/:id', deleteBannerNews)

export default router