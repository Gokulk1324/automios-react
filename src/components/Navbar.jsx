import { Link } from "react-router-dom";
const user = JSON.parse(localStorage.getItem("user"));

function Navbar() {
  return (
    <nav style={{
      display: "flex",
      justifyContent: "space-between",
      padding: "15px 40px",
      background: "#949494",
      color: "#fff"
    }}>


      <h2>Automios</h2>

      <div style={{ display: "flex", gap: "20px" }}>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/posts" style={{ color: "white" }}>Posts</Link>
        {user ? (
          <button onClick={() => {
            localStorage.removeItem("user");
            window.location.reload();
          }}>
            Logout
          </button>
        ) : (
          <Link to="/login" style={{ color: "white" }}>Login</Link>
        )}
      </div>


    </nav>
  );
}

export default Navbar;