import { useState } from "react";
import "./App.css";

function App() {
  const [ans, setAns] = useState(Math.floor(Math.random() * 100));
  const [qMark, setQMark] = useState("?");
  const [chances, setChances] = useState(5);
  const [isCorrect, setIsCorrect] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    setChances((prev) => prev - 1);
    checker(e.target[0].value);
    if (chances - 1 === 0) {
      setQMark(`Game Over (answer: ${ans})
        Reload after 5 seconds
      `);
      setTimeout(() => {
        window.location.reload();
      }, 5000);
    }
  };
  const checker = (n) => {
    if (n === ans) {
      setIsCorrect(true);
    } else {
      if (n < ans) {
        setQMark("UP!");
      } else {
        setQMark("Down!");
      }
    }
  };
  return (
    <div className="wrapper">
      <h1>Numbers!</h1>
      <div>
        {isCorrect ? (
          <div className="answerBox">{ans}</div>
        ) : (
          <div className="answerBox">{qMark}</div>
        )}
        <form onSubmit={handleSubmit}>
          <input type="number" placeholder="Guess the Number!" />
          <button>Submit!</button>
        </form>
        <div className="chances">{`You got ${chances} left`}</div>
      </div>
    </div>
  );
}

export default App;
