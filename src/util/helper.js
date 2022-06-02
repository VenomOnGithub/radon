const printDate = function(){

    const newDate = new Date();

    newDate.getFullYear() + "-" + (newDate.getMonth()+1) + "-" + newDate.getDate();

    console.log(newDate);
}

const printmonth = function(){

    const d = new Date();
    let month = d.getMonth();

    console.log(month);
}

const getbatchinfo = 

module.exports.printDate = printDate
module.exports.printmonth = printmonth