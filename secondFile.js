let b = document.getElementById("submit_text");
let x= document.getElementById("m_values");
    
b.addEventListener("click", function () {
    console.log(x.value)
    let a = document.getElementById("m_height");
    let d = document.getElementById("heading_y_1");
    let e = document.getElementById("heading_y_2");

    let c = a.value;

    var H_min = c / 8;
    var H_max = c / 7.5;

    var desk_height_max = 5 * H_max;
    var desk_height_min = 5 * H_min;

    var monitor_height_min = 8 * H_max - 1 / 3 * H_max ;
    var monitor_height_max = 8 * H_min - 1 / 3 * H_min ;

    if(x.value == "cm")
    {
    d.innerHTML = "Desk Height : " + desk_height_min.toFixed() + " cm to " + desk_height_max.toFixed() + " cm";
    e.innerHTML = "Monitor Height : "  + monitor_height_max.toFixed() + " cm";
    }
    
    else
    {
        d.innerHTML = "Desk Height : " + desk_height_min.toFixed(1) + " ft to " + desk_height_max.toFixed(1) + " ft";
        e.innerHTML = "Monitor Height : " +monitor_height_max.toFixed(1) + " ft";
    }
})