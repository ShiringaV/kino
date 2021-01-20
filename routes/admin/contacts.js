import express from 'express'
import { postContact, putContact, deleteContact } from '../../controllers/admin/contacts.js'

const router = express.Router()

router.post('/', postContact)

router.put('/:id', putContact)

router.delete('/:id', deleteContact)

export default router