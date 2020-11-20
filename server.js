import express from 'express';
import bodyParser from 'body-parser';
const cors = require('cors')

import memoryMongoServer from './utils/memoryMongoServer';

import addMonster from "./routes/addMonster"
import getAllMonsters from "./routes/getAllMonsters"
import getSingleMonster from "./routes/getSingleMonster"

const app = express();

memoryMongoServer();

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(cors());

app.get("/monster", getAllMonsters);
app.get("/monster/:name", getSingleMonster);
app.post("/monster", addMonster);

app.listen(8080, () =>
  console.log(
    `Server initialized succesfully.`
  )
);
