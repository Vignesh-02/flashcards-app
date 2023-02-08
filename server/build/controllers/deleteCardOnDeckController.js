"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Deck_1 = __importDefault(require("../models/Deck"));
const deleteCardOnDeckController = async (req, res) => {
    const deckId = req.params.deckId;
    const index = req.params.index;
    const deck = await Deck_1.default.findById(deckId);
    if (!deck)
        return res.status(400).json({ message: 'Deck not found ' });
    deck.cards.splice(parseInt(index), 1);
    await deck.save();
    res.json(deck);
};
exports.default = deleteCardOnDeckController;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVsZXRlQ2FyZE9uRGVja0NvbnRyb2xsZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvY29udHJvbGxlcnMvZGVsZXRlQ2FyZE9uRGVja0NvbnRyb2xsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQSwwREFBaUM7QUFFakMsTUFBTSwwQkFBMEIsR0FBRyxLQUFLLEVBQUUsR0FBWSxFQUFDLEdBQWEsRUFBRSxFQUFFO0lBQ3BFLE1BQU0sTUFBTSxHQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFBO0lBQ2hDLE1BQU0sS0FBSyxHQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFBO0lBQzlCLE1BQU0sSUFBSSxHQUFHLE1BQU0sY0FBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQTtJQUN4QyxJQUFHLENBQUMsSUFBSTtRQUFFLE9BQU8sR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRSxPQUFPLEVBQUUsaUJBQWlCLEVBQUMsQ0FBQyxDQUFBO0lBQ3BFLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsRUFBQyxDQUFDLENBQUMsQ0FBQTtJQUNwQyxNQUFNLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQTtJQUNqQixHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFBO0FBQ2xCLENBQUMsQ0FBQTtBQUVELGtCQUFlLDBCQUEwQixDQUFBIn0=