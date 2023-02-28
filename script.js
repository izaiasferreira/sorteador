var random = (min, max) => Math.floor(Math.random() * (max - min)) + min;
function countDown(count) {
    // if (count < 0) {
    //     clearInterval(countDown)
    // } else {

    // }

    //
}
function openModal() {
    var modal = document.getElementById('modal')
    modal.classList.value = modal.classList.value === 'modal-disable' ? 'modal' : 'modal-disable'
    if (modal.classList.value) {
        document.getElementById('result').innerHTML = `<div>PREPARAR</div>`
    }
}
function sort() {

    var names = document.getElementById('names').value
    var resultDiv = document.getElementById('result')
    var array = names.split(`\n`)
    array = array.filter(names => names !== '')
    if (array.length > 0) {
        openModal()
        var result = array[random(0, array.length - 1)]
        var count = 5
        var interval = setInterval(() => {
            if (count < 0) {

                clearInterval(interval);
            } else {
                if (count === 0) {
                    clearInterval(interval);
                    resultDiv.innerHTML =`<div class='congrats'>PARABÉNS</div><div class='name'>${result.toUpperCase()}</div>` 
                } else {
                    resultDiv.innerHTML = `<div class='count'>${count}</div>`
                    count--
                }
            }
        }, 1000);

    }

}