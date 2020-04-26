function displayHighScores() {

    var showHighScores = JSON.parse(localStorage.getItem("scores"));
    var tableBodyElement = $(".score-body");
    if (showHighScores === null) {
        $(".score-body").text("");
    } else {
        showHighScores.forEach(function (score) {
            // adds local storage info to the table element
            var tableRowElement = $("<tr>");
            var scoreTd = $("<td>").text(score.score);
            var nameTd = $("<td>").text(score.name);
            tableRowElement.append(nameTd);
            tableRowElement.append(scoreTd);
            tableBodyElement.append(tableRowElement);
        });
    }
}

displayHighScores();

$(".clear-score").on("click", function () {
    localStorage.clear();
    displayHighScores();
});