
document.querySelector("#choose").addEventListener("change", calcularOrcamento)
document.querySelector("#insurance").addEventListener("change", calcularOrcamento)
document.querySelector("#extend_yes").addEventListener("change", calcularOrcamento)
document.querySelector("#extend_no").addEventListener("change", calcularOrcamento)
document.querySelector("#period").addEventListener("change", calcularOrcamento)

function calcularOrcamento() {

    let amount = 0;

    if(choose.value === '0'){
        amount += 10000
    }

    if(choose.value === '1'){
        amount += 1000
    }

    if(choose.value === '2'){
        amount += 5000
    }

    if(insurance.checked){
        amount += 500
    }

    if(extend_yes.checked){
        amount += 500
    }
    
    let totalPeriod = amount * period.value
    amount += totalPeriod 
    label_prazo.innerHTML = `Period (${period.value} week(s))`

    output.innerHTML = "US$ " + amount.toFixed(2)
}
