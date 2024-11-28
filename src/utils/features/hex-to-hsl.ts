export function hexToHSL(hex: string) {
  // Eliminar el símbolo '#' si está presente
  hex = hex.replace(/^#/, "");

  // Convertir los valores hexadecimales a valores decimales de r, g, b
  let r, g, b;
  if (hex.length === 3) {
    // Formato de 3 dígitos
    r = parseInt(hex[0] + hex[0], 16);
    g = parseInt(hex[1] + hex[1], 16);
    b = parseInt(hex[2] + hex[2], 16);
  } else if (hex.length === 6) {
    // Formato de 6 dígitos
    r = parseInt(hex.substring(0, 2), 16);
    g = parseInt(hex.substring(2, 4), 16);
    b = parseInt(hex.substring(4, 6), 16);
  } else {
    throw new Error("Color HEX inválido.");
  }

  // Convertir r, g, b a valores entre 0 y 1
  r /= 255;
  g /= 255;
  b /= 255;

  // Encontrar el valor máximo y mínimo entre r, g, b
  const max = Math.max(r, g, b),
    min = Math.min(r, g, b);
  let h,
    s,
    l = (max + min) / 2;

  h = s = 0;

  if (max === min) {
    // Si todos los valores son iguales, es un color acromático
    h = s = 0;
  } else {
    const d = max - min;
    // Calcular saturación
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    // Calcular tono
    switch (max) {
      case r:
        h = (g - b) / d + (g < b ? 6 : 0);
        break;
      case g:
        h = (b - r) / d + 2;
        break;
      case b:
        h = (r - g) / d + 4;
        break;
    }
    h /= 6;
  }

  // Convertir h, s, l a grados y porcentajes
  h = Math.round(h * 360);
  s = Math.round(s * 100);
  l = Math.round(l * 100);

  return { h, s, l };
}
