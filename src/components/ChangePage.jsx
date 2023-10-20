import { useCharacterStore } from "../hooks/useCharacterStore"

const ChangePage = () => {

    const {currentPage, handleNextPage, handlePreviousPage, characterData} = useCharacterStore()
  return (
    <>
      { !characterData.data.error &&
        (
          <div  className='flex justify-end p-5 gap-5'>
              
            <button disabled={characterData.data.info?.prev === null ? true : false} onClick={handlePreviousPage} className='bg-white p-2 rounded-full'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
              </svg>
            </button>

            <p className="text-white">{currentPage}/{characterData.data.info.pages}</p>
            
            <button disabled={currentPage == characterData?.data?.info?.pages ? true : false} onClick={handleNextPage} className='bg-white p-2 rounded-full'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </button>
          </div>
        )
      }
    </>
  )
}

export default ChangePage
