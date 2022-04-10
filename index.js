const groups = [
  [
    {
      name: "Katar",
      rank: 51,

      groupName: "A",
      groupPosition: 0,
      groupGames: [], // opponent, score, points
      totalPoints: 0,
      goalDifference: 0,
      scoredGoals: 0,
      considedGoals: 0,
    },
    {
      name: "Ekvador",
      rank: 46,

      groupName: "A",
      groupPosition: 1,
      groupGames: [], // opponent, score, points
      totalPoints: 0,
      goalDifference: 0,
      scoredGoals: 0,
      considedGoals: 0,
    },
    {
      name: "Senegal",
      rank: 20,

      groupName: "A",
      groupPosition: 2,
      groupGames: [], // opponent, score, points
      totalPoints: 0,
      goalDifference: 0,
      scoredGoals: 0,
      considedGoals: 0,
    },
    {
      name: "Holandija",
      rank: 10,

      groupName: "A",
      groupPosition: 3,
      groupGames: [], // opponent, score, points
      totalPoints: 0,
      goalDifference: 0,
      scoredGoals: 0,
      considedGoals: 0,
    },
  ],
  [
    {
      name: "Engleska",
      rank: 5,

      groupName: "B",
      groupPosition: 0,
      groupGames: [], // opponent, score, points
      totalPoints: 0,
      goalDifference: 0,
      scoredGoals: 0,
      considedGoals: 0,
    },
    {
      name: "Iran",
      rank: 21,

      groupName: "B",
      groupPosition: 1,
      groupGames: [], // opponent, score, points
      totalPoints: 0,
      goalDifference: 0,
      scoredGoals: 0,
      considedGoals: 0,
    },
    {
      name: "SAD",
      rank: 15,

      groupName: "B",
      groupPosition: 2,
      groupGames: [], // opponent, score, points
      totalPoints: 0,
      goalDifference: 0,
      scoredGoals: 0,
      considedGoals: 0,
    },
    {
      name: "Ukrajina",
      rank: 27,

      groupName: "B",
      groupPosition: 3,
      groupGames: [], // opponent, score, points
      totalPoints: 0,
      goalDifference: 0,
      scoredGoals: 0,
      considedGoals: 0,
    },
  ],
  [
    {
      name: "Argentina",
      rank: 4,

      groupName: "C",
      groupPosition: 0,
      groupGames: [], // opponent, score, points
      totalPoints: 0,
      goalDifference: 0,
      scoredGoals: 0,
      considedGoals: 0,
    },
    {
      name: "Saudijska Arabija",
      rank: 49,

      groupName: "C",
      groupPosition: 1,
      groupGames: [], // opponent, score, points
      totalPoints: 0,
      goalDifference: 0,
      scoredGoals: 0,
      considedGoals: 0,
    },
    {
      name: "Meksiko",
      rank: 9,

      groupName: "C",
      groupPosition: 2,
      groupGames: [], // opponent, score, points
      totalPoints: 0,
      goalDifference: 0,
      scoredGoals: 0,
      considedGoals: 0,
    },
    {
      name: "Poljska",
      rank: 26,

      groupName: "C",
      groupPosition: 3,
      groupGames: [], // opponent, score, points
      totalPoints: 0,
      goalDifference: 0,
      scoredGoals: 0,
      considedGoals: 0,
    },
  ],
  [
    {
      name: "Francuska",
      rank: 3,

      groupName: "D",
      groupPosition: 0,
      groupGames: [], // opponent, score, points
      totalPoints: 0,
      goalDifference: 0,
      scoredGoals: 0,
      considedGoals: 0,
    },
    {
      name: "Peru",
      rank: 22,

      groupName: "D",
      groupPosition: 1,
      groupGames: [], // opponent, score, points
      totalPoints: 0,
      goalDifference: 0,
      scoredGoals: 0,
      considedGoals: 0,
    },
    {
      name: "Danska",
      rank: 11,

      groupName: "D",
      groupPosition: 2,
      groupGames: [], // opponent, score, points
      totalPoints: 0,
      goalDifference: 0,
      scoredGoals: 0,
      considedGoals: 0,
    },
    {
      name: "Tunis",
      rank: 35,

      groupName: "D",
      groupPosition: 3,
      groupGames: [], // opponent, score, points
      totalPoints: 0,
      goalDifference: 0,
      scoredGoals: 0,
      considedGoals: 0,
    },
  ],
  [
    {
      name: "Španija",
      rank: 7,

      groupName: "E",
      groupPosition: 0,
      groupGames: [], // opponent, score, points
      totalPoints: 0,
      goalDifference: 0,
      scoredGoals: 0,
      considedGoals: 0,
    },
    {
      name: "Novi Zeland",
      rank: 101,

      groupName: "E",
      groupPosition: 1,
      groupGames: [], // opponent, score, points
      totalPoints: 0,
      goalDifference: 0,
      scoredGoals: 0,
      considedGoals: 0,
    },
    {
      name: "Nemačka",
      rank: 12,

      groupName: "E",
      groupPosition: 2,
      groupGames: [], // opponent, score, points
      totalPoints: 0,
      goalDifference: 0,
      scoredGoals: 0,
      considedGoals: 0,
    },
    {
      name: "Japan",
      rank: 23,

      groupName: "E",
      groupPosition: 3,
      groupGames: [], // opponent, score, points
      totalPoints: 0,
      goalDifference: 0,
      scoredGoals: 0,
      considedGoals: 0,
    },
  ],
  [
    {
      name: "Belgija",
      rank: 2,

      groupName: "F",
      groupPosition: 0,
      groupGames: [], // opponent, score, points
      totalPoints: 0,
      goalDifference: 0,
      scoredGoals: 0,
      considedGoals: 0,
    },
    {
      name: "Kanada",
      rank: 38,

      groupName: "F",
      groupPosition: 1,
      groupGames: [], // opponent, score, points
      totalPoints: 0,
      goalDifference: 0,
      scoredGoals: 0,
      considedGoals: 0,
    },
    {
      name: "Maroko",
      rank: 24,

      groupName: "F",
      groupPosition: 2,
      groupGames: [], // opponent, score, points
      totalPoints: 0,
      goalDifference: 0,
      scoredGoals: 0,
      considedGoals: 0,
    },
    {
      name: "Hrvatska",
      rank: 16,

      groupName: "F",
      groupPosition: 3,
      groupGames: [], // opponent, score, points
      totalPoints: 0,
      goalDifference: 0,
      scoredGoals: 0,
      considedGoals: 0,
    },
  ],
  [
    {
      name: "Brazil",
      rank: 1,

      groupName: "G",
      groupPosition: 0,
      groupGames: [], // opponent, score, points
      totalPoints: 0,
      goalDifference: 0,
      scoredGoals: 0,
      considedGoals: 0,
    },
    {
      name: "Srbija",
      rank: 25,

      groupName: "G",
      groupPosition: 1,
      groupGames: [], // opponent, score, points
      totalPoints: 0,
      goalDifference: 0,
      scoredGoals: 0,
      considedGoals: 0,
    },
    {
      name: "Švajcarska",
      rank: 14,

      groupName: "G",
      groupPosition: 2,
      groupGames: [], // opponent, score, points
      totalPoints: 0,
      goalDifference: 0,
      scoredGoals: 0,
      considedGoals: 0,
    },
    {
      name: "Kamerun",
      rank: 37,

      groupName: "G",
      groupPosition: 3,
      groupGames: [], // opponent, score, points
      totalPoints: 0,
      goalDifference: 0,
      scoredGoals: 0,
      considedGoals: 0,
    },
  ],
  [
    {
      name: "Portugal",
      rank: 8,

      groupName: "H",
      groupPosition: 0,
      groupGames: [], // opponent, score, points
      totalPoints: 0,
      goalDifference: 0,
      scoredGoals: 0,
      considedGoals: 0,
    },
    {
      name: "Gana",
      rank: 60,

      groupName: "H",
      groupPosition: 1,
      groupGames: [], // opponent, score, points
      totalPoints: 0,
      goalDifference: 0,
      scoredGoals: 0,
      considedGoals: 0,
    },
    {
      name: "Urugvaj",
      rank: 13,

      groupName: "H",
      groupPosition: 2,
      groupGames: [], // opponent, score, points
      totalPoints: 0,
      goalDifference: 0,
      scoredGoals: 0,
      considedGoals: 0,
    },
    {
      name: "Južna Koreja",
      rank: 29,

      groupName: "H",
      groupPosition: 3,
      groupGames: [], // opponent, score, points
      totalPoints: 0,
      goalDifference: 0,
      scoredGoals: 0,
      considedGoals: 0,
    },
  ],
];

