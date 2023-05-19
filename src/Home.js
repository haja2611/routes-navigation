import { Link } from "react-router-dom";
export default function Home() {
  return (
    <div>
      
        <h2>welcome to the Homepage </h2>
        <p>You can do this, I believe in you</p>
      
      <nav>
        <Link to="/about">About</Link>
      </nav>
      <nav>
        <Link to="/contact">Contact</Link>
      </nav>
</div>
  );
}
