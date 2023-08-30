import getWikiResults from "@/lib/getWikiResults";
import Item from "./components/Item";

type Props = {
  params: {
    searchTerm: string;
  };
};

export async function generateMetadata({ params: { searchTerm } }: Props) {
  const wikiData: Promise<SearchResult> = getWikiResults(searchTerm);
  const data = await wikiData;
  const displayTerm = searchTerm.replaceAll("%20", " ");

  if (!data?.query?.pages) {
    return {
      title: `${displayTerm} Not Found`,
    };
  }
  return {
    title: displayTerm,
    description: `Search results for ${displayTerm}`,
  };
}

const SearchTerm = async ({ params: { searchTerm } }: Props) => {
  const wikiData: Promise<SearchResult> = getWikiResults(searchTerm);
  const data = await wikiData;

  const results: Result[] | undefined = data?.query?.pages;
  const content = (
    <main className="bg-slate-800 mx-auto max-w-5xl p-2 mt-2 mb-5 rounded-md min-h-screen text-white">
      {results ? (
        Object.values(results).map((result, index) => (
          <Item key={result.pageid} result={result}></Item>
        ))
      ) : (
        <h2 className="p-2 text-xl text-center tracking-wider">
          <span className="bg-yellow-500 px-2 py-1">{searchTerm}</span> not
          found!
        </h2>
      )}
    </main>
  );
  return content;
};
export default SearchTerm;
