import React from "react";
import { Route, Routes } from "react-router-dom";
import LandingPage from "./components/LandingPage/LandingPage.jsx";
import NavBar from "./components/Navbar/Navbar.jsx";
import Home from "./containers/Home/Home.jsx";
import Search from "./containers/Search/Search";
import Create from "./containers/Create/Create.jsx";
import About from "./components/About/About.jsx";
import GameDetail from "./containers/GameDetail/GameDetail.jsx";
import "./App.css";
import Layout from "./components/Layout/Layout.jsx";
import NotFound from "./components/NotFound/NotFound.jsx";


function App() {
  return (
    <div className="App">
      {/* <React.Fragment>
        <Route exact path="/" component={LandingPage} />

        <Route path="/home" component={NavBar} />
        <Route exact path="/home" component={Home} />

        <Route path="/results" component={NavBar} />
        <Route
          exact path="/results/:name"
          component={Search} 
        />

        <Route path="/videogames" component={NavBar} />
        <Route
          exact path="/videogames/:id"
          render={({ match }) => < GameDetail id={match.params.id} />}
        />

        <Route path="/create" component={NavBar} />
        <Route path="/create" exact component={Create} />

        <Route path="/about" component={NavBar} />
        <Route path="/about" component={About} />
        
      </React.Fragment> */}

      <Routes>
        <Route path="/" element={<LandingPage />}></Route>
        <Route path="home" element={<Layout />}>
          <Route index element={<Home />}></Route>
          <Route path="about" element={<About />}></Route>

          <Route path="create" element={<Create />}></Route>

          <Route path=":id" element={<GameDetail />} />
          <Route path="search">
            <Route path=":name" element={<Search />} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
