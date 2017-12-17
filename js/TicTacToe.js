var cells = [];
var tbl = document.getElementById("ttt_table");
var start_btn = document.getElementById("start_btn");
var player = 1;
var game_started = false;
var played_moves = 0;
var gameover = true;

function refresh() {
    for (i = 0; i < cells.length; i++) {
        $('#cell' + i).html(cells[i]);
    }
}

function getval(cel) {
    var cid = cel.id;
    var id = parseInt(cid.substr(cid.length - 1));
    if (cells[id] == "") {
        if (player == 1) {
            cells[id] = "X";
            player = 0;
        } else {
            cells[id] = "O";
            player = 1;
        }
        if (!gameover) {
            refresh();
            played_moves++;
            check_game_over();
        }
    } else {
        console.log(cells[id]);
    }
}

function cell_clicked() {
    for (var i = 0; i < tbl.rows.length; i++) {
        for (var j = 0; j < tbl.rows[i].cells.length; j++)
            tbl.rows[i].cells[j].onclick = function() { getval(this); };
    }
}

function check_game_over() {
    var winX = "XXX";
    var winO = "OOO";
    var sol1 = cells[0] + cells[1] + cells[2];
    var sol2 = cells[3] + cells[4] + cells[5];
    var sol3 = cells[6] + cells[7] + cells[8];
    var sol4 = cells[0] + cells[3] + cells[6];
    var sol5 = cells[1] + cells[4] + cells[7];
    var sol6 = cells[2] + cells[5] + cells[8];
    var sol7 = cells[0] + cells[4] + cells[8];
    var sol8 = cells[2] + cells[4] + cells[6];

    if (sol1 == winX || sol2 == winX || sol3 == winX || sol4 == winX || sol5 == winX || sol6 == winX || sol7 == winX || sol8 == winX) {
        gameover = true;
        $('#score').html("Player X won");
    }

    if (sol1 == winO || sol2 == winO || sol3 == winO || sol4 == winO || sol5 == winO || sol6 == winO || sol7 == winO || sol8 == winO) {
        gameover = true;
        $('#score').html("Player O won");
    }

    if (played_moves == 9 && !gameover) {
        gameover = true;
        $('#score').html("Draw");
    }


}

function start_game() {
    cells = ["", "", "", "", "", "", "", "", ""];
    gameover = false;
    refresh();
    $('#score').html("");
    played_moves = 0;

}