import Header from "../components/header/Header";
import "../styles/main.css";
import "../App.css";

function Head() {
  return (
    <div className="App">
      <Header />

      <main className="section">
        <div className="container">
          <ul className="content-list">
            <li className="content-list__item">
              <h2 className="title-2">Frontend</h2>
              <p>
                JavaScript, TypeScript, ReactJS, Redux, HTML, CSS, BootStrap,
                TailwindCSS.
              </p>
            </li>
          </ul>
        </div>
      </main>
    </div>
  );
}

export default Head;
