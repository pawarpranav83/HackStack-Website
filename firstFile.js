let b = document.getElementById("submit_text");
let x= document.getElementById("m_values");
    
b.addEventListener("click", function () {
    console.log(x.value)
    let a = document.getElementById("m_height");
    let d = document.getElementById("heading_x_1");
    let e = document.getElementById("heading_x_2");
    let f = document.getElementById("heading_x_3");

    let c = a.value;

    var H_min = c / 8;
    var H_max = c / 7;

    var chair_height_min =  2 * H_min;
    var chair_height_max =  2 * H_max;

    var desk_height_max = 3 * H_max;
    var desk_height_min = 3 * H_min;

    var monitor_height_min = 2 / 3 * H_min + 4 * H_min;
    var monitor_height_max = 2 / 3 * H_max + 4 * H_max;

    if(x.value == "cm")
    {
    d.innerHTML = "Chair Height : " + chair_height_min.toFixed() + " cm to " + chair_height_max.toFixed() +" cm";
    e.innerHTML = "Desk Height : " + desk_height_min.toFixed() + " cm to " + desk_height_max.toFixed() + " cm";
    f.innerHTML = "Monitor Height : " + monitor_height_max.toFixed() + " cm";
    }
    
    else
    {
        d.innerHTML = "Chair Height : " + chair_height_min.toFixed(1) + " ft to " + chair_height_max.toFixed(1) +" ft";
        e.innerHTML = "Desk Height : " + desk_height_min.toFixed(1) + " ft to " + desk_height_max.toFixed(1) + " ft";
        f.innerHTML = "Monitor Height : " + monitor_height_min.toFixed(1) + " ft";
    }
})

