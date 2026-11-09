export function getResult(quiz, chosenAnswers) {
    const totals = {};
    for (const answer of chosenAnswers) {
        for (const [result, points] of Object.entries(answer.scores)) {
            if (totals[result] === undefined) {
                totals[result] = 0;
            }
            totals[result] = totals[result] + points;
        }
    }

    // const pairs = Object.entries(totals);
    // const sorted = pairs.sort((a, b) => b[1] - a[1])
    // const [resultName, resultScore] = sorted[0];


    let totalPoints = 0;
    for (const points of Object.values(totals)) {
        totalPoints = totalPoints + points;
    }

    const ranking = [];
    for (const name of Object.keys(quiz.results)) {
        let points;
        if (totals[name] === undefined) {
            points = 0;
        }
        else {
            points = totals[name];
        }

        ranking.push({
            name: name,
            points: points,
            percent: Math.round((points / totalPoints) * 100),
        });
    }

    ranking.sort((a, b) => b.points - a.points);


    return {name: ranking[0].name, percent: ranking[0].percent, ranking: ranking};
}