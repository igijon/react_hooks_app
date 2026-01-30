import { useState } from "react";

interface Pokemon {
    id: number;
    name: string;
    imageUrl: string;
}

interface Props {
    i: number;
}

export const usePokemon = ({id}: Props) => {
    const [pokemon, setPokemon] = useState<Pokemon | null>(null);
  
  const getPokemonById = async (id: number) => {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    const data = await response.json();
    const newPokemon: Pokemon = {
      id,
      name: data.name,
      imageUrl: data.sprites.front_default,
    };
    setPokemon(newPokemon);
}
    return {
    //Properties
    pokemon
  }
}
