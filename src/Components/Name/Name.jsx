import styling from "./Name.module.css";

export default function Name({ title }) {
  return <h2 className={styling.title}>{title}</h2>;
}
