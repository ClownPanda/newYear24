let btn = document.querySelector('button');
let p = document.querySelector('p');




btn.addEventListener("click", function(){
    let p = document.querySelector('p');
    p.innerText=`Happy new year 2024`;
    colorChange("red",250);
    colorChange("green",500);
    colorChange("yellow",750);
    colorChange("blue",1000);
    colorChange("black",1250);
    colorChange("grey",1500);
    colorChange("purple",1750);
    colorChange("pink",2000);
    colorChange("red",2250);
    colorChange("torquise",2500);
});



function colorChange(color,delay)
{
    setTimeout(()=>{
        let p = document.querySelector('p');
        p.style.color=color;
    },delay);

 let p= document.querySelector("p");

}
