import express from 'express'
import UserController from '../controllers/user_controller.js'


const router = express.Router()

router.get('/', UserController.getAllUsers)

router.get('/:id', UserController.getUserById)

router.post('/', UserController.addNewUser)

router.put('/:id', UserController.updateUser)

router.put('/:id/link', UserController.updateLinkToUser)

router.put('/:id/remove/:linkId', UserController.removeLinkFromUser)

router.delete('/:id', UserController.deleteUser)

export default router
