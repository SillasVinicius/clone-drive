
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import { auth, provider } from './firebase';
import Home from './Home';
import Login from './Login';

function App() {
  const [login, setLogin] = useState(null);

  useEffect(() => {
    //Sistema de Login Persistente
    auth.onAuthStateChanged((value) => {
      setLogin({
        name: value.displayName,
        email: value.email,
        profileImage: value.photoURL
      });
    });
  }, []);

  function handleLogin(e) {
    e.preventDefault();
    auth.signInWithPopup(provider)
    .then(function(result) {
      if(result) {
        setLogin(result.user.email);
      }
    })
  }
  return (
    <div className="App">
      {
        (login)
          ?
          <Router>
            <Switch>
              <Route path="/home">
                <Home userLogin={login}/>
              </Route>
              <Route path="/">
                <Home userLogin={login}/>
              </Route>
            </Switch>
          </Router>
          :
          <Login onLogin={(e) => handleLogin(e)}/>
          // <div>
          //   <a
          //     href="#"
          //     // onClick={(e) => handleLogin(e)}
          //   >
          //     Fazer Login
          //   </a>
          // </div>
      }
    </div>
  );
}

export default App;
