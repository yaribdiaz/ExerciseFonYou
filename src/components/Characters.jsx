import { useEffect } from "react"
import { useCharacterStore } from "../hooks/useCharacterStore"
import { useGetData } from "../hooks/useGetData"
import CharacterCard from "./CharacterCard"
import ChangePage from "./ChangePage"

const Characters = () => {
  const {currentPage, triggerSearch, isError, handleSetData} = useCharacterStore()
  const { characterData } = useGetData(currentPage, triggerSearch);
  return (
    <div>
      { isError ? <p className="text-white text-center mt-10 font-bold text-2xl">No se han encontrado resultados</p> :
      (
          <>
      <ChangePage/>
      <div className="grid sm:grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-4 p-8">
        {characterData.data.results?.map(character => (
          <CharacterCard key={character.id} character={character}/>
        ))}
      </div>
      <ChangePage/>
          </>
      )}
    </div>
  )
}

export default Characters
