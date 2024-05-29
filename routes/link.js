import express from "express";
import LinkController from "../controllers/link_controller.js";

const router = express.Router()

router.get('/:id', LinkController.getLinkById)

router.post('/', LinkController.addNewLink)

router.put('/:id', LinkController.updateTargetsToLink)

router.delete('/:id', LinkController.deleteById)

export default router