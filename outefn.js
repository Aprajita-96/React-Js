function outer() {
    function inner() {
       console.log("JS");
    }
inner();
}
outer() ;

//how to see the console.log?????, the least complex change
let outerrr= ()=>()=> console.log("Js");

outerrr();


//nightmare.....
(() => (() => console.log("JS"))())()

