"use client"
import React, {useEffect, useState} from "react";

export default function Jokes() {
    const [joke, setJoke] = useState <any> ()
    useEffect(() => {
        fetch('https://official-joke-api.appspot.com/jokes/programming/random')
        .then(resp => resp.json())
        .then(json => setJoke(json[0]));
    },[])
    if (joke) { 
        return (
            <div>
                <h2 className="text-xl font-bold mb-2">Coding Joke</h2>
                <p>{joke.setup}</p>
                <p>{joke.punchline}</p>
            </div>
        )
    }
    return (
        <div>
            <h2>Joke is Loading...</h2>

        </div>
    )

}

async function JokesCall() {
    const response = await fetch('https://official-joke-api.appspot.com/jokes/programming/random');
    const json = await response.json()
    return json
}
