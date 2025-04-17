import { useState } from "react";
import Nav from "./Components/Nav";

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Nav />
    </>
  );
}
