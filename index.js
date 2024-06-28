function rolldice(){

const numofdice = document.getElementById("numbers").value;
const resultvalue = document.getElementById("resultvalue");
const resultimages = document.getElementById("resultimages");
const values =[];
const images =[];

for(let i=0;i < numofdice; i++){
    const value = Math.floor((Math.random()*6)+1);
    console.log(value);
    values.push(value);
    images.push(`<img src="images/dice${value}.png">`);
}

resultvalue.textContent=`Dice: ${values.join(", ")}`;
resultimages.innerHTML=images.join(" ")


}