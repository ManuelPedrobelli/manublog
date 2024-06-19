import Article from './article'; // Ruta relativa al archivo App.tsx

const Main = () => {
  return (
    <div id='content' className='flex flex-col items-center justify-center w-screen mx-auto gap-12 h-auto '>
      <a href='https://www.youtube.com/watch?v=tYpk_N3eGag' target="_blank" rel="noopener noreferrer" >
      <Article />
      </a>
    </div>
  );
};

export default Main;
