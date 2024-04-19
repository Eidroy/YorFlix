import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "./pages/Home";
import MovieDetail from "./pages/MovieDetail";
import Login from "./pages/Login";
import Register from "./pages/Register";
import NotFound from "./pages/NotFound";
import "./App.css";
import Movies from "./pages/Movies";
import Series from "./pages/Series";
import Hero from "./pages/Hero";
import Popular from "./pages/Popular";
import New from "./pages/new";
import SerieDetail from "./pages/SerieDetail";
import MyList from "./pages/MyList";

function SomeComponent() {
  const handleMovie = () => {
    window.location.href = "/movies";
  };

  const handleSerie = () => {
    window.location.href = "/series";
  };

  const handlePopular = () => {
    window.location.href = "/popular";
  };

  const handleNew = () => {
    window.location.href = "/new";
  };

  const handleMyList = () => {
    window.location.href = "/mylist";
  };

  return (
    <div className="SelectButtons">
      <button onClick={handleMovie}>Movies</button>
      <button onClick={handleSerie}>TV Shows</button>
      <button onClick={handlePopular}>Popular</button>
      <button onClick={handleNew}>New</button>
      <button onClick={handleMyList}>My List</button>
    </div>
  );
}

function App() {
  const handleLoginClick = () => {
    console.log("Login clicked");
    window.location.href = "/login";
  };

  const handleRegisterClick = () => {
    console.log("Register clicked");
    window.location.href = "/register";
  };
  return (
    <Router>
      <div className="header">
        <Link to="/">
          <h1>YorFlix</h1>
        </Link>
        <div className="SelectButtons">
          <div>{<SomeComponent />}</div>
        </div>
        <div className="AuthButtons">
          <button onClick={handleLoginClick}>Login</button>
          <button onClick={handleRegisterClick}>Register</button>
        </div>
      </div>
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/home" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/series" element={<Series />} />
        <Route path="/popular" element={<Popular />} />
        <Route path="/new" element={<New />} />
        <Route path="/mylist" element={<MyList />} />
        <Route path="/movie/:id" element={<MovieDetail />} />
        <Route path="/tv/:id" element={<SerieDetail />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
