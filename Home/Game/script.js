var row, col, i, j, table, gx, gy, rx, ry;
var score = 0;

var timeMinut;

let timerInput = document.getElementById("time");
let buttonRun = document.getElementById("button");
let timerShow = document.getElementById("timer");

$("#go").click(function () {

    var audio = new Audio('song/zvuk-dlya-zastavki-logo-sound-3-30940.mp3');
    audio.play();
    table = '';

    for (i = 0; i < 5; i++) {

        table += `<tr>`;

        for (j = 0; j < 5; j++) {
            table += `<td row="${i}" col="${j}"></td>`;
        }

        table += `</tr>`;

    }

    rx = Math.floor(Math.random() * 5);
    ry = Math.floor(Math.random() * 5);

    gx = Math.floor(Math.random() * 5);
    gy = Math.floor(Math.random() * 5);

    $("#table").html(table).ready(function () {
        $("[row=" + gx + "][col=" + gy + "]").addClass('gold');
        $("[row=" + rx + "][col=" + ry + "]").addClass('person');
    });

    setTimeout(function () {

        $('#table').css('display', 'none');
        $('#go').css('display', 'none');
        $('.score').css('left', '50%');

        alert(score);
    }, 10000);

});

$(window).keydown(function (e) {

    var y = Number($(".person").attr('row'));
    var x = Number($(".person").attr('col'));

    $(".person").removeClass("person");

    if (e.keyCode === 37) {

        if (x != 0) {
            $(`[row=${y}][col=${x - 1}]`).addClass("person");
            var audio = new Audio('song/zvuk-udara4.mp3');
            audio.play();



        }

        else {
            $(`[row=${y}][col=${x}]`).addClass("person");
        }

    }

    if (e.keyCode === 39) {

        if (x != 4) {
            $(`[row=${y}][col=${x + 1}]`).addClass("person");
            var audio = new Audio('song/zvuk-udara4.mp3');
            audio.play();

        }

        else {
            $(`[row=${y}][col=${x}]`).addClass("person");
        }

    }

    if (e.keyCode === 38) {

        if (y != 0) {
            $(`[row=${y - 1}][col=${x}]`).addClass("person");
            var audio = new Audio('song/zvuk-udara4.mp3');
            audio.play();

        }
        else {
            $(`[row=${y}][col=${x}]`).addClass("person");
        }

    }

    if (e.keyCode === 40) {

        if (y != 4) {
            $(`[row=${y + 1}][col=${x}]`).addClass("person");
            var audio = new Audio('song/zvuk-udara4.mp3');
            audio.play();

        }

        else {
            $(`[row=${y}][col=${x}]`).addClass("person");
        }

    }

    if (x == gy && y == gx) {

        $("#table").html(table).ready(function () {

            $(`[row=${y}][col=${x}]`).addClass("person");

            gx = Math.floor(Math.random() * 5);
            gy = Math.floor(Math.random() * 5);

            $("[row=" + gx + "][col=" + gy + "]").addClass('gold');

            var audio = new Audio('song/money.mp3');
            audio.play();

        });

        score++;

    };

    $(".score").html(`<p>${score}</p>`);

});