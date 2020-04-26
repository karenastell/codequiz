var showHighScores = JSON.parse(localStorage.getItem("scores"));
var tableBodyElement = $(".score-body");

showHighScores.forEach(function (score) {

    var tableRowElement = $("<tr>");
    var scoreTd = $("<td>").text(score.score);
    var nameTd = $("<td>").text(score.name);
    tableRowElement.append(nameTd);
    tableRowElement.append(scoreTd);
    tableBodyElement.append(tableRowElement);
});


$(".clear-score").on("click", function () {
    localStorage.clear();
    tableBodyElement.remove();
});