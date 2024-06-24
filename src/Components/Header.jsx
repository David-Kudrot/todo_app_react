import '../assets/css/Header.css'; // Import your Header.css file

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <a href="/">Todo-List</a>
      </div>
      <nav className="nav">
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/products">Lists</a></li>
          <li><a href="/cart">About</a></li>
          {/* Add more links as needed */}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
