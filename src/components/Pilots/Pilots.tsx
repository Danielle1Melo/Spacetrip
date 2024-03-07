import astronaut from "@/assets/astronaut.jpg";
import Image from "next/image";
import styled from "../../styles/Rocket.module.css"
import Stars from "../Stars/Stars";

export default function Pilots() {
  return (
    <div className={styled.container}>
      <Image src={astronaut} width={400} height={400} alt="" className={styled.image}/>
      <div className={styled.section}>
        <h2>Our pilots</h2>
        <p>Our pilots are very serious and also funny people, who can make for you space trip</p>
        <button className={styled.button}>See More</button>
      </div>
    </div>
  );
}
