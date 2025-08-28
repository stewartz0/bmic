var weight_input;
var height_input;
var calc_button;
var result_label;

window.onload = () => {
    console.log("Window has loaded! Unlocking spinlock..")

    result_label = document.getElementById("result")
    weight_input = document.getElementById("weight")
    height_input = document.getElementById("height")
    calc_button = document.getElementById("calculateBtn")

    calc_button.onclick = () => {
        let height = height_input.value
        let weight = weight_input.value

        result_label.innerHTML = "Tu BMI es " + (weight / (height * height))
    }
}