
//names is a class, print is function
let  names = {
    cities: ["Blr","Del","Mum","Pune"],
    print: function(delay=1000) {
        console.log(this.cities.join(","))
        
        //here the this keyword will try to bind to global object
    //       setTimeout(function() {
    //       console.log(this.cities.join(","))
    //     }, delay)

    //   }
      
      //the fat arrow will allow to bind the this keyword to the next level of object and not the global object
      setTimeout(()=> {
        console.log(this.cities.join(","))
        console.log("same timer")
          //if u use "this" here it will not refer to city
        // console.log(this.cities.join(","))
      }, delay)

    }
  }

  names.print()


  