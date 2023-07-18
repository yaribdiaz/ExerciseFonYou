import { useCharacterStore } from "../hooks/useCharacterStore"

const SearchBar = () => {

  const {handleSetSearch, handleSetTriggerSearch, search} = useCharacterStore()

  const handleSubmit = (e) => {
    e.preventDefault()
    if(search.trim() !== ""){
      handleSetTriggerSearch(true)
    }
  }

  return (
    <div className='mt-10 flex justify-center'>
        <form className='w-3/5' onSubmit={handleSubmit}>
          <p className='text-white text-center mb-3'>Busca algún personaje de la serie...</p>
            <div className='flex flex-row hover:shadow-xl hover:shadow-white/[.20] transition-all duration-500'>
                <input 
                  value={search} 
                  onChange={e => handleSetSearch(e.target.value)} 
                  type="text" 
                  placeholder='Introduce tu búsqueda' 
                  className='w-full font-medium border-[3px] border-white rounded-l px-2 py-1 outline-none text-gray-700'/>
                <button type="submit" className='bg-indigo-500 hover:bg-indigo-700 text-white px-3 rounded-r'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                    </svg>
                </button>
            </div>
        </form>
    </div>
  )
}

export default SearchBar
