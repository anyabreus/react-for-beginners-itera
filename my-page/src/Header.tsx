import info from './info.json';

export const Header = () => (
  <header className="App-header">
    <h1>
      {info.firstName}
    </h1>
  </header>
);
