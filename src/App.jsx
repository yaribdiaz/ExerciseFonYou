import Characters from "./components/Characters"
import Modal from "./components/Modal"
import SearchBar from "./components/SearchBar"

function App() {

  return (
    <>
      <div>
      <h1 className="text-center text-white font-bold text-3xl shadow-md">Rick & Morty </h1>
      </div>
      
      <SearchBar/>
      <Modal/>
      <Characters/>
      
    </>
  )
}

export default App
