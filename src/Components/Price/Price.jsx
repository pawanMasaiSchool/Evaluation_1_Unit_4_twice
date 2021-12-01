import styling from "./Price.module.css";

export default function Price({ price }) {
  return <h3 className={styling.price}>Price:- {price}</h3>;
}
