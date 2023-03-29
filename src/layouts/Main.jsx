import { Outlet, Link } from "react-router-dom";

export default function Main() {
  return (
    <>
      <nav>
        <h1>Supa Smoothies</h1>
        <Link to="/">Home</Link>
        <Link to="/create">Create New Smoothie</Link>
      </nav>
      <Outlet />
    </>
  );
}
