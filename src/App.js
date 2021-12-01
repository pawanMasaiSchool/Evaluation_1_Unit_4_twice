import { useEffect, useState } from "react";
import Card from "./Components/Card/Card";
import "./styles.css";

export default function App() {
  function getData() {
    return fetch(`http://localhost:3000/cars`).then((res) => res.json());
  }

  const [isLoading, setIsLoading] = useState(true);

  const [data, setData] = useState([]);

  useEffect(() => {
    getData()
      .then((res) => {
        console.log(data);
        setData(res);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  // const data = () => getData();
  // console.log(data)
  return (
    <div className="App">
      {isLoading ? (
        <img src="https://i.gifer.com/BPcM.gif" alt="....Loading" />
      ) : (
        <>
          {data.map((item) => {
            return (
              <Card
                title={item.name}
                price={item.price}
                src={item.image}
                type={item.type}
              />
            );
          })}
        </>
      )}

      {/* <Card
        title={"Lamborghini"}
        price="₹5000000"
        src="https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/facelift_2019/model_detail/augmented-reality/aventador/s/ar_aven_s.png"
      /> */}
    </div>
  );
}
