import Link from "next/link";

type Props = {
  result: Result;
};
const Item = ({ result }: Props) => {
  const itemTextCol = (
    <div className="flex flex-col justify-center">
      <h2>
        <Link
          href={`https://en.wikipedia.org/?curid=${result.pageid}`}
          target="_blank"
          className="text-xl font-bold tracking-wider underline hover:text-blue-600 transition duration-200 "
        >
          {result.title}
        </Link>
      </h2>
      <p>{result.extract}</p>
    </div>
  );
  const content = result?.thumbnail?.source ? (
    <article className="m-4 mx-auto max-w-4xl">
      <div className="flex flex-row gap-4">
        <div className="flex flex-col justify-start py-1">
          <img
            src={result.thumbnail.source}
            alt={result.title}
            width={result.thumbnail.width}
            height={result.thumbnail.height}
            loading="lazy"
          />
        </div>
        {itemTextCol}
      </div>
    </article>
  ) : (
    <article className="m-4 mx-auto max-w-4xl">
      <div className="flex flex-row gap-4">
        <div className="flex flex-col justify-start py-1">
          <img src="./public/vercel.svg" alt="next" width={45} height={45} />
        </div>
        {itemTextCol}
      </div>
    </article>
  );
  return content;
};
export default Item;
