import styled from "../../styles/Information.module.css";
import Stars from "../../components/Stars/Stars";

const informations = [
  {
    title: "200.000",
    subtitle: "trips",
  },
  {
    title: "12.000",
    subtitle: "workers",
  },
  {
    title: "5.000",
    subtitle: "places",
  },
];

export default function Information() {
  return (
      <div className={styled.container}>
        <Stars />
        <div>
          <section className={styled.containerSections}>
            {informations.map((information) => {
              return (
                <div className={styled.sections}>
                  <h2>{information.title}</h2>
                  <p>{information.subtitle}</p>
                </div>
              );
            })}
          </section>
        </div>
        <div className={styled.texts}>
          <h1>
            We use a new fashion technologies and in our compay working a
            professional spaces workers
          </h1>
          <p>
            Our company started work at 2023 and of this year we made a lot of
            comos trips.
          </p>
        </div>
        
      </div>
  );
}
