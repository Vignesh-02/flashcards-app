"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Deck_1 = __importDefault(require("../models/Deck"));
const getDecksController = async (req, res) => {
    const decks = await Deck_1.default.find();
    if (!decks)
        res.json({ "message": "No flash card decks found" });
    res.status(200).json(decks);
};
exports.default = getDecksController;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2V0RGVja3NDb250cm9sbGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2NvbnRyb2xsZXJzL2dldERlY2tzQ29udHJvbGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLDBEQUFpQztBQUVqQyxNQUFNLGtCQUFrQixHQUFHLEtBQUssRUFBRSxHQUFZLEVBQUMsR0FBYSxFQUFFLEVBQUU7SUFDNUQsTUFBTSxLQUFLLEdBQUcsTUFBTSxjQUFJLENBQUMsSUFBSSxFQUFFLENBQUE7SUFDL0IsSUFBRyxDQUFDLEtBQUs7UUFBRSxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUUsU0FBUyxFQUFFLDJCQUEyQixFQUFDLENBQUMsQ0FBQTtJQUM5RCxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQTtBQUMvQixDQUFDLENBQUE7QUFFRCxrQkFBZSxrQkFBa0IsQ0FBQSJ9