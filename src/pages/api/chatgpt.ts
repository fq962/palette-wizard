import { NextApiRequest, NextApiResponse } from "next";
import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    // Extraer datos del cuerpo de la solicitud
    const { message } = req.body;

    // Validar los datos recibidos
    if (!message) {
      return res.status(400).json({ error: "Faltan datos requeridos" });
    }
    console.log(message);

    try {
      // Realizar la solicitud a OpenAI
      const chatCompletion = await openai.chat.completions.create({
        messages: [
          {
            role: "user",
            content: `
        Dado una frase, idea, un color o descripción, genera exclusivamente un JSON que represente una paleta de colores con cinco colores
        y una frase en ingles que represente la paleta generada puedes usar emojis.

        También, para cada color, incluye el color del texto, es decir, si el color de fondo es oscuro, el color del texto debe ser claro y viceversa, usa ya sea un blanco suave o un negro suave.


        El JSON de ejemplo:

        {
            summary:
                "A relaxed spirit 🌈, full of freshness and good vibes 🌿. Perfect to convey tranquility with a touch of creativity. 🌞✨",
            colorPalette: [
                {
                colorHex: "#HEXCODE",
                colorName: "ColorName",
                textColor: "#FFFFFF",
                },
                {
                colorHex: "#HEXCODE",
                colorName: "ColorName",
                textColor: "#FFFFFF",
                },
                {
                colorHex: "#HEXCODE",
                colorName: "ColorName",
                textColor: "#FFFFFF",
                },
                {
                colorHex: "#HEXCODE",
                colorName: "ColorName",
                textColor: "#000000",
                },
                {
                colorHex: "#HEXCODE",
                colorName: "ColorName",
                textColor: "#000000",
                },
            ],
        }

        Este es el input del usuario: ${message}.
        `,
          },
        ],
        model: "gpt-4o",
      });

      const rawResponse = chatCompletion.choices[0].message.content;
      const cleanedResponse = rawResponse!.replace(/```json|```/g, "").trim();
      const jsonResponse = JSON.parse(cleanedResponse);

      // Simular un proceso exitoso
      res.status(200).json({
        success: true,
        message,
        response: jsonResponse,
      });
    } catch (error: unknown) {
      res.status(500).json({ error: "Error interno del servidor", log: error });
    }
  } else {
    // Manejar otros métodos HTTP
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Método ${req.method} no permitido`);
  }
}
