import { useParams } from "react-router-dom";

const BrawlDetails = () => {
  const params = useParams();
  return (
    <section>
      <h1>BrawlDetails</h1>
      <p>{params.brawlid}</p>
    </section>
  );
};

export default BrawlDetails;
