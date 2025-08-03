import React from 'react';
import { motion } from 'framer-motion';
import { Scissors, Brush, Wind, Star } from 'lucide-react';

// Ícones para representar o tema: Tesoura, Escova (para pente), Vento (para secador) e Estrela (para estilo).
const icons = [Scissors, Brush, Wind, Star];

const createFloatVariants = () => ({
  animate: {
    x: [0, Math.random() * 8 - 4, Math.random() * 8 - 4, 0],
    y: [0, Math.random() * 10 - 5, Math.random() * 10 - 5, 0],
    rotate: [0, Math.random() * 6 - 3, Math.random() * 6 - 3, 0],
    transition: {
      duration: 20 + Math.random() * 15,
      repeat: Infinity,
      repeatType: 'mirror',
      ease: 'easeInOut',
    },
  }
});

const AnimatedIconBackground = () => {
  const gridItems = React.useMemo(() => {
    const items = [];
    const rows = 10;
    const cols = 10;
    for (let i = 0; i < rows * cols; i++) {
      items.push({
        id: i,
        Icon: icons[i % icons.length],
        style: {
          top: `${Math.floor(i / cols) * (100 / (rows - 1))}%`,
          left: `${(i % cols) * (100 / (cols - 1))}%`,
        },
        variants: createFloatVariants(),
      });
    }
    return items;
  }, []);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none" aria-hidden="true">
      <div className="relative w-full h-full">
        {gridItems.map(({ id, Icon, style, variants }) => (
          <motion.div
            key={id}
            className="absolute"
            style={{ ...style, transform: 'translate(-50%, -50%)' }}
            variants={variants}
            animate="animate"
          >
            <Icon className="w-6 h-6 text-foreground opacity-[0.08] dark:opacity-[0.04]" />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default AnimatedIconBackground;