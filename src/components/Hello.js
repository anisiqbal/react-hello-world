import React from 'react'

const hello  = () => {
//     return(
//         <div>
//             <h1>Hello Muhamma Anis</h1>
//         </div>
//     );


    return React.createElement(
        'div' , null ,
         React.createElement('h1', null ,'Hello Muhammad Anis' )
    )
    }
    export default hello ;
