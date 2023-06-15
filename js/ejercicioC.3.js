$("#container").append("<table></table>");
let colores = ["red", "green", "blue", "beige", "dark", "brown", "coral", "aqua", "grey"];

for (let index = 0; index < 3; index++) {
    $("table").append("<tr></tr>");
    for (let index2 = 0; index2 < 3; index2++) {
        $("tr:last").append("<td id ="+ (index2+1+(index*3)) +"></td>")
    }
}

// for (let index = 0; index < 3; index++) {
//     $("tr").append("<td></td>");
// }

for (let index = 1; index < 10; index++) {
    $("#"+index).css("backgroundColor", colores[index-1]);
}

// $("td").css("backgroundColor", "red")

// $("td")[0].css("backgroundColor", "red")

// $("td#1").css("backgroundColor", "red");