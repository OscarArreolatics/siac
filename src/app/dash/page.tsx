"use client";
import { getCharacters } from "../api/RickMorty";
import { useState, useEffect, use } from "react"

interface Character {
    id: number;
    name: string;
    status: string;
    species: string;
    type: string;
    gender: string;
    origin: {
      name: string;
      url: string;
    };
    location: {
      name: string;
      url: string;
    };
    image: string;
  }

export default function Home() {

    const [Character, setCharacter] = useState<Character | null>(null);(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const randomId = Math.floor(Math.random() * 826) + 1; // Generar un ID aleatorio entre 1 y 826
        getCharacters(randomId).then((data) => {
            console.log(data);
            setCharacter(data);
            setLoading(false);
        }).catch((error) => {
            console.error("Error fetching characters:", error);
        });
    }, [])

    if (loading) {
        return (
          <div className="flex justify-center items-center h-screen bg-gray-100">
            <h1>Cargando...</h1>
          </div>
        );
      }
    
      if (!Character) {
        return (
          <div className="flex justify-center items-center h-screen bg-gray-100">
            <h1>No se encontró información del personaje.</h1>
          </div>
        );
      }
    
      return (
        <div className="flex justify-center items-center h-screen bg-gray-100">
          <div className="flex flex-col justify-center items-center bg-white p-6 rounded-lg shadow-md">
            <img
              src={Character.image}
              alt={Character.name}
              className="w-32 h-32 rounded-full mb-4"
            />
            <h1 className="text-2xl font-bold mb-2">Eres como {Character.name}</h1>
            <p className="text-gray-700">Estado: {Character.status}</p>
            <p className="text-gray-700">Especie: {Character.species}</p>
            <p className="text-gray-700">Género: {Character.gender}</p>
            <p className="text-gray-700">Origen: {Character.origin.name}</p>
            <p className="text-gray-700">Ubicación: {Character.location.name}</p>
          </div>
        </div>
      );
}
