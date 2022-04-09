

let a = document.getElementById("Height");
let b= document.getElementById("submit_text");
b.addEventListener("click", function()
{
    var H_min = a.value / 8 ;
    var H_max = a.value / 7 ;

    var chair_height_min = ( 1/3 * H_min ) + 2 * H_min ;
    var chair_height_max = ( 1/3 * H_max ) + 2 * H_max ;
    
    var desk_height_max = 3*H_max;
    var desk_height_min = 3*H_min;

    var monitor_height_min = 2 / 3 * H_min + 4 * H_min ;
    var monitor_height_max = 2 / 3 * H_max + 4 * H_max ;

    document.getElementById("first.header").innerHTML = `Chair Height : ${chair_height_min} to ${chair_height_max}`;
})