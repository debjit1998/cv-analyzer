import OpenAI from "openai";
import dotenv from "dotenv";

dotenv.config();

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export const chatCompletions = async (content, prompt) => {
  return await openai.chat.completions.create({
    model: "gpt-4-turbo",
    messages: [
      {
        role: "system",
        content: prompt,
      },
      {
        role: "user",
        content: content,
      },
    ],
    temperature: 0.7,
    top_p: 1,
  });
};
