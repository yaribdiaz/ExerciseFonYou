import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    search:"",
    characterData: {
        data:{
            info:{},
            results:[],
        }
    },
    modalData:{},
    currentPage:1,
    openModal:false,
    isLoading:false,
    isError:false,
    triggerSearch:false
}

export const characterSlice = createSlice({
  name: 'character',
  initialState: initialState,
  reducers: {
      setSearch: (state, action) => {
        state.search = action.payload
      },
      setTriggerSearch : (state, action) => {
        state.triggerSearch = action.payload
      },
      setCharacterData : (state, action) => {
        state.characterData = action.payload
      },
      nextPage : (state) => {
        state.currentPage +=1
      },
      previousPage : (state) => {
        state.currentPage -=1
      },
      resetPagination: (state) => {
        state.currentPage = 1;
      },
      setError : (state, action) => {
        state.isError = action.payload
      },
      setModal : (state, action) => {
        state.openModal = action.payload
      },
      setModalData : (state, action) => {
        state.modalData = action.payload
      }
  }
})

export const {setModalData ,setModal, setError, setSearch, setTriggerSearch, setCharacterData, nextPage, previousPage, resetPagination } = characterSlice.actions

export default characterSlice.reducer