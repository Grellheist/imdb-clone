import React from 'react'
import Card from "@/components/Card"

type ResultsType = {
    adult: boolean;
    backdrop_path: string;
    id: number;
    name: string;
    original_language: string;
    original_title: string;
    overview: string;
    poster_path: string;
    media_type: string;
    genre_ids: number[];
    popularity: number;
    first_air_date: string;
    vote_average: number;
    vote_count: number;
    origin_country: string[];
};

type ResultsProps = {
    results: ResultsType[];
}

export default function Results({ results }: ResultsProps) {
    return (
        <div className='sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 max-w-6xl mx-auto py-4'>
            {results.map((result: ResultsType) => (
                <Card key={result.id} result={result}/>
            ))}
        </div>
    )
}
