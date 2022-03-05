import "./meme.css";
export default function Meme() {
  return (
    <form className="meme--form">
      <section className="input--section">
        <input type="text" placeholder="first text" className="input" />
        <input type="text" placeholder="second text" className="input" />
      </section>
      <button className="btn">Get a new meme image</button>
    </form>
  );
}
