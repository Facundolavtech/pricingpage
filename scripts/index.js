const switchPlan = document.getElementById('switch'),
    changeSwitch = document.querySelector('.b'),
    plan1 = document.getElementById('plan1'),
    plan2 = document.getElementById('plan2'),
    plan3 = document.getElementById('plan3'),
    monthlytext = document.getElementById('monthlytext'),
    annualtext = document.getElementById('annualtext')

    let Valorplan1 = 19.99
    let Valorplan2 = 24.99
    let Valorplan3 = 39.99


switchPlan.addEventListener('click', () => {
    if(changeSwitch.classList.contains('monthly')){
        changeSwitch.classList.replace('monthly', 'annually')
        annualtext.classList.replace('unactive', 'active')
        monthlytext.classList.replace('active', 'unactive')
        plan1.textContent = `$${(Valorplan1*10+0.09).toFixed(2)}`
        plan2.textContent = `$${(Valorplan2*10+0.09).toFixed(2)}`
        plan3.textContent = `$${(Valorplan3*10+0.09).toFixed(2)}`
    } else{
        changeSwitch.classList.replace('annually', 'monthly')
        annualtext.classList.replace('active', 'unactive')
        monthlytext.classList.replace('unactive', 'active')
        plan1.textContent = `$${Valorplan1}`
        plan2.textContent = `$${Valorplan2}`
        plan3.textContent = `$${Valorplan3}`
    }
})