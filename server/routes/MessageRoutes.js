import { Router } from "express";

import {addImageMessage,
     addMessage, 
     getMessage,
    addAudioMessage }
      from "../controllers/MessageController.js";
import multer from "multer";

const router= Router();

const upload = multer({dest:"/uploads/recordings/"});

const uploadImage = multer({dest:"/uploads/images/"});

router.post("/add-message", addMessage);
router.get("/get-messages/:from/:to", getMessage);
router.post("/add-image-message", uploadImage.single("image"), addImageMessage); 
router.post("/add-audio-message", uploadImage.single("audio"), addAudioMessage); 


export default Router;