import "./header.css";
export default function Header() {
  return (
    <section className="header--section">
      <section className="logo--section">
        <img src="/images/trollface.png" alt="logo" className="logo--img" />
        <h1 className="header--title">Meme Generator</h1>
      </section>
      <p className="header--text">React Course - Project 3</p>
    </section>
  );
}
