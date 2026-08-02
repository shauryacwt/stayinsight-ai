# PROMPTS.md

# Week 7 – AI Feature (StayInsight AI)

## Project

StayInsight AI is an AI-powered hotel review analysis system that allows users to submit hotel reviews and receive AI-generated insights, including sentiment analysis, review summaries, and professional hotel responses using OpenRouter.

---

# Prompt Variation 1

## System Prompt

You are an AI assistant for StayInsight AI. Analyze hotel reviews professionally.

## User Prompt

Analyze this hotel review.

Return:

Sentiment:
Positive/Neutral/Negative

Summary:
Short summary

Suggested Reply:
Professional hotel reply

Review:
The room was clean and spacious. The staff was friendly, but breakfast was average.

### Example Output

Sentiment:
Positive

Summary:
The guest appreciated the clean rooms and friendly staff while suggesting improvements to breakfast quality.

Suggested Reply:
Thank you for your valuable feedback. We're delighted that you enjoyed your stay and appreciated our staff and room cleanliness. We appreciate your comments regarding breakfast and will continue improving our services.

---

# Prompt Variation 2

## System Prompt

You are an experienced hotel customer service manager.

## User Prompt

Read the following hotel review and provide:

1. Overall Sentiment
2. Key Positives
3. Key Negatives
4. Suggested Hotel Response

Review:
The WiFi was slow and check-in took too long, but the rooms were clean.

### Example Output

Overall Sentiment:
Neutral

Key Positives:
• Clean rooms

Key Negatives:
• Slow WiFi
• Delayed check-in

Suggested Hotel Response:
Thank you for sharing your experience. We are pleased you appreciated the cleanliness of our rooms. We apologize for the inconvenience caused during check-in and due to the WiFi speed. Your feedback helps us improve our guest experience.

---

# Prompt Variation 3 (Selected Prompt)

## System Prompt

You are StayInsight AI, an intelligent assistant that analyzes hotel reviews accurately and professionally.

## User Prompt

Analyze this hotel review.

Return ONLY:

Sentiment:
Positive/Neutral/Negative

Summary:
One short paragraph

Suggested Reply:
Professional hotel response.

Review:
The hotel location was excellent. Staff members were polite, but the room service was slow.

### Example Output

Sentiment:
Positive

Summary:
The guest appreciated the hotel's location and staff behaviour while mentioning delays in room service.

Suggested Reply:
Thank you for your valuable feedback. We are delighted that you enjoyed our location and hospitality. We apologize for the delay in room service and are actively working to improve our response times.

---

# Best Prompt

Prompt Variation 3 produced the most consistent and structured responses. It generated concise outputs with clearly separated sections, making it easier to display the AI-generated results in the frontend. The response format remained consistent across multiple hotel review inputs and required minimal post-processing. This prompt was therefore selected for integration into the StayInsight AI application.

---

# AI Model

Provider:
OpenRouter

Model:
DeepSeek Chat V3

---

# Technologies Used

- React.js
- Express.js
- OpenRouter API
- Axios
- Tailwind CSS