import express from 'express'
const router = express.Router()
import getDecksController from '../controllers/getDecksController'
import createDeckController from '../controllers/createDeckController'
import deleteDeckController from '../controllers/deleteDeckController'
import createCardForDeckController from '../controllers/createCardForDeckController'





router.route('/')
    .get(getDecksController)
    .post(createDeckController)

router.route('/:deckId')
    .delete(deleteDeckController)

router.route('/:deckId/cards')
    .post(createCardForDeckController)
    
export default module.exports = router