import './App.css';
import Navbar from './assets/components/navbar'; // Ruta relativa al archivo App.tsx
import Hero from './assets/components/hero'; // Ruta relativa al archivo App.tsx
import Main from './assets/components/content'; // Ruta relativa al archivo App.tsx
import Footer from './assets/components/footer'; // Ruta relativa al archivo App.tsx

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
