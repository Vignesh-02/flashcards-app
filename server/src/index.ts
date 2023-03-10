import express, { Request, Response } from "express";
import mongoose from "mongoose";
import cors from "cors";
import { config } from "dotenv";
config();

import Deck from "./models/Deck";
import deckRoutes from "./routes/decks";

console.log(Deck);
const app = express();
const PORT = 5002;

const site_url = process.env.SITE_URL;

const whitelist = ["http://localhost:5173/", site_url];

const corsOptions = {
    origin: function (
        origin: string | undefined,
        callback: (arg0: Error | null, arg1: boolean | undefined) => void
    ) {
        if (whitelist.indexOf(origin) !== -1) {
            callback(null, true);
        } else {
            callback(new Error("Not allowed by CORS"), false);
        }
    },
};

// app.use(cors(corsOptions));
// For development use this, 'http://localhost:5173'
console.log(process.env.mode)
const origin_url = process.env.mode === 'prod' ? site_url : 'http://localhost:5173'

app.use(cors({
    origin: origin_url
}))

app.use(express.json());

app.use("/decks", deckRoutes);

app.get("/", (req: Request, res: Response) => {
    res.send("henlo world");
});
app.get("/henlo", (req: Request, res: Response) => {
    res.send("henlo world");
});

mongoose.connect(process.env.ATLAS_URI!).then(() => {
    app.listen(PORT, () => {
        console.log(`server is running on port ${PORT}`);
    });
});
