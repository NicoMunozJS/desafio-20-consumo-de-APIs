export default function Navbar() {
  const total = 25000;
  const token = false;

  return (
    <nav className="navbar bg-light p-3 d-flex justify-content-between align-items-center">
      <button className="btn btn-primary">Home</button>

      <div>
        {token ? (
          <>
            <button className="btn btn-secondary me-2">Profile</button>
            <button className="btn btn-danger me-2">Logout</button>
          </>
        ) : (
          <>
            <button className="btn btn-success me-2">Login</button>
            <button className="btn btn-warning me-2">Register</button>
          </>
        )}
      </div>

      <button className="btn btn-info">Total: ${total.toLocaleString()}</button>
    </nav>
  );
}
