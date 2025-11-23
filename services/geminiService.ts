import { GoogleGenAI, Chat, GenerateContentResponse } from "@google/genai";

const API_KEY = process.env.API_KEY || '';

let ai: GoogleGenAI | null = null;
let chatSession: Chat | null = null;

const SYSTEM_INSTRUCTION = `
You are 'Sifu AI', a wise and helpful virtual martial arts instructor for the "Wing Chun Lübeck" school.
Your goal is to answer questions about Wing Chun Kung Fu, self-defense, and the philosophy of the martial art.

Key School Info (for context):
- Location: Lübeck, Germany.
- Style: Traditional Wing Chun (Ip Man lineage).
- Focus: Practical self-defense, mindfulness, fitness, and community.
- Classes: Adults, Kids, and Women's Self Defense.
- Tone: Respectful, encouraging, knowledgeable, but concise.

If asked about specific pricing or class times, mention that you are a demo assistant and they should check the 'Schedule' section or contact the school directly for the latest info.
Keep answers under 100 words unless asked for a detailed explanation.
`;

export const initializeChat = async () => {
  if (!API_KEY) {
    console.warn("Gemini API Key is missing.");
    return;
  }
  
  try {
    ai = new GoogleGenAI({ apiKey: API_KEY });
    chatSession = ai.chats.create({
      model: 'gemini-2.5-flash',
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
      },
    });
  } catch (error) {
    console.error("Failed to initialize Gemini:", error);
  }
};

export const sendMessageToSifu = async (message: string): Promise<string> => {
  if (!chatSession) {
    await initializeChat();
    if (!chatSession) return "I apologize, my meditation was interrupted (API Key missing or invalid).";
  }

  try {
    const response: GenerateContentResponse = await chatSession!.sendMessage({ message });
    return response.text || "I am listening, but words fail me right now.";
  } catch (error) {
    console.error("Error sending message to Gemini:", error);
    return "The connection to the dojo is weak. Please try again later.";
  }
};