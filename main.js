const billInput = document.querySelector('#billInput')
const customInput = document.querySelector('#customInput')
const numPeopleInput = document.querySelector('#numPeopleInput')
const resetBtn = document.querySelector('#reset')
const selectTipBtns = document.querySelectorAll('.selectTipBtns button')

selectTipBtns.forEach((button) => {
    button.addEventListener('click', () => {


        // Grab value of the billInput and set to variable
        const billInputValue = billInput.value


        // Grab numPeopleInput value and set to variable
        const numPeopleInputValue = numPeopleInput.value


        // Get value of button clicked
        const tipPercent = Number(button.value)

        // Divide Bill buy number of people
        const dividedBill = billInputValue / numPeopleInputValue



        // Get tip amount per person
        const tipPerPerson = dividedBill * tipPercent

        
        if(billInputValue === '' || numPeopleInputValue === ''){
            // Add error message above bill
           document.getElementById('missingMessage').innerText = 'Make sure to add the Bill AND Number of People'

        //    Set tip back to 0 if strings empty
           document.getElementById('tipPerson').innerText = '$0.00'
        // Set total back to 0 if strings empty
           document.getElementById('totalPerson').innerText = '$0.00'
        } else{

             // Set innerText of tip amount per person
        document.getElementById('tipPerson').innerText = `$${tipPerPerson.toFixed(2)}`

        // Set innerText of the total bill per person to dividedBill
        document.getElementById('totalPerson').innerText = `$${dividedBill}`

        // Remove error message
        document.getElementById('missingMessage').innerText = ''

        }
    })
})

customInput.addEventListener('keydown', function(e){
    if(e.key === 'Enter'){

         // Grab value of the billInput and set to variable
         const billInputValue = Number(billInput.value)


         // Grab numPeopleInput value and set to variable
         const numPeopleInputValue = Number(numPeopleInput.value)
 
 
         // Get value of button clicked
         const tipNumber = Number(customInput.value)
 
 
         // Divide Bill buy number of people
         const dividedBill = billInputValue / numPeopleInputValue

        //  Bill input value + custom tip divided by numPeople
        const customTip =  tipNumber / numPeopleInputValue


        if(billInput.value === '' || numPeopleInput.value === ''){
             // Add error message above bill
           document.getElementById('missingMessage').innerText = 'Make sure to add the Bill AND Number of People'

           //    Set tip back to 0 if strings empty
              document.getElementById('tipPerson').innerText = '$0.00'
           // Set total back to 0 if strings empty
              document.getElementById('totalPerson').innerText = '$0.00'
        } else{
            document.getElementById('tipPerson').innerText = `$${customTip.toFixed(2)}`

            document.getElementById('totalPerson').innerText = `$${dividedBill}`
        }    



    }
})

resetBtn.addEventListener('click', () => {
    // Reset all items to empty string

    document.getElementById('tipPerson').innerHTML = '$0.00';

    document.getElementById('totalPerson').innerHTML = '$0.00';

    billInput.value = '';

    numPeopleInput.value = ''

    customInput.value = ''


})












