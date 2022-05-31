import logo from './logo.svg';
import './App.css';

import MusicList from './MusicList';
import SongInfo from './SongInfo';
import { Header } from 'semantic-ui-react';
import SongForm from './SongForm';

function App() {
  return (
    <div>
      <Header>Music List</Header>
      <SongForm />
      <MusicList />

    </div>
  );
}

export default App;
