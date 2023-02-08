"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const getDecksController_1 = __importDefault(require("../controllers/getDecksController"));
const createDeckController_1 = __importDefault(require("../controllers/createDeckController"));
const deleteDeckController_1 = __importDefault(require("../controllers/deleteDeckController"));
const createCardForDeckController_1 = __importDefault(require("../controllers/createCardForDeckController"));
const getDeckController_1 = __importDefault(require("../controllers/getDeckController"));
const deleteCardOnDeckController_1 = __importDefault(require("../controllers/deleteCardOnDeckController"));
router.route('/')
    .get(getDecksController_1.default)
    .post(createDeckController_1.default);
router.route('/:deckId')
    .get(getDeckController_1.default)
    .delete(deleteDeckController_1.default);
router.route('/:deckId/cards')
    .post(createCardForDeckController_1.default);
router.route('/:deckId/cards/:index')
    .delete(deleteCardOnDeckController_1.default);
exports.default = module.exports = router;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVja3MuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvcm91dGVzL2RlY2tzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsc0RBQTZCO0FBQzdCLE1BQU0sTUFBTSxHQUFHLGlCQUFPLENBQUMsTUFBTSxFQUFFLENBQUE7QUFDL0IsMkZBQWtFO0FBQ2xFLCtGQUFzRTtBQUN0RSwrRkFBc0U7QUFDdEUsNkdBQW9GO0FBQ3BGLHlGQUFnRTtBQUNoRSwyR0FBa0Y7QUFJbEYsTUFBTSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUM7S0FDWixHQUFHLENBQUMsNEJBQWtCLENBQUM7S0FDdkIsSUFBSSxDQUFDLDhCQUFvQixDQUFDLENBQUE7QUFFL0IsTUFBTSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUM7S0FDbkIsR0FBRyxDQUFDLDJCQUFpQixDQUFDO0tBQ3RCLE1BQU0sQ0FBQyw4QkFBb0IsQ0FBQyxDQUFBO0FBRWpDLE1BQU0sQ0FBQyxLQUFLLENBQUMsZ0JBQWdCLENBQUM7S0FDekIsSUFBSSxDQUFDLHFDQUEyQixDQUFDLENBQUE7QUFFdEMsTUFBTSxDQUFDLEtBQUssQ0FBQyx1QkFBdUIsQ0FBQztLQUNoQyxNQUFNLENBQUMsb0NBQTBCLENBQUMsQ0FBQTtBQUt2QyxrQkFBZSxNQUFNLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQSJ9