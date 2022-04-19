import SecondHello from "./SecondHello";

const Hello = (prop) => (
  <>
    <p>
      {prop.SecondP}
      {prop.firstP}
    </p>
    <p>gggggg </p>
    <SecondHello greeting="Good Night" />
  </>
);

export default Hello;
