import express from 'express'
import { getBannerTop, postBannerTop, 
    putBannerTop, deleteBannerTop } from '../../../controllers/admin/banners/top.js'

const router = express.Router()

router.get('/', getBannerTop)

router.post('/', postBannerTop)

router.put('/:id', putBannerTop)

router.delete('/:id', deleteBannerTop)

export default router