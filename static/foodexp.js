function predictExp(){
    const salary = document.getElementById("salary").value;
    console.log(salary)
    let foodExp = salary * 0.4851 + 147.4;
    document.getElementById("foodExp").innerText = "Predicted food expenditure: " + foodExp;
}