const main = () => {
  // Try other templates: Project -> New

  let groupWinners = [];
  let groupRunnerUps = [];

  //prva kolo group[0] vs group[1] && group[2] vs group[3]
  //drugo kolo group[0] vs group[2] && group[1] vs group[3]
  //trece kolo group[0] vs group[3] && group[1] vs group[2]
  const simulateGroupMatch = (group, homeTeam, awayTeam) => {
    //first fixtures
    let homeTeamGoals = Math.floor(Math.random() * 4);
    let awayTeamGoals = Math.floor(Math.random() * 4);
    let finalScore = [homeTeamGoals, awayTeamGoals];
    let finalScoreReversed = [awayTeamGoals, homeTeamGoals];

    let homeTeamPoints;
    let awayTeamPoints;

    if (homeTeamGoals > awayTeamGoals) {
      homeTeamPoints = 3;
      awayTeamPoints = 0;
    } else if (homeTeamGoals < awayTeamGoals) {
      homeTeamPoints = 0;
      awayTeamPoints = 3;
    } else {
      homeTeamPoints = 1;
      awayTeamPoints = 1;
    }

    console.log(
      group[homeTeam].name,
      `${homeTeamGoals}`,
      ":",
      `${awayTeamGoals}`,
      group[awayTeam].name,
      // `(${homeTeamGoals} - ${awayTeamGoals})`
    );

    //home team calculations
    group[homeTeam].groupGames.push({
      opponent: group[awayTeam].name,
      score: finalScore,
      points: homeTeamPoints,
    });

    group[homeTeam].totalPoints += homeTeamPoints;
    group[homeTeam].scoredGoals += finalScore[0];
    group[homeTeam].considedGoals += finalScore[1];
    group[homeTeam].goalDifference = group[homeTeam].scoredGoals - group[homeTeam].considedGoals;

    //away team calculations
    group[awayTeam].groupGames.push({
      opponent: group[homeTeam].name,
      score: finalScoreReversed,
      points: awayTeamPoints,
    });

    group[awayTeam].totalPoints += awayTeamPoints;
    group[awayTeam].scoredGoals += finalScoreReversed[0];
    group[awayTeam].considedGoals += finalScoreReversed[1];
    group[awayTeam].goalDifference = group[awayTeam].scoredGoals - group[awayTeam].considedGoals;
  };

  // 2. broj bodova && gol razlika (dati/primljeni)
  // 3. broj bodova && gol razlika (dati/primljeni) && broj postignutih golova
  // 4. broj bodova && gol razlika (dati/primljeni) && broj postignutih golova && međusobni duel
  const rankingCalculations = (group) => {
    let sorted = group.sort((a, b) => {
      if (a.totalPoints > b.totalPoints) {
        return -1;
      }
      if (a.totalPoints < b.totalPoints) {
        return 1;
      } 
      return 0;
    });
    console.log("Grupa ", group[0].groupName);
    console.log("Pobednik ", sorted[0].name);
    console.log(`Runner Up`, sorted[1].name);

    groupWinners.push({
      name: sorted[0].name,
      groupName: sorted[0].groupName,
      groupPosition: "1",
    });
    groupRunnerUps.push({
      name: sorted[1].name,
      groupName: sorted[1].groupName,
      groupPosition: "2",
    });
  };

  const simulateGroupGames = () => {
    for (let i = 0; i < groups.length; i++) {
      //first fixtures
      simulateGroupMatch(groups[i], 0, 1);
      simulateGroupMatch(groups[i], 2, 3);
      //first fixtures
      simulateGroupMatch(groups[i], 0, 2);
      simulateGroupMatch(groups[i], 1, 3);
      //first fixtures
      simulateGroupMatch(groups[i], 0, 3);
      simulateGroupMatch(groups[i], 1, 2);

      rankingCalculations(groups[i]);
    }
  };

  // simulateGroupMatch(2, 3);
  simulateGroupGames();

  let roundOf16Matches = [];

  let semifinalsMatches = [];
  let finalsMatches = [];

  const simulateKnockoutMatch = (game) => {
    //first fixtures
    let homeTeamGoals = Math.floor(Math.random() * 4);
    let awayTeamGoals = Math.floor(Math.random() * 4);
    let finalScore = [homeTeamGoals, awayTeamGoals];

    game.score = finalScore;

    console.log(
      `Round of 16: ${game.homeTeam.name} ${homeTeamGoals} - ${awayTeamGoals} ${game.awayTeam.name}`
    );

    if (homeTeamGoals < awayTeamGoals) {
      console.log("Pobednik", game.awayTeam.name);
      game.winner = game.awayTeam.name;
    } else if (
      homeTeamGoals > awayTeamGoals ||
      homeTeamGoals == awayTeamGoals
    ) {
      console.log("Pobednik", game.homeTeam.name);
      game.winner = game.homeTeam.name;
    }
  };

  const roundOf16Simulation = () => {
    let local = groupRunnerUps.reverse();
    for (let i = 0; i < groupWinners.length; i++) {
      roundOf16Matches.push({
        homeTeam: groupWinners[i],
        awayTeam: local[i],
        score: [],
        winner: "",
      });
    }

    for (let i = 0; i < roundOf16Matches.length; i++) {
      simulateKnockoutMatch(roundOf16Matches[i]);
    }

    quarterFinalsSimulation(roundOf16Matches);
  };

  let quarterFinalsMatches = [];

  let quarterFinalsSimulation = (roundOf16) => {
    const half = Math.ceil(roundOf16.length / 2);

    const firstHalf = roundOf16.slice(0, half);
    const secondHalf = roundOf16.slice(-half);

    for (let i = 0; i < firstHalf.length; i++) {
      quarterFinalsMatches.push({
        homeTeam: { name: firstHalf[i].winner },
        awayTeam: { name: secondHalf[i].winner },
        score: [],
        winner: ``,
      });
    }
    for (let i = 0; i < quarterFinalsMatches.length; i++) {
      simulateKnockoutMatch(quarterFinalsMatches[i]);
    }

    semiFinalsSimulation(quarterFinalsMatches);
  };

  let semiFinalsSimulation = (quarter) => {
    const half = Math.ceil(quarter.length / 2);

    const firstHalf = quarter.slice(0, half);
    const secondHalf = quarter.slice(-half);

    for (let i = 0; i < firstHalf.length; i++) {
      semifinalsMatches.push({
        homeTeam: { name: firstHalf[i].winner },
        awayTeam: { name: secondHalf[i].winner },
        score: [],
        winner: "",
      });
    }
    for (let i = 0; i < semifinalsMatches.length; i++) {
      simulateKnockoutMatch(semifinalsMatches[i]);
    }
    finalsSimulation(semifinalsMatches);
  };

  let finalsSimulation = (semi) => {
    const half = Math.ceil(semi.length / 2);

    const firstHalf = semi.slice(0, half);
    const secondHalf = semi.slice(-half);

    for (let i = 0; i < firstHalf.length; i++) {
      finalsMatches.push({
        homeTeam: { name: firstHalf[i].winner },
        awayTeam: { name: secondHalf[i].winner },
        score: [],
        winner: "",
      });
    }
    for (let i = 0; i < finalsMatches.length; i++) {
      simulateKnockoutMatch(finalsMatches[i]);
    }
  };

  roundOf16Simulation();

  // console.log("1/4", quarterFinalsMatches);
  console.log("Quarter Finals:");
  for (let i = 0; i < quarterFinalsMatches.length; i++) {
    if (quarterFinalsMatches[i].score[0] < quarterFinalsMatches[i].score[1]) {
      console.log(
        quarterFinalsMatches[i].homeTeam.name,
        quarterFinalsMatches[i].score[0],
        "-",
        quarterFinalsMatches[i].score[1],
        quarterFinalsMatches[i].awayTeam.name
      );
      console.log("Pobednik", quarterFinalsMatches[i].awayTeam.name);
    } else if (
      quarterFinalsMatches[i].score[0] > quarterFinalsMatches[i].score[1] ||
      quarterFinalsMatches[i].score[0] == quarterFinalsMatches[i].score[1]
    ) {
      console.log(
        quarterFinalsMatches[i].homeTeam.name,
        quarterFinalsMatches[i].score[0],
        "-",
        quarterFinalsMatches[i].score[1],
        quarterFinalsMatches[i].awayTeam.name
      );
      console.log("Pobednik", quarterFinalsMatches[i].homeTeam.name);
    }
  }

  console.log("Semi Finals: ");
  for (let i = 0; i < semifinalsMatches.length; i++) {
    if (semifinalsMatches[i].score[0] < semifinalsMatches[i].score[1]) {
      console.log(
        semifinalsMatches[i].homeTeam.name,
        semifinalsMatches[i].score[0],
        "-",
        semifinalsMatches[i].score[1],
        semifinalsMatches[i].awayTeam.name
      );
      console.log("Pobednik", quarterFinalsMatches[i].awayTeam.name);
    } else if (
      semifinalsMatches[i].score[0] > semifinalsMatches[i].score[1] ||
      semifinalsMatches[i].score[0] == semifinalsMatches[i].score[1]
    ) {
      console.log(
        semifinalsMatches[i].homeTeam.name,
        semifinalsMatches[i].score[0],
        "-",
        semifinalsMatches[i].score[1],
        semifinalsMatches[i].awayTeam.name
      );
      console.log("Pobednik", semifinalsMatches[i].homeTeam.name);
    }
  }

  console.log("GRAND FINALE: ");
  for (let i = 0; i < finalsMatches.length; i++) {
    if (finalsMatches[i].score[0] < finalsMatches[i].score[1]) {
      console.log(
        finalsMatches[i].homeTeam.name,
        finalsMatches[i].score[0],
        "-",
        finalsMatches[i].score[1],
        finalsMatches[i].awayTeam.name
      );
      console.log("Pobednik", quarterFinalsMatches[i].awayTeam.name);
    } else if (
      finalsMatches[i].score[0] > finalsMatches[i].score[1] ||
      finalsMatches[i].score[0] == finalsMatches[i].score[1]
    ) {
      console.log(
        finalsMatches[i].homeTeam.name,
        finalsMatches[i].score[0],
        "-",
        finalsMatches[i].score[1],
        finalsMatches[i].awayTeam.name
      );
      console.log(`POBEDNIK WORLD CUP-A 2022 GODINE JE ${finalsMatches[0].winner}`);
    }
  }
};

main();
