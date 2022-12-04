import './Card.css';

// Esse componente coloca todos os estilos de css em comum de cards em um componente.

const Card = (props) => {
  const classes = 'card ' + props.className;
  return <div className={classes}>{props.children}</div>;
}

export default Card;