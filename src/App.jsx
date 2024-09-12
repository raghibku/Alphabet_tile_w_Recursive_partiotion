import AlphabetTile from "./AlphabetTile/AlphabetTile"
import RecursivePartition from "./RecursivePartition/RecursivePartition"


function App() {

  return (
    <>
      <div className="w-full flex justify-center items-center">
        <div className="w-[40%]">
          <AlphabetTile />
        </div>
        <div className="w-[60%]">
          <RecursivePartition />
        </div>
      </div>


    </>
  )
}

export default App
