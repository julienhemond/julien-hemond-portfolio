import * as React from 'react';
import logo from './logo.svg';
import logoDev from './logo-developper-engineering.png';
import './App.css';

const project1 = {
  "name": "Application de recherche de planètes avec l'api NASA",
  "description": "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda accusamus omnis voluptas laborum expedita magni necessitatibus saepe quo. Optio tempore nesciunt similique debitis natus blanditiis id repudiandae corrupti, minus officia dolor facere iusto temporibus porro rem eligendi quia beatae vero nam voluptate. Harum nam at, quod dolorum maiores explicabo temporibus velit dignissimos id, libero, quis dicta! Nostrum ipsam delectus non quisquam eum tenetur, velit sint eligendi aperiam corrupti iure provident iusto, excepturi modi unde nam saepe dicta commodi obcaecati ad! Distinctio, dolor doloremque incidunt quisquam impedit officia a repellendus vero quos! Ullam vitae distinctio incidunt iste recusandae animi aliquam hic.",
  "image": "https://img.freepik.com/premium-photo/wonderful-ice-exoplanet-drawing-elements-this-image-furnished-by-nasa_410516-25545.jpg",
  "link": "",
  "github": ""
};

const projectsList = [project1, project1];


function HeaderButton({ buttonTextContent, onClickHandler }) {
  return (
    <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded" onClick={onClickHandler}>
      {buttonTextContent}
    </button>
  );
}

function showDialog(selector) {
  const dialog = document.querySelector(selector);
  if (dialog)
    document.querySelector(selector).showModal();
  else
    console.error(`Dialog with selector "${selector}" not found`);
}

function ProjectsButton() {
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

function DialogContact() {
  const handleClose = () => {
    const dialog = document.querySelector(".dialog-contact");
    if (dialog)
      dialog.close();
  }
  return (<dialog className="dialog-contact">
    <div><h3>Joindre</h3></div>
    <div><p>Linkedin</p></div>
    <div><p>Courriel</p></div>
    <button onClick={handleClose}>Fermer</button>
  </dialog>);
}
function ContactButton() {
  const handleClick = () => {
    showDialog(".dialog-contact")
  }
  return <HeaderButton buttonTextContent="Contact" onClickHandler={handleClick} />;
}

function ProjectsPage() {
  return (
    <main className="flex flex-row flex-wrap">
      {projectsList.map((project, index) => (
        <article className='flex-none grid grid-cols-1 grid-rows-7 h-128 w-32'>
          <div><h4>{project.name}</h4></div>
          <div className='grid-cols-5'><img src={project.image} className='object-cover' /></div>
          <div><p>En savoir plus</p><button className='arrow-corner-expand-box'></button></div>
        </article>
      ))}
    </main>
  );
}

function ShowOneProject(project) {
  return <article className='flex-none grid grid-cols-1 grid-rows-7'>
    <div><h4>{project.name}</h4></div>
    <div className='grid-cols-5'><img src={project.image} /></div>
    <div><p>En savoir plus</p><button className='arrow-corner-expand-box'></button></div>

  </article>
}




// Navbar structure
function Navbar() {
  return (
    <nav className="flex h-16 flex-no-wrap justify-between ">
      <header className="flex-initial flex flex-no-wrap justify-start gap-4">
        <div className='flex-initial m-1'><img src={logoDev} alt="Logo developper and engineer" className="object-contain h-full" /></div>
        <div className='flex-initial self-center'><h2>Julien Hémond</h2></div>
      </header>

      <div className='flex-initial flex flex-no-wrap justify-end content-start'>
        <ProjectsButton />
        <AboutButton />
        <GithubButton />
        <ContactButton />
      </div>
      {/* TODO : add envoyer un message button*/}
    </nav>
  )
}

function App() {
  return (
    <div className="App">
      <section>
        <Navbar />
      </section>
      <section>
        <ProjectsPage />
      </section><section><DialogContact /></section>



    </div>
  );
}

export default App;
