import { useDispatch, useSelector } from "react-redux"
import { 
    setSearch,
    setTriggerSearch,
    nextPage,
    previousPage, 
    setCharacterData,
    resetPagination,
    setError,
    setModal,
    setModalData,
    setIsLoading
    }from "../store/character/characterSlice"
    

export const useCharacterStore = () => {

    
    const dispatch = useDispatch()
    const {
        search,
        characterData,
        currentPage,
        triggerSearch,
        isError,
        openModal,
        modalData,
        isLoading
    } = useSelector(state => state.character)


    const handleSetSearch = search => {
        dispatch(setSearch(search))
    }

    const handleSetTriggerSearch = value => {
        dispatch(setTriggerSearch(value))
    }

    const handleSetData = (data) => {
        dispatch(setCharacterData(data))
    }

    const handleNextPage = () => {
        dispatch(nextPage())
    }

    const handlePreviousPage = () => {
        dispatch(previousPage())
    }

    const handleResetPagination = () => {
        dispatch(resetPagination())
    }

    const handleSetError = (error) => {
        dispatch(setError(error))
    }

    const handleModal = () => {
        dispatch(setModal(!openModal))
    }

    const handleSetModalData = (data) => {
        dispatch(setModalData(data))
    }

    const handleSetLoading = (boolean) => {
        dispatch(setIsLoading(boolean))
    }

    return {
        handleSetSearch,
        handleSetData,
        handleNextPage,
        handlePreviousPage,
        handleSetTriggerSearch,
        search,
        characterData,
        currentPage,
        triggerSearch,
        handleResetPagination,
        isError,
        handleSetError,
        handleModal,
        openModal,
        handleSetModalData,
        modalData,
        handleSetLoading,
        isLoading
    }
}

