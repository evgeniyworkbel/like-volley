import { getFileKey } from "@payloadcms/plugin-cloud-storage/utilities";
import path from "path";

type GenerateURLArgs = {
  bucket: string;
  collectionPrefix?: string;
  endpoint: string;
  filename: string;
  prefix: string;
  useCompositePrefixes?: boolean;
};

export function generateURL({
  bucket,
  collectionPrefix = "",
  endpoint,
  filename,
  prefix,
  useCompositePrefixes = false,
}: GenerateURLArgs): string {
  const { fileKey: rawFileKey } = getFileKey({
    collectionPrefix,
    docPrefix: prefix,
    filename,
    useCompositePrefixes,
  });

  const dir = path.posix.dirname(rawFileKey);
  const encodedFilename = encodeURIComponent(path.posix.basename(rawFileKey));
  const fileKey = dir === "." ? encodedFilename : path.posix.join(dir, encodedFilename);

  return `${endpoint}/${bucket}/${fileKey}`;
}
