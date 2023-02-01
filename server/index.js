import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import multer from 'multer';
import helmet from 'helmet';
import morgan from 'morgan';
import path from 'path';
import { fileURLToPath } from 'url';
import authRoutes from './routes/auth.js';
import userRoutes from './routes/users.js';
import characterRoutes from './routes/character.js'
import raceRoutes from './routes/race.js'
import classRoutes from './routes/charClass.js'
import traitsRoutes from './routes/traits.js'
import eqpRoutes from './routes/eqp.js'
import backgroundRoutes from './routes/background.js'
import { register } from './controllers/auth.js';

/* CONFIGURATION */
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config();
const app = express();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin"}));
app.use(morgan("common"));
app.use(bodyParser.json({ limit: "30mb", extended: true}));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true}));
app.use(cors());


//dir for image storing
app.use("/images", express.static('images'));


/* FILE STORAGE */
//from github repo of multer
const storage = multer.diskStorage( {
    destination: function (req, file, cb) {
        cb(null, "public/assets");
    },
     filename: function (req, file, cb ) {
        cb(null, file.originalname);
     }
})
const upload = multer({storage});

/*ROUTES WITH FILES*/
app.post("/auth/register", upload.single("picture"), register);

/*ROUTES*/
app.use("/auth", authRoutes);
app.use("/users", userRoutes);
app.use("/character", characterRoutes);
app.use("/race", raceRoutes);
app.use("/class", classRoutes);
app.use("/traits", traitsRoutes);
app.use("/eqp", eqpRoutes);
app.use("/background", backgroundRoutes);

/*MONGOOSE SETUP*/
const PORT = process.env.port || 3000;
mongoose.set('strictQuery', true);
mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    app.listen(PORT, () => console.log('Database Connected and Server Port is: ' + PORT));
}).catch((error) => console.log(error + 'did not connect'));

