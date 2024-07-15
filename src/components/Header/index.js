import { useState } from "react";
import Menu from "../Menu";
import { Container } from "./styles";

import Image from "next/image";

export default function Header() {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };

  const getDate = () => {
    const today = new Date();
    const options = { year: "numeric", month: "numeric", day: "numeric" };
    return today.toLocaleDateString("pt-BR", options);
  };

  return (
    <Container className={active ? "active" : ""}>
      <span onClick={handleClick} className={active ? "active" : ""}></span>
      <div className="date">{getDate()}</div>
      <Image
        src="https://github.com/danieldribeiro.png"
        alt=""
        width={35}
        height={35}
      />
      <Menu active={active} />
    </Container>
  );
}
