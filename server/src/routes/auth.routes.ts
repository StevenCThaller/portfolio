import { Router } from "express";
import {
  validateLogin,
  validateRegistration,
} from "../middleware/auth.middleware";
import { handleLogin, handleRegister } from "../controllers/auth.controller";

const router: Router = Router();

router.route("/signup").post(validateRegistration, handleRegister);
router.route("/signin").post(validateLogin, handleLogin);

export default router;
