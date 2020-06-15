
    // the [] on left will destructure.
    let  [firstRec,secondRec] = ["Blr", "Del", "Mum"]
    console.log(firstRec,secondRec)

    //output Blr Del

    //if u want to print only last one 
    
    let  [,,thrid] = ["Blr", "Del", "Mum"]
    console.log(thrid)

    //destructuring a object

    let sandwich =  {
        bread: "honey_oat",
        veg: "carrot_vada",
        cheese: "amul",
        toppings: ["lettuce", "tomato", "mustard"]
      };
      //destructure the object 
      //************create the variable names bread, veg from sandwhich
      let {bread, veg} = sandwich ;
      console.log(bread, veg) ;
  
      bread = "garlic"  ;  // overwritten.
      veg = "soya" ;
  
      console.log(bread, veg) ;
      console.log(sandwich.bread, sandwich.veg);


      //**************one more example of object destructuring
      let myBoxA = {
        heightA: 12,
        widthA: 14,
        metaData: [{"unit": "inch"}, {"price": 1000, "currency" : "INR"}]
    };
    let { heightA, widthA, metaData } = myBoxA;
    
    console.log(heightA, widthA, metaData[1]["price"],metaData[0] );


    //*********combining the destructured object : ajargan
    let name = "Nilgiris"
    let elevation = 9738

    let mtn = { name, elevation }
    console.log(mtn)

    //***************Another exapmple get the function inside the object
    let namee = "Nilgiris"
    let elevationn = 9770
    let print = function() {
      console.log(`Mt.:  ${this.namee} is ${this.elevationn} feet tall`)
    }
    
    let mtnn = { namee, elevationn, print }
    console.log(mtnn) ;
    mtnn.print()



    
    //*************Example of destructuring aray
    let flavours = ["choco", "vanilla", "orange", "coffee","Aprajita"]
    // let [first,,,]=flavours
    // let [ ...rest] = flavours

    let [ first,,...rest] = flavours


// ... three dots are called spread operator. (the balance that is remaining is dumped here).
// the first one choco is already used and hence only the balance is given
    console.log(rest.join(", "))


    //*************Another example */
    let peaks = ["Tallac", "Ralston", "Rose"]
    let canyons = ["Ward", "Blackwood"]
    let place = [...peaks, ...canyons]

    console.log(place.join(', '))
    console.log(place)
    //output -------- [1,2,3,4,5,6,7]
    // if no ... operator is used then
    //let place=[peaks,canyons]
    // [[1,2,3],[4,5,6,7]]

