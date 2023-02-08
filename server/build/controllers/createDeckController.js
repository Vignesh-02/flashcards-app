"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Deck_1 = __importDefault(require("../models/Deck"));
const createDeckController = async (req, res) => {
    const { title } = req.body;
    const newDeck = new Deck_1.default({
        title
    });
    const createdDeck = await newDeck.save();
    res.json(createdDeck);
};
exports.default = createDeckController;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JlYXRlRGVja0NvbnRyb2xsZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvY29udHJvbGxlcnMvY3JlYXRlRGVja0NvbnRyb2xsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQSwwREFBaUM7QUFFakMsTUFBTSxvQkFBb0IsR0FBRyxLQUFLLEVBQUUsR0FBWSxFQUFDLEdBQWEsRUFBRSxFQUFFO0lBQzlELE1BQU0sRUFBRSxLQUFLLEVBQUUsR0FBRyxHQUFHLENBQUMsSUFBSSxDQUFBO0lBQzFCLE1BQU0sT0FBTyxHQUFHLElBQUksY0FBSSxDQUFDO1FBQ3JCLEtBQUs7S0FDUixDQUFDLENBQUE7SUFDRixNQUFNLFdBQVcsR0FBRyxNQUFNLE9BQU8sQ0FBQyxJQUFJLEVBQUUsQ0FBQTtJQUN4QyxHQUFHLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFBO0FBQ3pCLENBQUMsQ0FBQTtBQUVELGtCQUFlLG9CQUFvQixDQUFBIn0=