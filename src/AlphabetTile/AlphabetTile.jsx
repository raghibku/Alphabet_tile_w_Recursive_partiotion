import { useState } from "react"

const AlphabetTile = () => {
    const letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
    const [output, setOutput] = useState("")

    const handleTileClick = (p) => {
        let newString = output;
        if (newString.length >= 2) {
            if (p === newString[newString.length - 1] && p === newString[newString.length - 2]) {
                newString = newString.slice(0, -2);
                newString += '_';
            } else {
                newString += p;
            }
        } else {
            newString += p;
        }

        setOutput(newString); // Update the output state
    };
    return (
        <div className="bg-gray-800 flex justify-center items-center min-h-screen">
            <div className="bg-gray-900 flex flex-col justify-center items-center gap-10 text-white  p-10">
                {/* output  */}
                <div className="flex flex-col justify-start items-start gap-2 w-full">
                    <h1>Output String</h1>
                    <div className="p-2 border-2 border-cyan-200 rounded-sm h-10 flex justify-center items-center w-[266px] overflow-hidden">
                        <h1 className="w-full">{output}</h1>
                    </div>
                </div>
                {/* letter grid */}
                <div className="flex justify-center items-center">
                    <div className="grid grid-cols-5 grid-rows-5 gap-2">
                        {
                            letters.map((letter) => {
                                return (
                                    <button onClick={() => { handleTileClick(letter) }}
                                        className="p-4 rounded-sm bg-gradient-to-br from-cyan-400 to to-blue-500">{letter}</button>
                                )
                            })
                        }
                        <button onClick={() => { setOutput("") }}
                            className="py-4 w-full col-span-4 rounded-sm bg-gradient-to-br from-purple-800 to to-violet-700 text-xl">Clear Output</button>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default AlphabetTile