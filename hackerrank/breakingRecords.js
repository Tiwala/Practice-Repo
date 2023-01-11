// Maria plays college basketball and wants to go pro. Each season she maintains a record of her play.
// She tabulates the number of times she breaks her season record for most points and least points in a game.
// Points scored in the first game establish her record for the season, and she begins counting from there.

function breakingRecords(scores) {
    // Write your code here
    let maxRecord = 0;
    let minRecord = 0;
    let max = scores[0];
    let min = scores[0];

    // Self-explanatory
    for (let score of scores) {
        if (score > max) {
            maxRecord++;
            max = score;
        }
        if (score < min) {
            minRecord++
            min = score;
        }
    }
    return [maxRecord, minRecord]
}