import trollFace from './assets/TrollFace.png'
function Header() {
  return (
    <header className="app-header">
      <img src={trollFace} alt="Troll Face" />
      <nav>
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Contact</a>
      </nav>
    </header>
  );
}

export default Header;
