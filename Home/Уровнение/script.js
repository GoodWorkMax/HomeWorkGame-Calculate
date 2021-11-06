var x, y, i;

$('#batton').click(function () {

    x = Number($("#num1").val());
    y = Number($("#num2").val());


    for (i = 1; i < y; i++) {

        x += x;

    }


    $('.result').html(`<p>${x}</p>`);

});













