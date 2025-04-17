class loginPage{

    userNameInput(){
    return  'input[name="username"]'
    }
    passwordInput(){
    
    return 'input[type="password"]'
    }
    
    loginBtn(){
    
        return 'button[type="submit"]'
    }
    
    loginErrorMessage (){
    
        return 'Invalid credentials'
    
    
    }
    
}
    
    const login = new loginPage()
    
    export default login 