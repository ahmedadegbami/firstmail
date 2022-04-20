import SecondHello from "./SecondHello";

const Hello = ({ SecondP, firstP }) => (
  <>
    <p>
      {SecondP}
      {firstP}
    </p>
    <p>gggggg </p>
    <SecondHello greeting="Good Night" />
  </>
);

export default Hello;
