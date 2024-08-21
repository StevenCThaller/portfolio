import { Router } from "express";
import {
  handleCreateContactMessage,
  handleDeleteMessage,
  handleGetAllContactMessages,
  handleToggleReadStatus,
} from "../controllers/contact.controller";
import { validateContactMessage } from "../middleware/contact.middleware";
import { requireAdmin, requireAuth } from "../middleware/auth.middleware";

const router: Router = Router();

router
  .route("/")
  .get(requireAuth, requireAdmin, handleGetAllContactMessages)
  .post(validateContactMessage, handleCreateContactMessage);

router.put("/:id/read", requireAuth, requireAdmin, handleToggleReadStatus);

router.route("/:id").delete(requireAuth, requireAdmin, handleDeleteMessage);

export default router;
