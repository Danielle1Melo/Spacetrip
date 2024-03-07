import Information from "@/components/Information/Information";
import Pilots from "@/components/Pilots/Pilots";
import Quote from "@/components/Quote/Quote";
import Rocket from "@/components/Rocket/Rocket";
import UnusualRockets from "@/components/UnusualCarrosel/UnusualCarrosel";
import Stars from "@/components/Stars/Stars";

export default function Trips() {
  return (
    <>
      <div>
        <Information />
        <UnusualRockets />
        {/* <Rocket /> */}
        {/* <Pilots /> */}
        <Quote />
      </div>
    </>
  );
}
