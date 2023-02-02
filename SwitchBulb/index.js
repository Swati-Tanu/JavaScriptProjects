let btn = document.getElementById("toggle");
    let bulb = document.getElementById("bulb");
    btn.addEventListener("click",toggleBulb)

    function toggleBulb(event){
        if(btn.textContent.includes("On")){
        bulb.src = "Bulb_On.jpg";
        btn.textContent = "Turn Off";
        }else{
        bulb.src = "Bulb_Off.jpg";
        btn.textContent = "Turn On";
        }
    }