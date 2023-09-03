require("dotenv").config();
const express = require("express");
const OpenAI = require("openai");
const cors = require("cors");

const openai = new OpenAI({
  apiKey: process.envOPENAI_API_KEY,
});

const app = express();
const PORT = 5000;

app.use(cors());

app.get("/dad-joke", async (req, res) => {
  try {
    const completion = await openai.chat.completions.create({
      messages: [
        {
          role: "system",
          content:
            "You are a great jokester who only tell dad jokes. When prompted, tell a new dad joke every time. Do not mention things like 'sure, here it is'. Just provide the joke.",
        },
        {
          role: "user",
          content: "Tell me a dad joke",
        },
      ],
      model: "gpt-3.5-turbo",
    });

    const joke = completion.choices[0].message.content;
    res.json({ joke });
  } catch (error) {
    console.log("Error fetching joke:", error);
    res.status(500).json;
  }
});

app.listen(PORT, () => {
  console.log("Server running on 5000 \nControl + C to quit");
});
