type User = {
    name: string,
        gender: string,
        isAvailable: boolean,
        mobileNo: number
}

//we can use this type user every where behalf of this object type defines

function createUser(name: string, gender: string,mobileNo: number): {name: string, gender: string, isAvailable: boolean,mobileNo: number}{
    return {
        name: name,
        gender: gender,
        isAvailable: true,
        mobileNo: mobileNo
    }
}

const user1 = createUser("Soham", "Male",1234567890);

const userDetails = {
    name: "Dhruv",
    gender: "Male",
    isAvailable: false,
    mobileNo: 9876543210,
    email:"sohampatel@gmail.com"
}

// const user2 = createUser({userDetails})


console.log(user1);

export {}
