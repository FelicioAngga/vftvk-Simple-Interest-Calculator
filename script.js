function compute()
{
    p = document.getElementById("percentage").innerHTML;
    rate = document.getElementById("rate").value;
    amount = document.getElementById("amount").value;
    if(amount == ""){
        alert("Please fill the amount");
        return;
    }
    year = document.getElementById("year").value
    result = amount * rate / 100 * year;

    document.getElementById("result").innerHTML = "If you deposit " + amount + "\nat an interest rate of " + p + "\nYou will receive an amount of " + parseInt(result)
}

function calculate() {
   var val = document.getElementById("rate").value
   document.getElementById('percentage').innerHTML = val + "%"
}
        