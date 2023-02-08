import express from 'express'
const router = express.Router()
import getDecksController from '../controllers/getDecksController'
import createDeckController from '../controllers/createDeckController'
import deleteDeckController from '../controllers/deleteDeckController'
import createCardForDeckController from '../controllers/createCardForDeckController'
import getDeckController from '../controllers/getDeckController'
import deleteCardOnDeckController from '../controllers/deleteCardOnDeckController'



router.route('/')
    .get(getDecksController)
    .post(createDeckController)

router.route('/:deckId')
    .get(getDeckController)
    .delete(deleteDeckController)

router.route('/:deckId/cards')
    .post(createCardForDeckController)

router.route('/:deckId/cards/:index')
    .delete(deleteCardOnDeckController)



    
export default module.exports = router