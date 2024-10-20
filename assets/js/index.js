
calculateBtn.addEventListener("click",hesapla);

function hesapla() {
    
    let totalPrice = Number(totalBill.value);
    let totalPercent = Number(getPercent.value);
    let totalPeople = Number(peopleCount.value);

    if( totalPrice  && totalPeople > 0) {

        let tipForEachPerson = (((totalPrice * totalPercent)/100)/totalPeople);

        let priceForEachPerson =( (totalPrice/totalPeople)+ tipForEachPerson);
        
        tipByPerson.innerHTML = `$${tipForEachPerson.toFixed(2)}`;

        totalByPerson.innerHTML = "$"+ ((totalPrice+(totalPrice*(totalPercent/100)))/totalPeople)
        
    } else {
        alert("Lütfen geçerli bir değer giriniz..")
    }

}

resetBtn.addEventListener("click" , reset);


function reset() {
    tipByPerson.innerHTML = "$0.00";
    totalByPerson.innerHTML = "$0.00";
    
    totalBill.value = "0";
    getPercent.value = "0";
    peopleCount.value = "0";
}