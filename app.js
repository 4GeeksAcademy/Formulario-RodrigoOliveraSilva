const hello = ()=> {
    console.log("hello world")
}





function validarFormulario (event){
    const ErrorAlert = document.getElementById("ErrorMessage")
    let formStatus = false
    
    event.preventDefault()
    // Obtenemos elementos html
    const CardInput = document.getElementById("inputCard")
    const CvcInput = document.getElementById("inputCvc")
    const AmountInput = document.getElementById("inputAmount")
    const FirstNameInput = document.getElementById("inputFirstName")
    const LastNameInput = document.getElementById("inputLastName")
    const CityInput = document.getElementById("inputCity")
    const StateInput = document.getElementById("inputStateSelect")
    const PostalCodeInput = document.getElementById("inputCodePostal")
    const message = document.getElementById("textArea")
    
    
    // obtenemos sus valores
    const valueCard = CardInput.value
    const valueCVC = CvcInput.value
    const valueAmount = AmountInput.value
    const valueName = FirstNameInput.value
    const valueLastNam = LastNameInput.value
    const valueCity = CityInput.value
    const valueStatePostal = PostalCodeInput.value
    const valueMessage = message.value
    const valorStateInput = StateInput.value
    // valor del select



    if(valueCard === "") {
        formStatus = false
        CardInput.classList.add("bg-danger","bg-opacity-25") 
    } else if(valueCard.length !== 16) {
        formStatus = false
        CardInput.classList.add("bg-danger","bg-opacity-25") 
    } else {
        CardInput.classList.remove("bg-danger","bg-opacity-25") 
        formStatus = true
    }

    if(valueCVC === "") {
        formStatus = false
        CvcInput.classList.add("bg-danger","bg-opacity-25") 
    } else if(valueCVC.length === 3 || valueCVC.length === 4) {
        console.log("si pasa")
        CvcInput.classList.remove("bg-danger","bg-opacity-25") 
        formStatus = true
    } else {
        console.log("no pasa")
        CvcInput.classList.add("bg-danger","bg-opacity-25") 
        formStatus = false
    }

    if(valueAmount === "") {
        formStatus = false
        AmountInput.classList.add("bg-danger","bg-opacity-25") 
    } else {
        AmountInput.classList.remove("bg-danger","bg-opacity-25") 
        formStatus = true

    }
    if(valueName === "") {
        formStatus = false
        FirstNameInput.classList.add("bg-danger","bg-opacity-25") 
    } else {
        FirstNameInput.classList.remove("bg-danger","bg-opacity-25") 
        formStatus = true

    }
    if(valueLastNam === "") {
        formStatus = false
        LastNameInput.classList.add("bg-danger","bg-opacity-25") 
    } else {
        LastNameInput.classList.remove("bg-danger","bg-opacity-25") 
        formStatus = true

    }
    if(valueCity === "") {
        formStatus = false
        CityInput.classList.add("bg-danger","bg-opacity-25") 
    } else {
        CityInput.classList.remove("bg-danger","bg-opacity-25") 
        formStatus = true

    }
    if(valorStateInput === "Pick a state") {
        formStatus = false
        StateInput.classList.add("bg-danger","bg-opacity-25") 
    } else {
        StateInput.classList.remove("bg-danger","bg-opacity-25") 
        formStatus = true

    }
    if(valueStatePostal === "") {
        formStatus = false
        PostalCodeInput.classList.add("bg-danger","bg-opacity-25") 
    } else {
        PostalCodeInput.classList.remove("bg-danger","bg-opacity-25") 
        formStatus = true

    }
    if(valueMessage === "") {
        console.log("vacio")
        formStatus = false
        message.classList.add("bg-danger","bg-opacity-25") 
    } else {
        console.log("no vacio")

        message.classList.remove("bg-danger","bg-opacity-25") 
        formStatus = true

    }
    // validacion final del formulario, si todo esta bien 
    if(formStatus === true) {
        ErrorAlert.classList.add("d-none")
        console.log("Formulario apto para enviar")
    } else {
        ErrorAlert.classList.remove("d-none")
        console.log("Formulario no apto para enviar")


    }

    console.log(formStatus)
    


}