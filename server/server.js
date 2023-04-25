import express from "express";
import morgan from "morgan";
import cors from "cors";
import { config } from "dotenv";
import router from "./router/router.js";
import connect from "./database/conn.js";

const app = express();
app.use(morgan("tiny"));
app.use(cors());
app.use(express.json());
config();
const port = process.env.PORT || 8080;


app.use('/api',router)

app.get("/", (req, res) => {
  try {
    res.json("hiii");
  } catch (error) {
    res.json(error);
  }
});

connect().then(()=>{
  try{
    app.listen(port, () => {
        console.log(`connected http://localhost:${port}`);
      });
  }catch(error){
    console.log("cant connect");
  }
}).catch(error =>{
    console.log("invalid databas connection");
})

