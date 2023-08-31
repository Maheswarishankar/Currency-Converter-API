
// fetch api...................................................
let select = document.querySelectorAll('.currency')
let btn = document.getElementById('btn')
let input = document.getElementById('input')
fetch('https://api.frankfurter.app/currencies')
    .then(res => res.json())
    .then(res => displayDropDown(res))
    
//display the dropdown item.............................................
function displayDropDown(res) {
    //console.log(Object.entries(res)[2][0])
    let curr = Object.entries(res)
    for (let i = 0; i < curr.length; i++) {
        console.log(curr[i][0])
        let opt = `<option value="${curr[i][0]}">${curr[i][0]}</option>`
        select[0].innerHTML += opt
        select[1].innerHTML += opt
    }
}
//convert button......................................................
btn.addEventListener('click', () => {
    let from_curr = select[0].value
    let to_curr = select[1].value
    let inputVal = input.value
    if (from_curr === to_curr)
        alert("Choose different currencies")
    else
        convert(from_curr, to_curr, inputVal)
});

function convert(from_curr, to_curr, inputVal) {
    const host = 'api.frankfurter.app';
    fetch(`https://${host}/latest?amount=${inputVal}&from=${from_curr}&to=${to_curr}`)
        .then(resp => resp.json())
        .then((data) => {
            document.getElementById('result').value = Object.values(data.rates)[0]
        });

}