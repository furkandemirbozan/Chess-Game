import { HTML5Backend } from 'react-dnd-html5-backend'
import { DndProvider } from 'react-dnd'
import Board from './Board';
import subjectGame, { initGame } from './Game';
import { useEffect, useState } from 'react';
import './index.css'

function App() {
  const [board, setBoard] = useState([])
  const [isGameOver, setIsGameOver] = useState()
  const [result, setResult] = useState()

  useEffect(() => {
    initGame()
    const subscribe = subjectGame.subscribe(sub => {
      setBoard(sub.chess)
      setIsGameOver(sub.isGameOver)
      setResult(sub.result)
    })

    return () => subscribe.unsubscribe()
  }, [])

  return (
    <DndProvider backend={HTML5Backend}>
      <div className='bg-gray-500 h-screen  flex items-center justify-center relative'>
        {
          isGameOver && <div className='absolute bg-white bg-opacity-80 rounded-lg p-3 '>
            <h1>Oyun Bitti ZAAAAAA</h1>
            {
              result && <h2>{result}</h2>
            }
          </div>
        }
        <Board board={board} />
      </div>
    </DndProvider>
  );
}

export default App;
