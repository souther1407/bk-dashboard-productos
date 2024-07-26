import AWS from "aws-sdk";
import { unlink } from "fs/promises";
import fs from "fs";
AWS.config.update({ region: "us-east-1" });
const s3 = new AWS.S3();

const uploadFile = (uploadOptions) => {
  return new Promise((resove, reject) => {
    s3.upload(uploadOptions, (err, data) => {
      if (err) {
        reject(err);
      } else {
        resove(data);
      }
    });
  });
};

export const uploadFiles = async (files) => {
  const uploads = [];
  for (let f of files) {
    const stream = fs.createReadStream(f.path);
    uploads.push(
      uploadFile({
        Bucket: "test-eac92-70927933",
        Body: stream,
        Key: f.originalname,
      })
    );
  }
  const results = await Promise.all(uploads);
  const links = results.map((r) => r.Location);
  for (let f of files) {
    await unlink(f.path);
  }
  return links;
};
