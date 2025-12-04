import express from "express";
import { getUsers, createUser, updateUser, deleteUser } from "../controllers/UserController.js";

const router = express.Router();

router.get("/", getUsers);
router.post("/", createUser);
router.put("/:id", updateUser);
router.delete("/:id", deleteUser);

export default router;
