import React, { useState } from 'react';
import { motion } from 'motion/react';
import Image from 'next/image';
import useClickOutside from '@/hooks/useClickOutside';

// If you want to keep the nested structure
type Quote = {
  title: string;
  author: string;
  quote: string;
  imageSrc: string;
  content: string;
};

type FeatureCardProps = {
  quote: Quote;
};

const quotes = [
  {
    title: 'The Power of Now',
    author: 'Eckhart Tolle',
    quote:
      'Realize deeply that the present moment is all you ever have. Make the Now the primary focus of your life. Wherever you are, be there totally. If you find your here and now intolerable and it makes you unhappy, you have three options: remove yourself from the situation, change it, or accept it totally.',
    imageSrc: '/nature.jpg',
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, repellendus vitae. Quaerat rerum ut qui delectus. Odio error natus temporibus nesciunt eius! Fugit qui illo sunt aliquid, ab aspernatur quaerat? Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, repellendus vitae. Quaerat rerum ut qui delectus. Odio error natus temporibus nesciunt eius! Fugit qui illo sunt aliquid, ab aspernatur quaerat?',
  },
  {
    title: 'Meditations',
    author: 'Marcus Aurelius',
    quote:
      'You have power over your mind - not outside events. Realize this, and you will find strength. The happiness of your life depends upon the quality of your thoughts: therefore, guard accordingly, and take care that you entertain no notions unsuitable to virtue and reasonable nature.',
    imageSrc: '/nature.jpg',
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, repellendus vitae. Quaerat rerum ut qui delectus. Odio error natus temporibus nesciunt eius! Fugit qui illo sunt aliquid, ab aspernatur quaerat? Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, repellendus vitae. Quaerat rerum ut qui delectus. Odio error natus temporibus nesciunt eius! Fugit qui illo sunt aliquid, ab aspernatur quaerat?',
  },
  {
    title: 'The Alchemist',
    author: 'Paulo Coelho',
    quote:
      'And, when you want something, all the universe conspires in helping you to achieve it. There is only one thing that makes a dream impossible to achieve: the fear of failure. Tell your heart that the fear of suffering is worse than the suffering itself.',
    imageSrc: '/nature.jpg',
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, repellendus vitae. Quaerat rerum ut qui delectus. Odio error natus temporibus nesciunt eius! Fugit qui illo sunt aliquid, ab aspernatur quaerat? Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, repellendus vitae. Quaerat rerum ut qui delectus. Odio error natus temporibus nesciunt eius! Fugit qui illo sunt aliquid, ab aspernatur quaerat?',
  },
  {
    title: "Man's Search for Meaning",
    author: 'Viktor E. Frankl',
    quote:
      "When we are no longer able to change a situation, we are challenged to change ourselves. Everything can be taken from a man but one thing: the last of the human freedoms—to choose one's attitude in any given set of circumstances, to choose one's own way.",
    imageSrc: '/nature.jpg',
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, repellendus vitae. Quaerat rerum ut qui delectus. Odio error natus temporibus nesciunt eius! Fugit qui illo sunt aliquid, ab aspernatur quaerat? Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, repellendus vitae. Quaerat rerum ut qui delectus. Odio error natus temporibus nesciunt eius! Fugit qui illo sunt aliquid, ab aspernatur quaerat?',
  },
  {
    title: 'The Four Agreements',
    author: 'Don Miguel Ruiz',
    quote:
      "Be impeccable with your word. Speak with integrity. Say only what you mean. Avoid using the word to speak against yourself or to gossip about others. Use the power of your word in the direction of truth and love. Don't take anything personally. Nothing others do is because of you.",
    imageSrc: '/nature.jpg',
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, repellendus vitae. Quaerat rerum ut qui delectus. Odio error natus temporibus nesciunt eius! Fugit qui illo sunt aliquid, ab aspernatur quaerat? Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, repellendus vitae. Quaerat rerum ut qui delectus. Odio error natus temporibus nesciunt eius! Fugit qui illo sunt aliquid, ab aspernatur quaerat?',
  },
];
const PlayListAnimation = () => {
  return (
    <div className="flex h-full w-full items-center justify-center py-20">
      <div className="relative mx-auto flex max-w-6xl flex-col gap-10 py-10">
        {quotes.map(quote => {
          return <FeatureCard quote={quote} key={quote.author} />;
        })}
      </div>
    </div>
  );
};

