import React from 'react'

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
        <div>
            {results.map((result: ResultsType) => (
                <div key={result.id}>
                    {result.original_title}
                </div>
            ))}
        </div>
    )
}
