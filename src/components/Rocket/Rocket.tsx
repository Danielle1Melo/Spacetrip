import Image from "next/image";
import styled from "../../styles/Rocket.module.css";
import rocket from "@/assets/rocket.jpg";

export default function Rocket() {
  return (
    <div className={styled.container}>
      <div className={styled.section}>
        <h2>Unusual Rockets</h2>
        <p>Red , yellow , blue and another colors and types of rockets.</p>
        <button className={styled.button}>See More</button>
      </div>
      <Image src={rocket} width={400} height={400} alt="" className={styled.image}/>
    </div>
  );
}