const FeatureCard = ({ quote }: FeatureCardProps) => {
  const [current, setCurrent] = useState<Quote | null>(null);
  const modalRef = useClickOutside(() => setCurrent(null));
  return (
    <>
      {current && (
        <div className="fixed inset-0 z-40 bg-black/25 backdrop-blur"></div>
      )}
      {current && (
        <motion.div
          className="absolute top-1/2 left-1/2 z-50 mx-auto flex min-h-screen w-full max-w-5xl -translate-x-1/2 -translate-y-1/2 items-center overflow-y-auto rounded-2xl bg-black"
          ref={modalRef}
          layoutId={`card-container-${current.author}`}
        >
          <button
            onClick={e => {
              e.stopPropagation(); // This prevents the click from bubbling
              setCurrent(null);
            }}
            className="absolute top-2 right-2 p-2 text-white hover:text-red-500"
          >
            ✕
          </button>
          <div className="flex flex-col-reverse items-center gap-10 p-10">
            <button
              className="relative cursor-pointer rounded-full border px-4 py-2 text-rose-500"
              onClick={e => {
                e.stopPropagation(); // This prevents the click from bubbling
                setCurrent(null);
              }}
            >
              Close
            </button>
            <motion.div
              className="space-y-5"
              layoutId={`card-content-${current.author}`}
            >
              <h2 className="rounded-lg bg-emerald-500/10 px-4 py-2 text-2xl text-emerald-600">
                {current.title}
              </h2>
              <p className="ml-4 border-l border-dashed border-emerald-500 pl-4 text-base text-blue-100">
                {current.quote}
              </p>

              <p className="ml-4 border-l border-dashed border-emerald-500 pl-4 text-base text-blue-100">
                {current.content}
              </p>
              <h3 className="text-right">
                <span className="inline-flex rounded-tr-2xl bg-slate-950 px-4 py-2 text-base font-semibold tracking-wide text-blue-200">
                  - {current.author}
                </span>
              </h3>
            </motion.div>
            <motion.div
              className="h-100 w-full rounded-2xl border border-dashed border-emerald-500 p-2"
              layoutId={`card-image-${current.author}`}
            >
              <Image
                width={1000}
                height={667}
                alt=""
                src={current.imageSrc}
                className="h-full w-full rounded-2xl object-cover"
              />
            </motion.div>
          </div>
        </motion.div>
      )}

      <motion.div
        layoutId={`card-container-${quote.author}`}
        className="flex cursor-pointer items-center justify-center gap-5 rounded-2xl border border-yellow-500 p-4"
        onClick={() => setCurrent(quote)}
      >
        <motion.div
          className="aspect-square max-w-60"
          layoutId={`card-image-${quote.author}`}
        >
          <Image
            width={1000}
            height={667}
            alt=""
            src={quote.imageSrc}
            className="h-full w-full rounded-2xl object-cover"
          />
        </motion.div>

        <motion.div
          className="space-y-5"
          layoutId={`card-content-${quote.author}`}
        >
          <h2 className="text-xl">
            <span className="rounded-2xl bg-yellow-500/10 px-4 py-2 text-xl text-yellow-600">
              {quote.title}
            </span>
          </h2>
          <p className="ml-4 border-l border-yellow-500 pl-4 text-sm text-blue-100">
            {quote.quote}
          </p>
          <h3 className="text-right">
            <span className="inline-flex rounded-2xl bg-sky-950 px-4 py-2 text-base font-semibold tracking-wide text-blue-200">
              - {quote.author}
            </span>
          </h3>
        </motion.div>
      </motion.div>
    </>
  );
};

export default PlayListAnimation;
