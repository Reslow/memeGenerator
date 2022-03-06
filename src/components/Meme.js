import "./meme.css";
import data from "../utilities/memesData";

export default function Meme() {
  let memesarray = data.data.memes;

  function getRandom(items) {
    let random = items[Math.floor(Math.random() * items.length)];
    console.log(random.url);
    return random;
  }

  function clickhandler() {
    getRandom(memesarray);
  }

  return (
    <form className="meme--form">
      <input type="text" placeholder="first text" className="input" />
      <input type="text" placeholder="second text" className="input" />

      <button className="btn" type="button" onClick={clickhandler}>
        Get a new meme image
      </button>
    </form>
  );
}
