import React from 'react';

 function Titlestyle({name, title}) {
    return (
        <div className="row">
           <div className=" col-10 mx-auto my-2 text-center text-title">
               <h1 className="text-capitalize font-wight-bold text-White" >  <strong className="text-White">{name} </strong> {title}</h1>
           
           </div>

        </div>
    )
}
export default Titlestyle;