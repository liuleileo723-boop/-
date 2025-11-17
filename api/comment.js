import { Redis } from "@upstash/redis";

const redis = new Redis({
  url: process.env.UPSTASH_REDIS_REST_URL,
  token: process.env.UPSTASH_REDIS_REST_TOKEN
});

export default async function handler(req, res) {
  if (req.method === "GET") {
    const list = (await redis.get("comments")) || [];
    return res.status(200).json(list);
  }

  if (req.method === "POST") {
    try {
      const { name, message } = JSON.parse(req.body);

      const list = (await redis.get("comments")) || [];

      const item = {
        id: Date.now(),
        name,
        message,
        time: new Date().toISOString()
      };

      list.push(item);

      await redis.set("comments", list);

      return res.status(200).json({ code: 0, msg: "留言成功", data: item });
    } catch (e) {
      return res.status(400).json({ code: -1, msg: "格式错误" });
    }
  }

  return res.status(405).json({ msg: "Method not allowed" });
}
