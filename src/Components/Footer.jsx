import "../assets/css/Footer.css";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; {new Date().getFullYear()} Todo List Site. All rights reserved.</p>
        <ul className="footer-links">
          <li><a href="/terms">Terms of Service</a></li>
          <li><a href="/privacy">Privacy Policy</a></li>
          {/* Add more footer links as needed */}
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
