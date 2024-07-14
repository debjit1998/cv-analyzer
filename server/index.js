import express from "express";
import cors from "cors";
import multer from "multer";
import { readFile, unlink } from "fs/promises";
import { getTextExtractor } from "office-text-extractor";
import prompts from "./prompts.js";
import { chatCompletions } from "./chat-completions.js";
import { resumeRenderer } from "./resume-renderer.js";

const app = express();
app.use(cors());
app.use(express.json());

const upload = multer({ dest: "/tmp/uploads" });

app.post("/upload", upload.single("cv"), async (req, res) => {
  if (!req.file) {
    return res.status(400).json({ message: "No file uploaded" });
  }
  const cvPath = req.file.path;

  try {
    const buffer = await readFile(cvPath);
    const extractor = getTextExtractor();
    const cvContent = await extractor.extractText({
      input: buffer,
      type: "buffer",
    });

    const response = await chatCompletions(cvContent, prompts.ANALYZE_RESUME);

    res.json(
      response.choices?.[0]?.message?.content
        ? JSON.parse(response.choices?.[0]?.message?.content)
        : null
    );
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: error.message || "Something went wrong" });
  } finally {
    unlink(cvPath);
  }
});

app.post("/improve", async (req, res) => {
  const { text } = req.body;

  try {
    const response = await chatCompletions(text, prompts.IMPROVE_TEXT);

    res.json({ content: response.choices?.[0]?.message?.content || "" });
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: error.message || "Something went wrong" });
  }
});

app.post("/generate-resume", async (req, res) => {
  const { index, user } = req.body;

  try {
    const html = resumeRenderer(index, user);
    res.json({ html });
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: error.message || "Something went wrong" });
  }
});

app.listen(8000, () => {
  console.log("Server is running on port 8000");
});
