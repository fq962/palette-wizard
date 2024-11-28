import { TargetAndTransition } from "motion/react";

export const getRandomAnimation = (): TargetAndTransition => {
  const animations: TargetAndTransition[] = [
    // Animaciones modificadas
    {
      scale: 1.2, // Antes era 1.5
      rotate: 45, // Antes era 360
      transition: { type: "spring", stiffness: 200 },
    },
    {
      y: -10, // Antes era -20
      transition: { type: "spring", stiffness: 200 },
    },
    {
      scale: 0.9, // Antes era 0.8
      x: 5, // Antes era 10
      transition: { type: "spring", stiffness: 200 },
    },
    {
      rotateY: 90, // Antes era 180
      transition: { type: "spring", stiffness: 200 },
    },
    {
      scale: 1.1, // Antes era 1.2
      y: 5, // Antes era 10
      transition: { type: "spring", stiffness: 200 },
    },
    // Nuevas animaciones
    {
      opacity: 0.8, // Disminuye ligeramente la opacidad
      transition: { duration: 0.5 },
    },
    {
      x: -10, // Mueve ligeramente hacia la izquierda
      transition: { type: "spring", stiffness: 200 },
    },
    {
      scaleX: 1.1, // Estira en el eje X
      transition: { type: "spring", stiffness: 200 },
    },
    {
      rotate: -15, // Rotación ligera negativa
      transition: { type: "spring", stiffness: 200 },
    },
    {
      skewX: 10, // Aplica una inclinación en el eje X
      transition: { type: "spring", stiffness: 200 },
    },
  ];

  return animations[Math.floor(Math.random() * animations.length)];
};
