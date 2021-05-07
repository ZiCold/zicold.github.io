var data;
var path = "Oddities_AllSources.xml";
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}
function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
}
function loadOddities() {
    $.get({
        url: path,
        type: "get",
        async: false,
        dataType: 'xml',
        success: function (data) {
            loadOdditiesXml(data);
        }
    });
}

function loadOdditiesXml(xmlData) {

    var count = $(xmlData).find('Oddity').length;
    var index = getRandomInt(count);
    //$("#load_here").append(index);

    var randomDevice = $(xmlData).find('Oddity').eq(index);
    data = randomDevice.text();
    //$("#load_here").append(data);

    var html = "";
    var description = randomDevice.find('Description').html();
    var source = randomDevice.find('Source').text();
    html += "<label>Description: " + description + "</label><br>";
    html += "<label>Source: " + source + "<label><br>";
    $("#load_here").html(html);

}

$(document).ready(function () {
    /*$("button").click(function () {
        $("#load_here").load(path);
    });*/
    /*$('button').click(function () {
        $.get(path, function (xmlData) {
            data = xmlData;
            console.log(data);
            $("#load_here").append(data);
        }, 'xml');
    });*/
    loadOddities();


    $("button").click(function () {
        var index = Math.random()



        $("#load_here").html(data);
    });

});