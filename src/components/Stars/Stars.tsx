import styled from "../../styles/Stars.module.css"

const generateRandomNumber = (min: number, max: number) => {
    return Math.random() * (max - min) + min;
  };
  
  const getRandomStyle = () => {
    const randomSize = Math.floor(generateRandomNumber(1,4));
    const randomTop = `${generateRandomNumber(0,100)}%`;
    const randomLeft = `${generateRandomNumber(0,100)}%`;
  
    return{
      size: randomSize === 1 ? 'small' : randomSize === 2 ? "medium" : "large",
      top: randomTop,
      left: randomLeft,
   }
  }

  export default function Stars(){
    const stars = Array.from({ length: 100 }, (_, index) => {
        const { size, top, left } = getRandomStyle();
        return (
          <div
            key={index}
            className={`${styled.star} ${styled[size]}`}
            style={{ top, left }}
          ></div>
        );
      });

      return(
        <div>{stars}</div>
      )
  }
  