function getScoresFromLS() {
    scores = localStorage.getItem("scores");
    if (scores) {
        return JSON.parse(scores);
    } else {
        return [];
    }
}
