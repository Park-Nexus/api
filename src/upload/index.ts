import { Router } from "express";
import multer from "multer";
import { uploadFile } from "../storage";

const uploadRouter = Router();
const upload = multer({
  storage: multer.memoryStorage(),
});

// User avatar upload ------------------------------------------------------------------
uploadRouter.post("/avatar", upload.single("file"), async (req, res) => {
  const file = req.file;

  if (!file) return res.sendStatus(400);
  const savedPath = await uploadFile({ file, folder: "avatars" });

  return res.status(200).json({ path: savedPath }).send();
});

// User Vehicle Image upload -----------------------------------------------------------------
uploadRouter.post("/vehicle/image", upload.single("file"), async (req, res) => {
  const file = req.file;

  if (!file) return res.sendStatus(400);
  const savedPath = await uploadFile({ file, folder: "vehicles" });

  return res.status(200).json({ path: savedPath }).send();
});

// Parking lot media upload ------------------------------------------------------------------
uploadRouter.post("/parkingLot/media", upload.array("files"), async (req, res) => {
  const files = req.files as Express.Multer.File[];

  if (!files || files?.length === 0) return res.sendStatus(400);
  const savedPaths = await Promise.all(
    files.map(async (file) => {
      const savedPath = await uploadFile({ file, folder: "parkingLots" });
      return savedPath;
    }),
  );

  return res.status(200).json({ paths: savedPaths }).send();
});

// Parking lot service media upload ------------------------------------------------------------------
uploadRouter.post("/parkingLotService/media", upload.array("files"), async (req, res) => {
  const files = req.files as Express.Multer.File[];

  if (!files || files?.length === 0) return res.sendStatus(400);
  const savedPaths = await Promise.all(
    files.map(async (file) => {
      const savedPath = await uploadFile({ file, folder: "parkingLotServices" });
      return savedPath;
    }),
  );

  return res.status(200).json({ paths: savedPaths }).send();
});

// Get file signed url ------------------------------------------------------------------
uploadRouter.get("/signedUrl/:filepath", (req, res) => {
  console.log(req.params.filepath);
  return res.sendStatus(200);
});

export { uploadRouter };
