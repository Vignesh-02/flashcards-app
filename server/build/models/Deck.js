"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = mongoose_1.default.Schema;
// const objectId = mongoose.Types.ObjectId
const DeckSchema = new Schema({
    title: String,
    cards: [String],
});
const DeckModel = mongoose_1.default.model('Deck', DeckSchema);
exports.default = DeckModel;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRGVjay5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9tb2RlbHMvRGVjay50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLHdEQUErQjtBQUMvQixNQUFNLE1BQU0sR0FBRyxrQkFBUSxDQUFDLE1BQU0sQ0FBQTtBQUM5QiwyQ0FBMkM7QUFFM0MsTUFBTSxVQUFVLEdBQUcsSUFBSSxNQUFNLENBQUM7SUFDMUIsS0FBSyxFQUFFLE1BQU07SUFDYixLQUFLLEVBQUUsQ0FBQyxNQUFNLENBQUM7Q0FDbEIsQ0FBQyxDQUFBO0FBRUYsTUFBTSxTQUFTLEdBQUcsa0JBQVEsQ0FBQyxLQUFLLENBQUMsTUFBTSxFQUFFLFVBQVUsQ0FBQyxDQUFBO0FBRXBELGtCQUFlLFNBQVMsQ0FBQSJ9