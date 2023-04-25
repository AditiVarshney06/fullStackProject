import Result from "../models/resultSchema.js";
import { Questions } from "../models/questionSchema.js";
import questions, { answers } from "../database/data.js";
export async function getQuestion(req, res) {
  try {
    const r = await Questions.find();
    res.json(r);
  } catch (error) {
    res.json({ error });
  }
}
export async function insertQuestion(req, res) {
  try {
    Questions.insertMany({questions,answers})
    .then(function(err,data){
      res.json("question save");
    })
    .catch(function(err){
       console.log(err);
    });
    
  } catch (error) {
    res.json({ error });
  }
}
export async function dropQuestion(req, res) {
  try {
    await Questions.deleteMany();
    res.json("deleted");
  } catch (error) {
    res.json({ error });
  }
}

export async function getResult(req, res) {
  try {
    const r = await Result.find();
    res.json(r);
  } catch (error) {
    res.json({ error });
  }
}
export async function insertResult(req, res) {
  try {
    const { username, result, attempts, points, achived } = req.body;
    if (!username && !result) throw Error("data not provided");
    Result.create({ username, result, attempts, points, achived })
      .then((result) => {
        res.send({ msg: "result saved" });
      })
      .catch((err) => {
        res.send({ msg: "error" });
      });
  } catch (error) {
    res.json({ error });
  }
}
export async function dropResult(req, res) {
  try {
    await Result.deleteMany();
    res.json({ msg: "result deleted" });
  } catch (error) {
    res.json({ error });
  }
}
