import Flag from "../Flag/Flag";
const Summary = ({ summaryData }) => {
  return (
    <div className="summary">
      <h2>Summary data by total score</h2>
      <div className="scoreboard__events">
        {summaryData.map((match, index) => {
          return (
            <div className="match__info" key={index}>
              <span className="match__info-team">
                <Flag country={match.home} />
                {match.home}
              </span>
              <div className="match__info-score">
                <span>{match.homeScore}</span>
                <span>-</span>
                <span>{match.awayScore}</span>
              </div>
              <span className="match__info-team">
                <Flag country={match.away} />
                {match.away}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Summary;
