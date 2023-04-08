import Flag from "../Flag/Flag";
import Score from "../Score/Score";
const Summary = ({ summaryData }) => {
  return (
    <div className="summary">
      <h2>Summary data by total score</h2>
      <div className="scoreboard__events">
        {summaryData.map((match, index) => {
          return (
            <div className="match__info" key={`summary-match-${match}`}>
              <span className="match__info-team">
                <Flag country={match.home} />
                {match.home}
              </span>
              <div className="match__info-score">
                <Score home={match.homeScore} away={match.awayScore} />
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
