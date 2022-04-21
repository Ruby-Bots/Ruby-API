import axios from "axios";
import "dotenv/config";

export default async (url: string) => {
  let res = await (
    await axios.get(url)
  ).data;
  if (!res) return { response: "failed", message: "No response found for this end point!" };
  return res;
};
