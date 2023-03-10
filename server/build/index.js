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
const site_url = process.env.SITE_URL;
const whitelist = ["http://localhost:5173/", site_url];
const corsOptions = {
    origin: function (origin, callback) {
        if (whitelist.indexOf(origin) !== -1) {
            callback(null, true);
        }
        else {
            callback(new Error("Not allowed by CORS"), false);
        }
    },
};
// app.use(cors(corsOptions));
// For development use this, 'http://localhost:5173'
console.log(process.env.mode);
const origin_url = process.env.mode === 'prod' ? site_url : 'http://localhost:5173';
app.use((0, cors_1.default)({
    origin: origin_url
}));
app.use(express_1.default.json());
app.use("/decks", decks_1.default);
app.get("/", (req, res) => {
    res.send("henlo world");
});
app.get("/henlo", (req, res) => {
    res.send("henlo world");
});
mongoose_1.default.connect(process.env.ATLAS_URI).then(() => {
    app.listen(PORT, () => {
        console.log(`server is running on port ${PORT}`);
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxzREFBcUQ7QUFDckQsd0RBQWdDO0FBQ2hDLGdEQUF3QjtBQUN4QixtQ0FBZ0M7QUFDaEMsSUFBQSxlQUFNLEdBQUUsQ0FBQztBQUVULHlEQUFpQztBQUNqQywyREFBd0M7QUFFeEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxjQUFJLENBQUMsQ0FBQztBQUNsQixNQUFNLEdBQUcsR0FBRyxJQUFBLGlCQUFPLEdBQUUsQ0FBQztBQUN0QixNQUFNLElBQUksR0FBRyxJQUFJLENBQUM7QUFFbEIsTUFBTSxRQUFRLEdBQUcsT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUM7QUFFdEMsTUFBTSxTQUFTLEdBQUcsQ0FBQyx3QkFBd0IsRUFBRSxRQUFRLENBQUMsQ0FBQztBQUV2RCxNQUFNLFdBQVcsR0FBRztJQUNoQixNQUFNLEVBQUUsVUFDSixNQUEwQixFQUMxQixRQUFpRTtRQUVqRSxJQUFJLFNBQVMsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUU7WUFDbEMsUUFBUSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztTQUN4QjthQUFNO1lBQ0gsUUFBUSxDQUFDLElBQUksS0FBSyxDQUFDLHFCQUFxQixDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUM7U0FDckQ7SUFDTCxDQUFDO0NBQ0osQ0FBQztBQUVGLDhCQUE4QjtBQUM5QixvREFBb0Q7QUFDcEQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFBO0FBQzdCLE1BQU0sVUFBVSxHQUFHLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxLQUFLLE1BQU0sQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyx1QkFBdUIsQ0FBQTtBQUVuRixHQUFHLENBQUMsR0FBRyxDQUFDLElBQUEsY0FBSSxFQUFDO0lBQ1QsTUFBTSxFQUFFLFVBQVU7Q0FDckIsQ0FBQyxDQUFDLENBQUE7QUFFSCxHQUFHLENBQUMsR0FBRyxDQUFDLGlCQUFPLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQztBQUV4QixHQUFHLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBRSxlQUFVLENBQUMsQ0FBQztBQUU5QixHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxDQUFDLEdBQVksRUFBRSxHQUFhLEVBQUUsRUFBRTtJQUN6QyxHQUFHLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO0FBQzVCLENBQUMsQ0FBQyxDQUFDO0FBQ0gsR0FBRyxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxHQUFZLEVBQUUsR0FBYSxFQUFFLEVBQUU7SUFDOUMsR0FBRyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztBQUM1QixDQUFDLENBQUMsQ0FBQztBQUVILGtCQUFRLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsU0FBVSxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRTtJQUMvQyxHQUFHLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxHQUFHLEVBQUU7UUFDbEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyw2QkFBNkIsSUFBSSxFQUFFLENBQUMsQ0FBQztJQUNyRCxDQUFDLENBQUMsQ0FBQztBQUNQLENBQUMsQ0FBQyxDQUFDIn0=