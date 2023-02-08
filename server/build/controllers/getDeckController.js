"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Deck_1 = __importDefault(require("../models/Deck"));
const getDeckController = async (req, res) => {
    const deckId = req.params.deckId;
    const deck = await Deck_1.default.findById(deckId);
    if (!deck)
        res.json({ "message": "No deck was found" });
    res.status(200).json(deck);
};
exports.default = getDeckController;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2V0RGVja0NvbnRyb2xsZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvY29udHJvbGxlcnMvZ2V0RGVja0NvbnRyb2xsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQSwwREFBaUM7QUFFakMsTUFBTSxpQkFBaUIsR0FBRyxLQUFLLEVBQUUsR0FBWSxFQUFDLEdBQWEsRUFBRSxFQUFFO0lBQzNELE1BQU0sTUFBTSxHQUFJLEdBQUcsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFBO0lBQ2pDLE1BQU0sSUFBSSxHQUFHLE1BQU0sY0FBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQTtJQUN4QyxJQUFHLENBQUMsSUFBSTtRQUFFLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRSxTQUFTLEVBQUUsbUJBQW1CLEVBQUMsQ0FBQyxDQUFBO0lBQ3JELEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFBO0FBQzlCLENBQUMsQ0FBQTtBQUVELGtCQUFlLGlCQUFpQixDQUFBIn0=