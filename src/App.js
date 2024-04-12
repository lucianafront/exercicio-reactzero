import logo from './logo.svg';
import './App.css';
import HelloWorld from "./componentes/HelloWorld";



function getRandomColor() {
  var letters = "0123456789ABCDEF";
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function pegarData() {
  const currentDate = new Date();
  const formattedDate = currentDate.toLocaleString("pt-BR", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
 

    // fractionalSecondDigits: 3,
  });

  return formattedDate;
}

function getRandomFontSize() {
  const minSize = 12;
  const maxSize = 36;
  const randomSize =
    Math.floor(Math.random() * (maxSize - minSize + 1)) + minSize;
  return randomSize;
}


function App() {
  return (
    <div className="App">
     {Array.from({ length: 10 }).map((_, index) => (
          <HelloWorld
            dataAtual={pegarData()}
            h1Color={getRandomColor()}
            fsize={getRandomFontSize()}
          />
        ))}
    </div>
  );
}

export default App;
