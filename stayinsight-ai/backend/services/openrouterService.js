const OpenAI = require("openai");

const client = new OpenAI({
  apiKey: process.env.OPENROUTER_API_KEY,
  baseURL: "https://openrouter.ai/api/v1",

  defaultHeaders: {
    "HTTP-Referer": "http://localhost:5173",
    "X-Title": "StayInsight AI",
  },
});

const analyzeReview = async (review) => {

  const completion = await client.chat.completions.create({
    model: "deepseek/deepseek-chat-v3-0324",

    messages: [
      {
        role: "system",
        content:
        "You are an AI assistant for StayInsight AI. Analyze hotel reviews."
      },
      {
        role: "user",
        content: `
Analyze this hotel review.

Return:

Sentiment:
Positive/Neutral/Negative

Summary:
Short summary

Suggested Reply:
Professional hotel reply


Review:
${review}
`
      }
    ]
  });


  return completion.choices[0].message.content;

};


module.exports = {
  analyzeReview
};