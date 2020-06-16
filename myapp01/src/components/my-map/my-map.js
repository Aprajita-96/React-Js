import React, { Component } from 'react';


let names2 = [
                   {"id" : 11, "val" : "cream"},
                   {"id" : 21, "val" : "age"},
                   {"id" : 31, "val" : "cold"}
                ];


class Mymap extends Component{
    render(){
        return(
        <ul>
            {
                names2.map(function (obj, idx) {
                    //key is mandatory to be provided to each list element , why?
                    //when a record is updated , and the updated record in respect to the key will be rendered. 
                    //"key"(*) internally calls render and updated only those records.
                    return (
                    <li key={idx} > 
                    {obj.id} : Ice {obj.val}
                    </li>
                    );
                })
            }
        </ul>
        )
    }
}

export default Mymap ;