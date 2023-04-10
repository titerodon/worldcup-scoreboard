import { useState } from "react";
import matches from "./../../data/matches.json";
import ActionsBar from "../ActionsBar/ActionsBar";
import Match from "../Match/Match";

import "./Scoreboard.scss";
import Summary from "../Summary/Summary";

const Scoreboard = () => {
  const [scoreboardData, setScoreboardData] = useState([]);
  const [summaryData, setSummaryData] = useState([]);

  // filter matches from json data and return the first one available
  const getAvailableMatch = () => {
    const availableMatches = matches.filter((match) => {
      return !scoreboardData.some((scoreboardEvent) => {
        return match.home === scoreboardEvent.home;
      });
    });
    return { ...availableMatches[0], homeScore: 0, awayScore: 0 };
  };

  // start a new game and add it to the scoreboard
  const startGame = () => {
    if (scoreboardData.length < 5) {
      setScoreboardData([...scoreboardData, getAvailableMatch()]);
    } else {
      alert("No more matches available!");
    }
  };

  // finish a game and remove it from the scoreboard
  const finishGame = (match) => {
    const updatedScoreboard = scoreboardData.filter((scoreboardEvent) => {
      return scoreboardEvent.home !== match.home;
    });
    setScoreboardData(updatedScoreboard);
  };
  // update score randomly adding a goal to home/away team
  const updateScore = (match) => {
    const updatedScoreboard = scoreboardData.map((scoreboardEvent) => {
      if (match.home === scoreboardEvent.home) {
        Math.round(Math.random()) === 0
          ? (scoreboardEvent.homeScore += 1)
          : (scoreboardEvent.awayScore += 1);
      }
      return scoreboardEvent;
    });
    setScoreboardData(updatedScoreboard);
  };

  // sort current scoreboard by total score and add it to a summary component
  const getSummaryByTotalScore = () => {
    const scoreboardMatches = [...scoreboardData];
    const summaryByTotalScore = scoreboardMatches.sort((a, b) => {
      return a.homeScore + a.awayScore < b.homeScore + b.awayScore ? 1 : -1;
    });
    setSummaryData(summaryByTotalScore);
  };

  return (
    <>
      <div className="scoreboard">
        <h1>Scoreboard</h1>
        <ActionsBar
          actions={[
            { text: "Start game", callback: startGame },
            { text: "Get summary", callback: getSummaryByTotalScore },
          ]}
        />
        <div className="scoreboard__events">
          {scoreboardData.map((match) => {
            return (
              <Match
                home={match.home}
                away={match.away}
                homeScore={match.homeScore}
                awayScore={match.awayScore}
                key={`${match.home}-${match.away}`.toLowerCase()}
                finishHandler={() => finishGame(match)}
                updateHandler={() => updateScore(match)}
              />
            );
          })}
        </div>
        {summaryData.length > 0 && <Summary summaryData={summaryData} />}
      </div>
    </>
  );
};

export default Scoreboard;
