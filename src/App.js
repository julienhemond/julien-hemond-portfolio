import logo from './logo.svg';
import logoDev from './logo-developper-engineering.png';
import './App.css';


function HeaderButton({ buttonTextContent, onClickHandler }) {
  return (
    <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded" onClick={onClickHandler}>
      {buttonTextContent}
    </button>
  );
}

function ProjectButton() {
  return <HeaderButton buttonTextContent="Projets" onClick="" />;
}

function AboutButton() {
  return <HeaderButton buttonTextContent="À propos" />;
}

function GithubButton() {
  const visitGithub = () => {
    window.open("https://github.com/julienhemond", "_blank");
  }
  return <HeaderButton buttonTextContent="Github" onClickHandler={visitGithub} />;
}

function ContactButton() {
  return <HeaderButton buttonTextContent="Contact" />;
}



// Navbar structure
function Navbar() {
  return (
    <nav className="flex flex-no-wrap flex-row justify-between">
      <div className='flex-initial'><img src={logoDev} alt="Logo developper and engineer" className="object-contain h-full" /></div>
      <div className='flex-initial'><h2>Julien Hémond</h2></div>
      <div className='flex-initial flex flex-no-wrap flex-row justify-end content-start'>
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
