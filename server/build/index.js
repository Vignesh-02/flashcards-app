"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = require("dotenv");
(0, dotenv_1.config)();
const Deck_1 = __importDefault(require("./models/Deck"));
const decks_1 = __importDefault(require("./routes/decks"));
console.log(Deck_1.default);
const app = (0, express_1.default)();
const PORT = 5002;
app.use((0, cors_1.default)({
    origin: 'http://localhost:5173'
}));
app.use(express_1.default.json());
app.use("/decks", decks_1.default);
app.get("/", (req, res) => {
    res.send('henlo world');
});
app.get("/henlo", (req, res) => {
    res.send('henlo world');
});
mongoose_1.default.connect(process.env.ATLAS_URI)
    .then(() => {
    app.listen(PORT, () => {
        console.log(`server is running on port ${PORT}`);
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxzREFBbUQ7QUFDbkQsd0RBQStCO0FBQy9CLGdEQUF1QjtBQUN2QixtQ0FBK0I7QUFDL0IsSUFBQSxlQUFNLEdBQUUsQ0FBQTtBQUVSLHlEQUFnQztBQUNoQywyREFBdUM7QUFFdkMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxjQUFJLENBQUMsQ0FBQTtBQUNqQixNQUFNLEdBQUcsR0FBRyxJQUFBLGlCQUFPLEdBQUUsQ0FBQTtBQUNyQixNQUFNLElBQUksR0FBQyxJQUFJLENBQUE7QUFFZixHQUFHLENBQUMsR0FBRyxDQUFDLElBQUEsY0FBSSxFQUFDO0lBQ1QsTUFBTSxFQUFFLHVCQUF1QjtDQUNsQyxDQUFDLENBQUMsQ0FBQTtBQUNILEdBQUcsQ0FBQyxHQUFHLENBQUMsaUJBQU8sQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFBO0FBRXZCLEdBQUcsQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFFLGVBQVUsQ0FBQyxDQUFBO0FBRTdCLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLENBQUMsR0FBWSxFQUFDLEdBQWEsRUFBRSxFQUFFO0lBQ3hDLEdBQUcsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUE7QUFDM0IsQ0FBQyxDQUFDLENBQUE7QUFDRixHQUFHLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBRSxDQUFDLEdBQVksRUFBQyxHQUFhLEVBQUUsRUFBRTtJQUM3QyxHQUFHLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFBO0FBQzNCLENBQUMsQ0FBQyxDQUFBO0FBRUYsa0JBQVEsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxTQUFVLENBQUM7S0FDdkMsSUFBSSxDQUFDLEdBQUcsRUFBRTtJQUNQLEdBQUcsQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLEdBQUcsRUFBRTtRQUNsQixPQUFPLENBQUMsR0FBRyxDQUFDLDZCQUE2QixJQUFJLEVBQUUsQ0FBQyxDQUFBO0lBQ3BELENBQUMsQ0FBQyxDQUFBO0FBQ04sQ0FBQyxDQUFDLENBQUEifQ==