import { GoogleGenAI } from "@google/genai";

async function generateDigiBotImage() {
  const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY! });
  const response = await ai.models.generateContent({
    model: 'gemini-2.5-flash-image',
    contents: {
      parts: [
        {
          text: 'A premium, sleek, and modern mobile app interface for an AI-powered personal assistant named DigiBot. The UI features a clean dashboard with smart task prioritization, appointment scheduling, and health/wellness tracking. Minimalist design with soft blue, white, and subtle glassmorphism effects. High-quality 3D render style, professional and high-tech aesthetic.',
        },
      ],
    },
    config: {
      imageConfig: {
        aspectRatio: "16:9",
        imageSize: "1K"
      }
    },
  });

  for (const part of response.candidates[0].content.parts) {
    if (part.inlineData) {
      console.log("IMAGE_DATA:" + part.inlineData.data);
    }
  }
}

generateDigiBotImage();
