import { Storage } from "@google-cloud/storage";
import { v4 as uuidv4 } from "uuid";
import { BUCKET_NAME, SIGNED_URL_EXPIRATION } from "./index.types";

const storage = new Storage({ keyFile: "../../gc-storage-key.json" });

// Upload file --------------------------------------------------------------------
type TUploadFileParams = {
  file: Express.Multer.File;
  folder: string;
};
export async function uploadFile(params: TUploadFileParams) {
  const { file, folder } = params;
  const fileName = `${uuidv4()}-${file.originalname}`;

  await storage.bucket(BUCKET_NAME).file(`${folder}/${fileName}`).save(file.buffer);
  return fileName;
}

// Get file signed url --------------------------------------------------------------
type TGetFileSignedUrlParams = {
  path: string;
};
export async function getFileSignedUrl(params: TGetFileSignedUrlParams) {
  const { path } = params;

  const [url] = await storage
    .bucket(BUCKET_NAME)
    .file(path)
    .getSignedUrl({
      version: "v4",
      action: "read",
      expires: Date.now() + SIGNED_URL_EXPIRATION,
    });

  return url;
}
