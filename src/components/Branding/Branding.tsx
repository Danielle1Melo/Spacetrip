import styled from "../../styles/Branding.module.css";
import Stars from "../Stars/Stars";

const itens = [
  {
    title: "Branding",
    text: "Space Trips - it is a brand , which can help you make the first your space trip.",
  },
  {
    title: "Pilots",
    text: "Our pilots can help you to visit another planets.",
  },
  {
    title: "Workers",
    text: "Our workers provide a comfortable cosmos trip.",
  },
  {
    title: "Trips",
    text: "In the trips you can see a space , planets and a beautiful stars.",
  },
];

export default function Branding() {
  return (
    <div className={styled.container}>
      <div className={styled.linha}></div>
      <div className={styled.session}>
        {itens.map((item) => {
          return (
            <div className={styled.session}>
              <div className={styled.card}>
                <h2>{item.title}</h2>
                <p>{item.text}</p>
              </div>
              <div className={styled.linha}></div>
            </div>
          );
        })} 
      </div>
    </div>
  );
}
