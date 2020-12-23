let currentDate = new Date();
module.exports.date = currentDate;
 
module.exports.getMessage = function(name){
    let hour = currentDate.getHours();
    if(hour >= 5 && hour < 12)
        return " Good morning, " + name;
    else if(hour >= 12 && hour<18)
        return "Good day, " + name;
    else if (hour >=18 && hour<=24) 
        return "Good evening, " + name;
    else 
    return "Good night, " + name;
}
