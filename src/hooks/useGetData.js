import { useEffect } from "react";
import { useCharacterStore } from "./useCharacterStore";
import axios from "axios";

export const useGetData = (page, triggerSearch) => {
  const {
    handleSetData,
    handleSetTriggerSearch,
    characterData,
    search,
    currentPage,
    handleResetPagination,
    handleSetError
  } = useCharacterStore();

  const getData = async () => {
    try {
      const {data} = await axios(`${import.meta.env.VITE_API_CHARACTER}/?page=${currentPage}&name=${search}&status=alive`)

        handleSetData({data})
        handleSetTriggerSearch(false)
        handleSetError(false)
    } catch (error) {
        if(error.response.status == 404){
        handleSetError(true)
        }
        handleSetTriggerSearch(false)
    }
  };


  useEffect(() => {
    handleResetPagination()
    if (triggerSearch) {
      getData();
    }
  }, [triggerSearch]);

  useEffect(() => {
      getData();
  }, [currentPage]);

  return { characterData };
};