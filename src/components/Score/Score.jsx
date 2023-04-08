import "./Score.scss";
const Score = ({ home, away }) => {
  return (
    <>
      <div className="score">
        <span>{home}</span>
        <span>-</span>
        <span>{away}</span>
      </div>
    </>
  );
};
export default Score;
