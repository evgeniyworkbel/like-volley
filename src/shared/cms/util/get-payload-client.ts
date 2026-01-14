import { getPayload, Payload } from "payload";
import config from "../payload.config";

export async function getPayloadClient(): Promise<Payload> {
  const payloadConfig = await config;
  return getPayload({ config: payloadConfig });
}
