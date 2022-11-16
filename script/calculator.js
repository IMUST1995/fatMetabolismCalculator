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
    DailyCaloricDeficitHolder.innerHTML = `${DailyCaloricDeficit.toFixed(2)} Maximum daily calorie deficit from fat`
}