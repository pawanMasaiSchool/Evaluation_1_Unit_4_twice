import Name from "../Name/Name";
import OrderButton from "../OrderButton/OrderButton";
import Price from "../Price/Price";
import styling from "./Card.module.css";

function Card({ src, title, price }) {
  return (
    <div className={styling.card}>
      <img className={styling.myImg} src={src} alt={title} />
      <Name title={title} />
      <Price price={price} />
      <OrderButton />
    </div>
  );
}

export default Card;
