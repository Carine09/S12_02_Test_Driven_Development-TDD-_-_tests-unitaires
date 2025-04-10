const sayHello = (name) => {
    return "Bonjour, " + name + " !";
}

const nameIsString = (name) => {
    if (typeof name === "string") {
        return true
    }
    return false
    
}

const nameExists = (name) => {
    if (name !== null) {
        return true
    }
    return false
}

const nameIsNotTooLong = (name) => {
    if (name.length > 0 && name.length < 26) {
        return true
    }
    return false
}
module.exports = { sayHello, nameIsString, nameExists, nameIsNotTooLong }