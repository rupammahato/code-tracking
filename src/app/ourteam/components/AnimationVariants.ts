// Create a file for reusable animation variants
export const containerVariants = {
  hidden: { 
    opacity: 0, 
    y: 100, 
    scale: 0.8 
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { 
      duration: 1,
      ease: [0.6, 0.05, 0.01, 0.9],
      staggerChildren: 0.1
    }
  }
};

export const headingVariants = {
  hidden: { 
    opacity: 0, 
    y: 50 
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: { 
      duration: 0.8,
      ease: "easeOut"
    }
  }
};

export const cardVariants = {
  hidden: { 
    opacity: 0, 
    y: 50,
    scale: 0.9
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.6, 0.05, 0.01, 0.9]
    }
  }
}; 