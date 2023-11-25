import logo from './logo.svg';
import './App.css';
import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';
import { Profiler } from 'react';
import Profile from './Profile';

function App() {
  return (
    <div className="App">
      <LoginButton></LoginButton>
      <p>Hello</p>
      <Profile></Profile>
      <LogoutButton></LogoutButton>
  
    </div>
  );
}

export default App;
