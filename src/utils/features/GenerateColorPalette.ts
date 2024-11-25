function hexToRgb(hex: string) {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16),
      }
    : null;
}

function rgbToHex(r: number, g: number, b: number) {
  return (
    "#" +
    ((1 << 24) + (Math.round(r) << 16) + (Math.round(g) << 8) + Math.round(b))
      .toString(16)
      .slice(1)
      .toUpperCase()
  );
}

export function GenerateColorPalette(props: { baseColor: string }) {
  const { baseColor } = props;
  const rgb = hexToRgb(baseColor);
  if (!rgb) return null;

  //   const shades = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950];
  const palette: Record<number, string> = {};

  // Set the base color (500)
  palette[500] = "#" + baseColor.replace("#", "").toUpperCase();

  // Generate lighter shades (50-400)
  for (let shade = 400; shade >= 50; shade -= 50) {
    const factor = (500 - shade) / 450; // Normalize to get a factor between 0 and 1
    palette[shade] = rgbToHex(
      rgb.r + (255 - rgb.r) * factor * 0.9, // Multiply by 0.9 to prevent pure white
      rgb.g + (255 - rgb.g) * factor * 0.9,
      rgb.b + (255 - rgb.b) * factor * 0.9
    );
  }

  // Generate darker shades (600-950)
  for (let shade = 600; shade <= 950; shade += 50) {
    const factor = (shade - 500) / 450; // Normalize to get a factor between 0 and 1
    palette[shade] = rgbToHex(
      rgb.r * (1 - factor * 0.8),
      rgb.g * (1 - factor * 0.8),
      rgb.b * (1 - factor * 0.8)
    );
  }
  const palete = {
    colors: {
      brand: palette,
    },
  };
  console.log("palette: ", palete);

  return {
    colors: {
      brand: palette,
    },
  };
}
