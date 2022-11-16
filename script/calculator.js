const calculatePounsOfFatbtn = document.getElementById('calculatePounsOfFatbtn')
calculatePounsOfFatbtn.addEventListener('click', e => {
    e.preventDefault()
    const weight = document.getElementById('weight').value
    const bodyFatPercentage = document.getElementById('bodyFatPercentage').value
    const lbsOfFat = weight * (bodyFatPercentage / 100)
    const lbsOfFatDisplay = document.getElementById('lbsOfFatDisplay')
    lbsOfFatDisplay.innerHTML = `${lbsOfFat.toFixed(2)} lbs`
    if(weight >= 1 && bodyFatPercentage >= 1){
        maximunDailyCaloricDeficit(lbsOfFat)
    }
    else{
        alert('numbers too low')
    }
})

function maximunDailyCaloricDeficit(lbsOfFat){
    const DailyCaloricDeficit = lbsOfFat * 31
    console.log(DailyCaloricDeficit)
    const DailyCaloricDeficitHolder = document.getElementById('DailyCaloricDeficitHolder')
    DailyCaloricDeficitHolder.innerHTML = `${DailyCaloricDeficit.toFixed(0)} Maximum daily calorie deficit from fat`
    const maxAmountOfFatWeekly = (DailyCaloricDeficit * 7) / 3500
    DailyCaloricDeficitHolder.innerHTML += `<h4>${maxAmountOfFatWeekly.toFixed(2)} lbs of fat / week</h4>`
    const maxAmountOfFatInKg = maxAmountOfFatWeekly * 0.453592
    DailyCaloricDeficitHolder.innerHTML += `<h4>${maxAmountOfFatInKg.toFixed(2)} kg of fat / week</h4>`
}