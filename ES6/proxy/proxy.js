 //proxy continued
 const gameSettings = {};
 const gameSettingsProxy = new Proxy(gameSettings, {
    get:(o, property)=>{
        console.log(o);
        console.log(property);
        return property in o ? o[property] : "devanshi";
    },
    set: (o, property, value)=>{
        if(property === "difficulty" && !["easy","medium", "hard"].includes(value.toLowerCase())) {

            throw new Error("Difficulty is invalid!");
        }
        o[property] = value;
},
has:(o,property) => {
    if(property==="difficulty") {
        return false;
    }
    return property in o;
}
 })
gameSettingsProxy.difficulty = "easy"
 console.log(gameSettingsProxy.difficulty) //undefined