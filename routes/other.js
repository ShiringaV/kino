import express from 'express'
import { getNews, getCafe, getVip, getChildrensroom, 
    getAdvertisers, getApps, getContacts, getUser } from '../controllers/other.js'

const router = express.Router()

router.get('/news', getNews)

router.get('/cafe', getCafe)

router.get('/vip', getVip)

router.get('/childrensroom', getChildrensroom)

router.get('/advertisers', getAdvertisers)

router.get('/apps', getApps)

router.get('/contacts', getContacts)

router.get('/user/:id', getUser)


export default router