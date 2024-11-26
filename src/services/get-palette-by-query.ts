import { ApiResponse } from "@/types/api-response";
import { ColorPalette } from "@/types/color-palette";

export const getPaletteByQuery = async (
  query: string
): Promise<ApiResponse<ColorPalette>> => {
  const response = await fetch("/api/chatgpt", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ message: query }),
  });

  if (!response.ok) {
    throw new Error("An error occurred while fetching the data");
  }

  return await response.json();
};
