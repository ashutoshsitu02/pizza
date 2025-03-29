import "../index.css";

const Footer = () => {
  const currentTime = new Date().getHours();
  const isOpen = currentTime >= 12 && currentTime < 22; // Open from 12:00 to 22:00
  // Footer component
  return (
    <>
      <footer className="footer">
        {isOpen ? (
          <div className="order">
            <p>
              We're open from 12:00 to 22:00. Come visit us or order online.
            </p>

            <button className="btn">Order</button>
          </div>
        ) : (
          <p>We're closed. Come back later!</p>
        )}
      </footer>
    </>
  );
};

export default Footer;
