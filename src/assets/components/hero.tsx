
const Hero = () => {
  return (
    <div id='hero' className='flex items-center justify-center w-screen h-screen pt-20 '>
      <div className="flex items-center justify-center bg-black bg-black bg-opacity-80 w-2/3 mx-auto h-2/3 ms-auto">

        <div className="flex gap-12"> 
          <img className="rounded-full" src="/pic.png"></img>
          <div className="flex flex-col items-center justify-center">
            <h1 className='text-4xl text-white text-center mb-12'>Manu Pedrobelli</h1>
            <p>
              Hey! I'm Manu<br></br>
              This is my blog, where i upload videos of guitar covers.<br></br>
              I hope you enjoy.<br></br>
              Like and subscribe!
            </p>


          </div>
        </div>
      
      
      </div>
    </div>
  );
};

export default Hero;
