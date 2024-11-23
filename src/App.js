import logo from './logo.svg';
import logoDev from './logo-developper-engineering.png';
import './App.css';


function HeaderButton({ buttonTextContent }) {
  return (
    <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded" >{buttonTextContent}</button>
  );
}

function ProjectButton() {
  return <HeaderButton buttonTextContent="Projets" />;
}

function AboutButton() {
  return <HeaderButton buttonTextContent="À propos" />;
}

function GithubButton() {
  return <HeaderButton buttonTextContent="Github" />;
}

function ContactButton() {
  return <HeaderButton buttonTextContent="Contact" />;
}



// Navbar structure
function Navbar() {
  return (
    <nav>
      <img src={logoDev} alt="Logo developper and engineer" />
      <h2>Julien Hémond</h2>
      <div>
        <ProjectButton />
        <AboutButton />
        <GithubButton />
        <ContactButton />
      </div>
      {/* TODO : add envoyer un message button */}
    </nav>
  )
}

function App() {
  return (
    <div className="App">
      <header>
        <Navbar />
      </header>


    </div>
  );
}

export default App;
