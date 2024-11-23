export const getRandomAnimation = () => {
  const animations = [
    {
      scale: 1.5,
      rotate: 360,
      transition: { type: "spring", stiffness: 300 },
    },
    {
      y: -20,
      transition: { type: "spring", stiffness: 300 },
    },
    {
      scale: 0.8,
      x: 10,
      transition: { type: "spring", stiffness: 300 },
    },
    {
      rotateY: 180,
      transition: { type: "spring", stiffness: 300 },
    },
    {
      scale: 1.2,
      y: 10,
      transition: { type: "spring", stiffness: 300 },
    },
  ];

  return animations[Math.floor(Math.random() * animations.length)];
};
