import "./meme.css";
import data from "../utilities/memesData";
import { useState } from "react";

export default function Meme() {
  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg",
  });
  const [memesdata, setMemesData] = useState(data);

  function getRandom(items) {
    let random = items[Math.floor(Math.random() * items.length)];

    return random;
  }

  function clickhandler() {
    let meme = getRandom(memesdata.data.memes);

    setMeme((oldval) => ({
      ...oldval,
      randomImage: meme.url,
    }));
  }

  return (
    <section className="container--section">
      <form className="meme--form">
        <input type="text" placeholder="first text" className="input" />
        <input type="text" placeholder="second text" className="input" />

        <button className="btn" type="button" onClick={clickhandler}>
          Get a new meme image
        </button>
      </form>
      <section className="memeImg--section">
        <img src={meme.randomImage} alt="random meme" className="memeImage" />
      </section>
    </section>
  );
}
