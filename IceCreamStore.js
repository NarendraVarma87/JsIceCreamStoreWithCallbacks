let stocks = {
    Fruits : ["apple" , "banana" , "pineapple" , "grapes" , "strawberry" , "cherrys"],
    Liquid : ["milk" , "ice"],
    holder : ["cone" , "cup" , "stick"],
    toppings : ["chocolate" , "peanuts" , "dryfruits"]
}

let order = (fruit_Name,holder_name,topping_item,call_production) =>{
 
    setTimeout(()=>{
        console.log(`${stocks.Fruits[fruit_Name]} was selected`);
        call_production();
        setTimeout(()=>{
            console.log(`cutting the ${stocks.Fruits[fruit_Name]} into slices`);
        },1000);
        setTimeout(()=>{
            console.log(`Adding ${stocks.Liquid[0]} into cutted pieces`);
            console.log("Starting the machine");
        },1000);
       setTimeout(()=>{
        console.log(`selecting container ${stocks.holder[holder_name]}`);
       },2000);
       setTimeout(()=>{
        console.log(`Topping item with ${stocks.toppings[topping_item]}`);
        console.log("serving your order to your table :) ");
       },3000);
    },2000)
}
let production = () => {
    console.log("production started...");

}
//order(4,1,2,production);
console.log("**********************");
order(1,1,2,production);
