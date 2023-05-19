import { Link } from "react-router-dom";
export default function Contact() {
  return (
    <>
      <main>
        <address>
          <ul>
            <li>J.HAJA MYDEEN</li>
            <li>174/2 KATTUTHALAIVASAL STREET</li>
            <li>KARAIKUDI</li>
          </ul>
        </address>
       <p>welcome our place please visit is</p>
      </main>
      <nav>
        <Link to="/">Home</Link>
      </nav>
      <nav>
        <Link to="/about">About</Link>
      </nav>
    </>
  );
}
