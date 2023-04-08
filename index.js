/*function BMI() {
    

var w = document.getElementById("w").value;
var h = document.getElementById("h").value;

var bmi = w/(h/100*h/100);

document.getElementById("resultant").innerHTML="Your BMI is" + bmi;

}*/

/*let button = document.getElementById(`btn`);

button.addEventListener(`click`,() => {
    const height = parseInt(document.getElementById(`height`).value);
    const weight = parseInt(document.getElementById(`weight`).value);
    const result = document.getElementById(`output`);
    let height_status=false, weight_status=false;

    if (height === `` || isNaN(height) || (height <= 0)) {
        document.getElementById(`height_error`).innerHTML = `Please provide a valid height`;

    } else{
        document.getElementById(`height_error`).innerHTML = ``;
        height_status = true;
    }

    if (weight === `` || isNaN(weight) || (weight < = 0))  {
        document.getElementById(`weight_error`).innerHTML = `Please provide a valid weight`;

    } else{
        document.getElementById(`weight_error`).innerHTML =``;
        weight_status = true;
    }
    if (height_status && weight_status) {
        const bmi = (weight/((height*height)/10000)).toFixed(2);
        
        if (bmi <18.6) {
            result.innerHTML = `Under weight : `+ bmi;
        }else if (bmi > = 18.6 && bmi < 24.9) {
            result.innerHTML = `Normal :` + bmi;
        }else {
            result.innerHTML = ` Over weight : ` + bmi;
        }
        else{
            alert(`the form has errors`);
            result.innerHTML = ``;
        }
    }
});*/


const calculatebmi=()=>{
    const height = Number(document.getElementById(`height`).value);
    const weight = Number(document.getElementById(`weight`).value);
    const result = document.getElementById(`output`);

    const bmi = Math.floor(height & weight);

    output.innerHTML = `
    <h3>Your bmi is  ${(weight/((height*height)/10000))};
    `
}
(weight/((height*height)/10000))