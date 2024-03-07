import styled from "../styles/Home.module.css";
import Navbar from "../components/Navbar/Navbar";
import Trips from "./trips/page";
import space from "@/assets/spaceImg.jpg"
import Image from "next/image";
import Carrosel from "@/components/Carrosel/Carrosel";
import Stars from "@/components/Stars/Stars";
import Branding from "@/components/Branding/Branding";
import Footer from "@/components/Footer/Footer";

export default function Home() {

  return (
    <>
      <div className={styled.container}>
        <Stars />
        <Navbar />
        <div className={styled.texts}>
          <h1>We can help you to organise your space trip</h1>
          <p>
            SPACETRIP - it is a company, which can help you to organise ypur space
            trip. You can visit the moon and more planets!
          </p>
          <button className={styled.button}>Ticket</button>
        </div>
        {/* <Image 
          src={space}
          layout="fill"
          objectFit="cover"
          quality={100}
          alt=""
          className="spaceImg"
        /> */}
      </div>
      <Trips />
      <Carrosel /> 
      <Branding />
      <Footer />
    </>
   
  );
}
