"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Deck_1 = __importDefault(require("../models/Deck"));
const createCardForDeckController = async (req, res) => {
    const deckId = req.params.deckId;
    const deck = await Deck_1.default.findById(deckId);
    if (!deck)
        return res.status(400).json({ message: 'Deck not found ' });
    const { text } = req.body;
    deck.cards.push(text);
    await deck.save();
    res.json(deck);
};
exports.default = createCardForDeckController;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JlYXRlQ2FyZEZvckRlY2tDb250cm9sbGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2NvbnRyb2xsZXJzL2NyZWF0ZUNhcmRGb3JEZWNrQ29udHJvbGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLDBEQUFpQztBQUVqQyxNQUFNLDJCQUEyQixHQUFHLEtBQUssRUFBRSxHQUFZLEVBQUMsR0FBYSxFQUFFLEVBQUU7SUFDckUsTUFBTSxNQUFNLEdBQUcsR0FBRyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUE7SUFDaEMsTUFBTSxJQUFJLEdBQUcsTUFBTSxjQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFBO0lBQ3hDLElBQUcsQ0FBQyxJQUFJO1FBQUUsT0FBTyxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLE9BQU8sRUFBRSxpQkFBaUIsRUFBQyxDQUFDLENBQUE7SUFDcEUsTUFBTSxFQUFFLElBQUksRUFBRSxHQUFHLEdBQUcsQ0FBQyxJQUFJLENBQUE7SUFDekIsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUE7SUFDckIsTUFBTSxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUE7SUFDakIsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQTtBQUNsQixDQUFDLENBQUE7QUFFRCxrQkFBZSwyQkFBMkIsQ0FBQSJ9