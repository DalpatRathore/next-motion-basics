import {
  motion,
  useMotionTemplate,
  useScroll,
  useTransform,
} from 'motion/react';
import Image from 'next/image';
import React, { useRef } from 'react';

type FeatureCardProps = {
  quote: {
    title: string;
    author: string;
    quote: string;
    imageSrc: string;
  };
};
const quotes = [
  {
    title: 'The Power of Now',
    author: 'Eckhart Tolle',
    quote:
      'Realize deeply that the present moment is all you ever have. Make the Now the primary focus of your life. Wherever you are, be there totally. If you find your here and now intolerable and it makes you unhappy, you have three options: remove yourself from the situation, change it, or accept it totally.',
    imageSrc: '/nature.jpg',
  },
  {
    title: 'Meditations',
    author: 'Marcus Aurelius',
    quote:
      'You have power over your mind - not outside events. Realize this, and you will find strength. The happiness of your life depends upon the quality of your thoughts: therefore, guard accordingly, and take care that you entertain no notions unsuitable to virtue and reasonable nature.',
    imageSrc: '/nature.jpg',
  },
  {
    title: 'The Alchemist',
    author: 'Paulo Coelho',
    quote:
      'And, when you want something, all the universe conspires in helping you to achieve it. There is only one thing that makes a dream impossible to achieve: the fear of failure. Tell your heart that the fear of suffering is worse than the suffering itself.',
    imageSrc: '/nature.jpg',
  },
  {
    title: "Man's Search for Meaning",
    author: 'Viktor E. Frankl',
    quote:
      "When we are no longer able to change a situation, we are challenged to change ourselves. Everything can be taken from a man but one thing: the last of the human freedoms—to choose one's attitude in any given set of circumstances, to choose one's own way.",
    imageSrc: '/nature.jpg',
  },
  {
    title: 'The Four Agreements',
    author: 'Don Miguel Ruiz',
    quote:
      "Be impeccable with your word. Speak with integrity. Say only what you mean. Avoid using the word to speak against yourself or to gossip about others. Use the power of your word in the direction of truth and love. Don't take anything personally. Nothing others do is because of you.",
    imageSrc: '/nature.jpg',
  },
];

const ScrollParallex = () => {
  return (
    <div className="flex h-full min-h-screen w-full items-center justify-center">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 py-10">
        {quotes.map(quote => {
          return <FeatureCard quote={quote} key={quote.author} />;
        })}
      </div>
    </div>
  );
};

const FeatureCard = ({ quote }: FeatureCardProps) => {
  const cardRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ['start end', 'end start'],
  });

  const translateContent = useTransform(scrollYProgress, [0, 1], [-50, 100]);
  const opacityContent = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0]);

  const blur = useTransform(scrollYProgress, [0.5, 1], [0, 10]);
  const scale = useTransform(scrollYProgress, [0.5, 1], [1, 0.8]);

  return (
    <div ref={cardRef} className="grid grid-cols-2 items-center gap-20 py-20">
      <motion.div
        className="space-y-5"
        style={{
          filter: useMotionTemplate`blur(${blur}px)`,
          scale,
        }}
      >
        <h2 className="rounded-lg bg-emerald-500/10 px-4 py-2 text-2xl text-emerald-600">
          {quote.title}
        </h2>
        <p className="ml-4 border-l border-dashed border-emerald-500 pl-4 text-base text-blue-100">
          {quote.quote}
        </p>
        <h3 className="text-right">
          <span className="inline-flex rounded-tr-2xl bg-slate-950 px-4 py-2 text-base font-semibold tracking-wide text-blue-200">
            - {quote.author}
          </span>
        </h3>
      </motion.div>
      <motion.div
        className="h-full w-full rounded-2xl border border-dashed border-emerald-500 p-2"
        style={{
          y: translateContent,
          opacity: opacityContent,
          filter: useMotionTemplate`blur(${blur}px)`,
          scale,
        }}
      >
        <Image
          width={1000}
          height={667}
          alt=""
          src={quote.imageSrc}
          className="h-full w-full rounded-2xl object-cover"
        />
      </motion.div>
    </div>
  );
};

export default ScrollParallex;
