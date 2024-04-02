import NavBar from "./Componentes/NavBar";
import Presentation from "./Componentes/Presentation";

function App() {
  return (
    <section className=" font-grotesk bg-black min-h-screen dark:text-white overflow-hidden">
      <div className=" max-w-7xl mx-auto p-5">
        <NavBar />
        <Presentation/>
      </div>
    </section>
  );
}

export default App;
