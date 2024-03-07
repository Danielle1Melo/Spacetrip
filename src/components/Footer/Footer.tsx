import styled from "../../styles/Footer.module.css";
import space from "../../assets/spaceFooter.png";
import Image from "next/image";

export default function Footer() {
  return (
    <div className={styled.container}>
      <h2>SPACETRIP</h2>
      <div className={styled.name}>
        <p>&#169; 2024 Danielle Melo.</p>
        <Image src={space} width={30} height={30} alt="" />
      </div>
      <p>We love you to the moon and back 💜</p>
    </div>
  );
}
