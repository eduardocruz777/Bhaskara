function calcular() {
    let a = Number(window.prompt('Qual o valor de a?'))
    let b = Number(window.prompt('Qual o valor de b?'))
    let c = Number(window.prompt('Qual o valor de c?'))
    var bsk = (b ** 2) - (4 * a * c)
    res.innerHTML = '<p><strong><h2>Resolvendo Bhaskara</h2></strong></P>'
    res.innerHTML += `<p>A equação atual é <strong>${a}x² + ${b}x + ${c} = 0</strong></p>`
    res.innerHTML += `<p> O cálculo realizado será <strong>Δ = ${b ** 2} - 4 . ${a} . ${c}</strong>`
    res.innerHTML += `<p>O valor calculado foi <mark id="cor"><strong>Δ = ${bsk}</strong></mark></p>`
}