import "./App.css";
import Modal from "./UI/Modal";
import { useState } from "react";
import quotesData, { colors } from "./data";
import { fadeColor, fadeTextIn, fadeTextOut } from "./transition";
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
  const colorAnim = fadeColor(prevColor, color);
  const colorChangeStyle = {
    backgroundColor: color,
    animationDuration: "1s",
    animationIterationCount: 1,
    animationName: "fadeColor",
  };
  const textAnimIn = fadeTextIn(prevColor, color);
  const textChangeStyleIn = {
    color: color,
    animationDuration: "2s",
    animationIterationCount: 1,
    animationName: "fadeTextIn",
  };
  const textAnimOut = fadeTextOut(prevColor, color);
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
    console.log(prevColor, color);
  }
  return (
    <div className="App">
      <style children={(colorAnim, textAnimIn, textAnimOut)} />
      <Modal
        color={color}
        colorAnim={colorAnim}
        colorChangeStyle={colorChangeStyle}
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
            <button>F</button>
            <button>T</button>
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
