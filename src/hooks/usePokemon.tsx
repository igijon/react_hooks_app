import { useEffect, useState } from "react";

interface Pokemon {
  id: number;
  name: string;
  imageUrl: string;
}

interface Props {
  id: number;
}

export const usePokemon = ({ id }: Props) => {
  const [pokemon, setPokemon] = useState<Pokemon | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchPokemon = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
        const data = await response.json();

        const newPokemon: Pokemon = {
          id,
          name: data.name,
          imageUrl: data.sprites.front_default,
        };

        setPokemon(newPokemon);
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
        console.error("Error fetching pokemon:", error);
        throw error;
      }
    };

    fetchPokemon();
  }, [id]);

  return {
    isLoading,
    pokemon,

    formattedId: id.toString().padStart(3, "0"),
  };
};
