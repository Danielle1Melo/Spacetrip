import styled from "../../styles/quote.module.css"

export default function Quote() {
  return (
    <div className={styled.container}>  
      <p>Quote</p>
      <h2>
        ‘’You know what they say? That the earth rotates. When you learn as a
        kid that the world turns, you can't believe it, because it seems like
        everything is standing still. And I can feel it. The rotation of the
        earth. ‘’
      </h2>     
      <p>The main director</p>
    </div>
  );
}
