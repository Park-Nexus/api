import { Router } from "express";
import multer from "multer";
import { uploadFile } from "../storage";

const uploadRouter = Router();
const upload = multer({
  storage: multer.memoryStorage(),
});

// User avatar upload ------------------------------------------------------------------
uploadRouter.post("/avatar", upload.single("file"), async (req, res) => {
  console.log(req.file);
  const file = req.file;

  if (!file) return res.sendStatus(400);

  const savedPath = await uploadFile({ file, folder: "avatars" });

  return res.status(200).json({ path: savedPath }).send();
});

uploadRouter.post("/", upload.array("files"), (req, res) => {
  console.log(req.files);
  return res.sendStatus(200);
});

uploadRouter.get("/:filepath", (req, res) => {
  console.log(req.params.filepath);
  return res.sendStatus(200);
});

export { uploadRouter };
