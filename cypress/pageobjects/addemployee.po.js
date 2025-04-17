class addemployeePage{

addemployeeInput(){

return 'Add Employee'
}

firstNameInput(){

return 'input[name="firstName"]'

}

lastNameInput(){

return 'input[name="lastName"]'

}

submitBtn(){

return 'button[type="submit"]'

}

successMessageInput(){

return 'Successfully Saved'


}

}

const addemployee = new addemployeePage ()

export default addemployee
