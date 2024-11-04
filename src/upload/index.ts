import { Router } from "express";
import multer from "multer";

const upload = multer({
  storage: multer.memoryStorage(),
});

const uploadRouter = Router();

uploadRouter.post("/", upload.array("files"), (req, res) => {
  console.log(req.files);
  return res.sendStatus(200);
});

uploadRouter.get("/:filepath", (req, res) => {
  console.log(req.params.filepath);
  return res.sendStatus(200);
});

export { uploadRouter };
