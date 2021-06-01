module.exports.functions =['сложи', 'умножь', 'раздели', 'вычти']

module.exports.calc =(name,a,b)=>{
    if(name == "сложи") {
        return a + b
    } else if(name == "вычти"){
        return a - b
    } else if(name == "умножь"){
        return a * b
    } else if(name == "раздели"){
        return a / b
    } else {
        return "нет такой операции"
    }
}