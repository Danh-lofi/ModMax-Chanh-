const run = document.querySelector('.run')
const number = document.querySelector('.number')
run.addEventListener('click', () => {

    const a = document.getElementById('a').value
    const b = document.getElementById('b').value
    const c = document.getElementById('c').value
    number.innerHTML = `${a}^${b}mod${c}`
    modmax(a, b, c)
    const nhiphan = document.querySelector('.nhiphan')
    nhiphan.innerHTML = `${b}(2) = `

})
const table = document.getElementById('table');

function modmax(a, b, c, d) {
    let r
    let myArray = []
    while (b != 0) {
        r = b % 2
        b = Math.trunc(b / 2)
        myArray.unshift(r)
    }
    d = +myArray.join('')
    const hesomuoi = document.querySelector('.hesomuoi')
    hesomuoi.innerHTML = `${d}(10)`
    let idx = 0
    const bmode = document.getElementById('c').value
    console.log(bmode);
    let p1, p2, p3, p4
    p1 = 1
    while (idx <= myArray.length - 1) {
        const tdmod = document.createElement('tr');
        p1 = p1 * p1
        p2 = p1 % bmode
        if (myArray[idx] != 0) {
            p3 = p2 * a
        } else {
            p3 = 'none'
        }
        if (p3 != 'none') {
            p4 = p3 % c
        } else {
            p4 = p2 % c
        }
        tdmod.innerHTML = `
        <td>${myArray[idx]}</td>
        <td>${p1}</td>
        <td>${p2}</td>
        <td>${p3}</td>
        <td>${p4}</td>
        `
        p1 = p4
        idx++
        table.appendChild(tdmod)
    }
}