import { Router } from "express";
const router = Router();
// import { authenticateUser } from "../controllers/controller.js";
import { authenticateUser } from "../controllers/controller.js";
/** import controllers */
import * as controller from "../controllers/controller.js";

/** Questions Routes API */

router
  .route("/questions")
  .get(controller.getQuestions) /** GET Request */
  .post(controller.insertQuestions) /** POST Request */
  .delete(controller.dropQuestions); /** DELETE Request */

router
  .route("/result")
  .get(controller.getResult)
  .post(controller.storeResult)
  .delete(controller.dropResult);

  /** Use authenticateUser middleware in a route */
router.post("/authenticate", authenticateUser);

export default router;
