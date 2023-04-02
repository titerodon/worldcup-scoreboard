import ActionsBar from "../ActionsBar/ActionsBar";
import "./Match.scss";
import Flag from "../Flag/Flag";
const Match = ({
  home,
  away,
  homeScore,
  awayScore,
  finishHandler,
  updateHandler,
}) => {
  return (
    <>
      <div className="match">
        <div className="match__info">
          <span className="match__info-team">
            <Flag country={home} />
            {home}
          </span>
          <div className="match__info-score">
            <span>{homeScore}</span>
            <span>-</span>
            <span>{awayScore}</span>
          </div>
          <span className="match__info-team">
            <Flag country={away} />
            {away}
          </span>
        </div>
        <div className="match__actions">
          <ActionsBar
            actions={[
              { text: "Update", callback: updateHandler },
              { text: "Finish", callback: finishHandler },
            ]}
          />
        </div>
      </div>
    </>
  );
};
export default Match;
