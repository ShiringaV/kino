import express from 'express'
import { createUser, getUser, deleteUser, getUsers } from '../controllers/users.js'

const router = express.Router()

// All routes in here are starting with /users
router.get('/', getUsers)

router.post('/', createUser)

router.get('/:id', getUser)

router.delete('/:id', deleteUser)

export default router