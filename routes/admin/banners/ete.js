import express from 'express'
import { getBannerEte, postBannerEte, 
    putBannerEte, deleteBannerEte } from '../../../controllers/admin/banners/ete.js'

const router = express.Router()

router.get('/', getBannerEte)

router.post('/', postBannerEte)

router.put('/:id', putBannerEte)

router.delete('/:id', deleteBannerEte)

export default router