import { Router } from "express";
import contactRouter from "./contact.routes";
import authRouter from "./auth.routes";

const router: Router = Router();

router.get("/", (req, res) => res.sendStatus(200));
router.use("/auth", authRouter);
router.use("/contact", contactRouter);

export default router;
