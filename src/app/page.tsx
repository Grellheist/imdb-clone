export const dynamic = "force-dynamic";
import Results from "@/components/Results";
const API_KEY = process.env.API_KEY;

type SearchParamsType = {
    genre: string;
};

type HomeProps = {
    searchParams: SearchParamsType;
}

export default async function Home({ searchParams }: HomeProps) {
    const genre = searchParams.genre || "fetchTrending";
    const response = await fetch(`https://api.themoviedb.org/3/${genre === "fetchTopRated"
        ? "movie/top_rated"
        : "trending/all/week"}?api_key=${API_KEY}&language=en-US`,
        { next: { revalidate: 10000 } }
    );

    if (!response.ok) {
        throw new Error("Failed to fetch data")
    }

    const data = await response.json();
    const results = data.results;

    console.log(results)


    return (
        <div>
            <Results results={results}/>
        </div>
    )
}
