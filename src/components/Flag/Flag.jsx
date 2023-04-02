import "./Flag.scss";

const Flag = ({ country }) => {
  const countryCode = {
    argentina: "ar",
    australia: "au",
    brazil: "br",
    canada: "ca",
    germany: "de",
    spain: "es",
    france: "fr",
    italy: "it",
    mexico: "mx",
    uruguay: "uy",
  };
  return (
    <img
      className="flag"
      alt={countryCode[country.toLowerCase()]}
      src={`/assets/images/${countryCode[country.toLowerCase()]}.svg`}
    />
  );
};
export default Flag;
