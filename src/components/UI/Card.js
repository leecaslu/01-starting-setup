import { useState } from 'react';
import './Card.css';

// Esse componente coloca todos os estilos de css em comum de cards em um componente.

const Card = (props) => {
  const [isActive, setIsActive] = useState(false);
  const mouseHandler = e => {
    setIsActive(estado => !estado);
  }
  return <div
    className={(isActive ? 'card__active ' : 'card__inactive ') + props.className} onMouseEnter={mouseHandler} onMouseLeave={mouseHandler}>{props.children}</div>;
}

export default Card;