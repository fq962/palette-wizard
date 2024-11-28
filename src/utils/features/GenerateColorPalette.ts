import { hexToHSL } from "./hex-to-hsl";
import { HSLToHex } from "./hsl-to-hex";

function calculateL(valorInicial: number) {
  const posiciones = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950];
  const luminosidadMin = 15; // Luminosidad mínima en 950
  const luminosidadMax = 97; // Luminosidad máxima en 50
  const posicionInicial = 500; // Posición donde el valor inicial no se modifica

  // Cálculo de la pendiente hacia abajo (500 a 950)
  const mArriba = (luminosidadMin - valorInicial) / (950 - posicionInicial);
  // Cálculo de la pendiente hacia arriba (50 a 500)
  const mAbajo = (valorInicial - luminosidadMax) / (posicionInicial - 50);

  // Generar las luminosidades
  return posiciones.map((posicion) => {
    let luminosidad;
    if (posicion < posicionInicial) {
      luminosidad = mAbajo * (posicion - posicionInicial) + valorInicial;
    } else if (posicion > posicionInicial) {
      luminosidad = mArriba * (posicion - posicionInicial) + valorInicial;
    } else {
      luminosidad = valorInicial; // Mantener el valor inicial en 500
    }
    return {
      posicion,
      l: parseFloat(luminosidad.toFixed(2)),
    };
  });
}

export function GenerateColorPalette({ baseColor }: { baseColor: string }) {
  const colorPalette: Record<number, string> = {
    50: "",
    100: "",
    200: "",
    300: "",
    400: "",
    500: baseColor,
    600: "",
    700: "",
    800: "",
    900: "",
    950: "",
  };

  const { h, s, l } = hexToHSL(baseColor);

  const luminosidades = calculateL(l);

  // Generar los colores para cada luminosidad
  luminosidades.forEach(({ posicion, l }) => {
    colorPalette[posicion] = HSLToHex(h, s, l);
  });

  return {
    colors: {
      brand: colorPalette,
    },
  };
}
