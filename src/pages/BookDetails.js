import { useParams } from "react-router-dom";

function BookDetails() {
  const { lien } = useParams();

  return (
    <div>
      <h1>Liens - Travaux</h1>
      <a href={lien} target="_blank" rel="noreferrer">
        hlliy,uii
      </a>
    </div>
  );
}

export default BookDetails;
