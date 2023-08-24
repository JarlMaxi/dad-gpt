const express = require('express');
const OpenAI = require('openai');

const openai = new OpenAI({
    apiKey: "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"
});

const app = express();
const PORT = 5000;

app.get('/dad-joke', async (req, res) => {
    try {
        const completion = await openai.chat.completions.create({
            messages: [{ role: "system", content: "Tell me a dad joke"}],
            model: "gpt-3.5-turbo",
        });

        const joke = completion.choices[0].message.content;
        res.json({ joke });
    } catch (error) {
        console.log('Error fetching joke:', error);
        res.status(500).json
    }
});

app.listen(PORT, () => {
    console.log("Server running on 5000")
})