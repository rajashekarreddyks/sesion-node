const batchName = "shekar"

let printName = function() {
    console.log('my name is ', batchName)
    let ts = Date.now();
          
    let date_ob = new Date(ts);
    let date = date_ob.getDate();
    let month = date_ob.getMonth() + 1;
    let year = date_ob.getFullYear();
    
    // prints date & time in YYYY-MM-DD format
    console.log(year + "-" + month + "-" + date);
}



module.exports.name = batchName
module.exports.printName = printName