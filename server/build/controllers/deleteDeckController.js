"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Deck_1 = __importDefault(require("../models/Deck"));
const deleteDeckController = async (req, res) => {
    const deckId = req.params.deckId;
    const result = await Deck_1.default.findByIdAndDelete(deckId).exec();
    res.json(result);
};
exports.default = deleteDeckController;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVsZXRlRGVja0NvbnRyb2xsZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvY29udHJvbGxlcnMvZGVsZXRlRGVja0NvbnRyb2xsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQSwwREFBaUM7QUFFaEMsTUFBTSxvQkFBb0IsR0FBRyxLQUFLLEVBQUUsR0FBWSxFQUFDLEdBQWEsRUFBRSxFQUFFO0lBQy9ELE1BQU0sTUFBTSxHQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFBO0lBRWhDLE1BQU0sTUFBTSxHQUFHLE1BQU0sY0FBSSxDQUFDLGlCQUFpQixDQUFDLE1BQU0sQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFBO0lBQzFELEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUE7QUFDbkIsQ0FBQyxDQUFBO0FBRUQsa0JBQWUsb0JBQW9CLENBQUEifQ==