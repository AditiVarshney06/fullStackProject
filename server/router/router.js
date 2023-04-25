import { Router } from "express";
import * as controller from "../Controllers/controller.js";
const router = Router();

router
  .route("/questions")
  .get(controller.getQuestion)
  .post(controller.insertQuestion)
  .delete(controller.dropQuestion);

router
  .route("/result")
  .get(controller.getResult)
  .post(controller.insertResult)
  .delete(controller.dropResult );

export default router;
// i have named this folder as router insted of route
