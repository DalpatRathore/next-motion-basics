'use client';
import React, { useEffect } from 'react';
import { motion, useAnimate } from 'motion/react';
import { stagger } from 'motion';

const content =
  "Every great achievement begins with the decision to try. The road to success is never straight—there will be curves called failures, loops called confusion, speed bumps called setbacks. But if you keep your wheels pointed forward and your foot on the pedal, you'll eventually arrive at your destination. Remember: diamonds are created under pressure, and champions are forged through challenges. What feels like struggle today is building the strength you'll need tomorrow. Your comfort zone is a beautiful place, but nothing ever grows there. Like a seed that must break open to become a tree, we too must face discomfort to transform. Every skill was once unfamiliar, every expert was once a beginner. The difference between who you are and who you want to be lies in what you're willing to learn, practice, and persist through. Growth happens one courageous step at a time. Doubts will whisper, failures will sting, but courage shouts louder. Fear is just a signpost pointing you toward what really matters—it's the universe testing how badly you want your dreams. The most extraordinary lives were built by ordinary people who refused to let fear write their stories. You weren't given this dream because you're incapable; it was given because you're exactly the person who can make it happen.";

const HeroTextAnimation = () => {
  const [scope, animate] = useAnimate();

  const startAnimation = () => {
    animate(
      'span',
      {
        opacity: 1,
        filter: 'blur(0px',
        y: 0,
      },
      {
        duration: 0.3,
        ease: 'easeInOut',
        delay: stagger(0.05),
      },
    );
  };

  useEffect(() => {
    startAnimation();
  }, []);

  return (
    <div className="flex h-full w-full items-center justify-center py-20">
      <p
        ref={scope}
        className="mx-auto max-w-6xl text-3xl tracking-wide text-blue-100"
      >
        {content.split(' ').map((word, idx) => (
          <motion.span
            className="inline-block opacity-0"
            key={idx}
            style={{
              opacity: 0,
              filter: 'blur(10px)',
              y: 20,
            }}
          >
            {word}&nbsp;
          </motion.span>
        ))}
      </p>
      {}
    </div>
  );
};

export default HeroTextAnimation;
