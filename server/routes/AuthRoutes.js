import { Router } from "express";
import { checkUser, getAllUsers, onBoardUser,generateToken } from "../controllers/AuthController.js";


const router=Router();


router.post("/check-user",checkUser);
router.post("/onboard-user",onBoardUser);
router.get("/get-contacts",getAllUsers);
router.get("/generate-token/:userId",generateToken);

export default router;
