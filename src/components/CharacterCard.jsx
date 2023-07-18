import { useCharacterStore } from "../hooks/useCharacterStore"
import Modal from "./Modal"

const CharacterCard = ({character}) => {

    const {handleModal, handleSetModalData} = useCharacterStore()

  return (
    <button onClick={() => {
        handleModal()
        handleSetModalData(character)
        }} className=' transition-all duration-300 flex'>
        <div key={character?.id} className="bg-gray-200 flex-1 rounded p-2 hover:shadow-md hover:shadow-white hover:scale-105 transition-all ">
            <img src={character?.image} className='w-full' alt={`character ${character?.name}`}/>
            <p className="text-white py-3 px-1 text-center uppercase bg-black font-bold">{character.name}</p>
        </div>
    </button>
  )
}

export default CharacterCard
