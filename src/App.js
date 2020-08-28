import React from 'react';
import Navbar from "./components/Navbar";
import { Route, Switch } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProfilePage from "./pages/ProfilePage";
import SearchQueryPage from "./pages/SearchQueryPage";
import VideoDetailPage from "./pages/VideoDetailPage";

/*
  / => Trending Vdos
  /search/:query  => Search results
  /profile => Profile data
  /videos/:id => Vidio Detail page
*/

function App() {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/search/:query" component={SearchQueryPage} />
        <Route exact path="/profile" component={ProfilePage} />
        <Route exact path="/videos/:id" component={VideoDetailPage} />
      </Switch>
    </div>
  );
}

export default App;
