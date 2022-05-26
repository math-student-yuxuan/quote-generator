import "./App.css";
import Modal from "./UI/Modal";
import { useState } from "react";
import quotesData, { colors } from "./data";
import { fadeColor, combine } from "./transition";
function getRandomInd(n) {
  return Math.floor(Math.random() * n);
}

function App() {
  const [toFadeIn, setToFadeIn] = useState(0);
  const [prevColor, setPrevColor] = useState("#34568B");
  const [color, setColor] = useState("#88B04B");
  const [prevQuote, setPrevQuote] = useState([
    "This is a quote and it is now very long long long long long",
    "author",
  ]);
  const [quote, setQuote] = useState([
    "This is a quote and it is now very long long long long long",
    "author",
  ]);

  const anim = combine(prevColor, color);
  const colorAnim = fadeColor(prevColor, color);
  const colorChangeStyle = {
    backgroundColor: color,
    animationDuration: "1s",
    animationIterationCount: 1,
    animationName: "fadeColor",
  };
  const textChangeStyleIn = {
    color: color,
    animationDuration: "2s",
    animationIterationCount: 1,
    animationName: "fadeTextIn",
    transform: "translateY(0)",
  };
  const textChangeStyleOut = {
    color: color,
    animationDuration: "2s",
    animationIterationCount: 1,
    animationName: "fadeTextOut",
    opacity: 0,
  };
  function clickHandler() {
    setToFadeIn((prev) => prev ^ 1);
    setPrevColor(color);
    setColor(colors[getRandomInd(colors.length)]);
    setPrevQuote(quote);
    setQuote(quotesData[getRandomInd(quotesData.length)]);
  }
  return (
    <div className="App">
      <style children={anim} />
      <Modal
        color={color}
        colorAnim={colorAnim}
        colorChangeStyle={colorChangeStyle}
        url="#"
        link=" yukizhang"
      >
        <div
          className="quote"
          style={toFadeIn === 0 ? textChangeStyleIn : textChangeStyleOut}
          key={color}
        >
          <blockquote>{toFadeIn === 0 ? quote[0] : prevQuote[0]}</blockquote>
          <p>{toFadeIn === 0 ? quote[1] : prevQuote[1]}</p>
        </div>
        <div
          className="quote"
          style={toFadeIn === 1 ? textChangeStyleIn : textChangeStyleOut}
          key={toFadeIn}
        >
          <blockquote> {toFadeIn === 1 ? quote[0] : prevQuote[0]}</blockquote>
          <p>{toFadeIn === 1 ? quote[1] : prevQuote[1]}</p>
        </div>
        <div className="links">
          <div className="social-links">
            <button>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z" />
              </svg>
            </button>
          </div>
          <button
            key={color}
            id="quote-button"
            onClick={clickHandler}
            style={colorChangeStyle}
          >
            Get quote
          </button>
        </div>
      </Modal>
    </div>
  );
}

export default App;
