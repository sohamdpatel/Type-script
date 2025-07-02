interface User{
    name: string,
    age: number,
    isUser: boolean
}

interface Admin{
    name: string,
    age: number,
}

function isAdminAccount(account: User | Admin){
    if("isUser" in account){// this is checking a isUser is available in accountor not
        console.log("this is user");
    }
        console.log("this is admin");

}

isAdminAccount({name: "Soham", age: 22, isUser: true}) // this is log "this is user"
isAdminAccount({name: "You", age: 23}) // this is log "ths is amdin"