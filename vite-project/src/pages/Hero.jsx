const Hero = () => {
  return (
    <div className="hero">
      <h1>Welcome to YorFlix</h1>
      <p>Watch your favorite movies and TV shows anytime, anywhere.</p>
      <button onClick={handleGetStarted}>Get Started</button>
    </div>
  );
};

const handleGetStarted = () => {
  console.log("Get Started clicked");
  window.location.href = "/home";
};

export default Hero;
