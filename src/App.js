import logo from './logo.svg';
import './App.css';

function App() {
  const textPieces = "4 4\n" +
  "1 4 3 5\n" +
  "0 5 3 5\n" +
  "1 5 3 0\n" +
  "5 5 2 1\n" +
  "1 5 0 0\n" +
  "0 5 2 1\n" +
  "1 0 4 4\n" +
  "2 4 4 2\n" +
  "4 5 0 5\n" +
  "3 2 1 0\n" +
  "4 0 0 3\n" +
  "3 0 0 1\n" +
  "5 5 1 0\n" +
  "5 0 0 1\n" +
  "0 4 2 4\n" +
  "4 5 1 4";

  const crearObjeto = (pieces) => {
    const rows = pieces.trim().split('\n').slice(1);
    const puzzleObj = {};

    rows.forEach((_, index) => {
      const sides = rows[index].split(' ').map(Number);
      const type = getType(sides);
      sides.push(sides[0])
      puzzleObj[index + 1] = { sides, type };
    });
    console.log({puzzleObj})

    return puzzleObj;
  }

  const crearArray = (pieces) => {
    const rows = pieces.trim().split('\n').slice(1);
    let puzzleArray = [];

    rows.forEach((_, index) => {
      const sides = rows[index].split(' ').map(Number);
      const type = getType(sides);
      sides.push(sides[0])
      puzzleArray.push({ pieceNum: index + 1, sides, type });
    });
    console.log({puzzleArray})

    return puzzleArray;
  }

  const getType = (fila) => {
    const ceros = fila.filter(x => x === 0).length;
    if (ceros === 2) return 'corner';
    if (ceros === 1) return 'margin';
    return 'content';
  }

  const tryPuzzleRow = (rowNum, rowSolution) => {
    const rowsNumber = Math.sqrt(puzzleArray.length)
    for (let i = 0; i < rowsNumber; i++) {
      if(rowSolution.length === 0)
      {
        if(rowNum === 1)
        {
          const index = puzzleArray.findIndex(piece => piece.type.corner);
          if (index !== -1) {
            rowSolution.push(puzzleArray.splice(index, 1)[0]);
          }
        }
      }
    }
  }

  crearObjeto(textPieces)
  let puzzleArray = crearArray(textPieces)
  let puzzleSolution = []
  puzzleSolution.push(tryPuzzleRow(1,))
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
