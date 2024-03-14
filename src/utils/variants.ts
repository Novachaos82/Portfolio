const container = {
  hidden: { opacity: 0, y: "200" },
  show: (i = 0) => ({
    y: 0,
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.5 * i,
    },
  }),
};

const textItem = {
  hidden: {
    opacity: 0,
    y: "100px",
    rotate: 2,
  },
  show: {
    opacity: 1,
    y: "0px",
    rotate: 0,
    transition: {
      duration: 0.7,
    },
  },
};

const delayedVariant = {
  hidden: { opacity: 0, y: "50px", rotate: 2 },
  show: {
    rotate: 0,
    y: 0,
    opacity: 1,
    transition: {
      delay: 1.8,
      duration: 0.7,
      ease: [0.2, 0.65, 0.3, 0.9],
    },
  },
};

const imageVariants = {
  hidden: {
    opacity: 0,
    transition: { duration: 0.5 },
  },
  visible: {
    opacity: 1,
    transition: { duration: 0.5 },
  },
};

export { container, textItem, delayedVariant, imageVariants };
