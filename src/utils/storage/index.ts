import { Storage as GCStorage } from "@google-cloud/storage";
import { v4 as uuidv4 } from "uuid";
import { BUCKET_NAME, SIGNED_URL_EXPIRATION } from "./index.types";
import path from "path";

class Storage {
  static instance: GCStorage;

  static getInstance() {
    if (!Storage.instance) {
      Storage.instance = new GCStorage({
        keyFilename: path.join(__dirname, "../../../gc-storage-key.json"),
      });
    }
    return Storage.instance;
  }
}

// Upload file --------------------------------------------------------------------
type TUploadFileParams = {
  file: Express.Multer.File;
  folder: string;
};
export async function uploadFile(params: TUploadFileParams) {
  const { file, folder } = params;
  const fileName = `${uuidv4()}-${file.originalname}`;

  await Storage.getInstance().bucket(BUCKET_NAME).file(`${folder}/${fileName}`).save(file.buffer);
  return `${folder}/${fileName}`;
}

// Get file signed url --------------------------------------------------------------
type TGetFileSignedUrlParams = {
  path: string;
};
export async function getFileSignedUrl(params: TGetFileSignedUrlParams) {
  const { path } = params;

  const [url] = await Storage.getInstance()
    .bucket(BUCKET_NAME)
    .file(path)
    .getSignedUrl({
      version: "v4",
      action: "read",
      expires: Date.now() + SIGNED_URL_EXPIRATION,
    });

  return url;
}

// Delete file --------------------------------------------------------------------
type TDeleteFileParams = {
  path: string;
};
export async function deleteFile(params: TDeleteFileParams) {
  const { path } = params;

  await Storage.getInstance().bucket(BUCKET_NAME).file(path).delete();
}

// Extract path from URL -----------------------------------------------------------
export function extractPathFromURL(url: string): string {
  // convert signed url to google-cloud bucket path
  const urlParts = url.split("?")[0];
  const pathParts = urlParts.split(BUCKET_NAME)[1].replace("/", "");

  return pathParts;
}
