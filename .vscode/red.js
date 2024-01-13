var input = document.getElementById('input')
var input_1 = document.getElementById('circle_1')
var input_2 = document.getElementById('circle_2')
var result = document.getElementById('result')

 input_1.addEventListener("input", celsius)
 input_2.addEventListener("input", fahrenheit)

   function celsius(){
        var num_1 =Number(input.value)
    var value_1 = (num_1 * 9/5) + 32;
result.textContent = `Your Temp is ${value_1.toFixed(2) } ℃`
    }

function fahrenheit(){
var num_2 = Number(input.value)
var value_2 = (num_2 - 32) * 5/9;
result.textContent = `Your Temp is ${value_2.toFixed(2) } ℉`
}