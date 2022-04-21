import axios from "axios"
import "dotenv/config";

export const Tenor = async (query: string) => {
    let res = await (await axios.get(
      `https://g.tenor.com/v1/search?key=${process.env.TENOR_API_KEY}&q=${query.replace(" ", "-").toLowerCase()}`
    )).data
    if(!res || res.results.length < 1) return { response: "failed" }
  const response = res.results[Math.floor(Math.random() * res.results.length)];
  const obj = {
    url: response.url,
    title: response.title || "No title",
    description: response.content_description || "No description",
  };
  response.media[0].loopedMp4 ? obj['repeatMp4'] = {
    url: response.media[0].loopedMp4.url,
    duration: response.media[0].loopedMp4.duration,
  } : null;
  return obj
}