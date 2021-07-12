let myName = 'Manish';


let age = 21;
//  ------------------------------
// named exports
//  ------------------------------
// can be done many times
export { age };

let country = 'India'
export {country}


// If you want to named export things together
/*

export {age, country}

*/



//  ------------------------------
//    DEFAULT EXPORTS 
// ---------------------------------
// default export can be done just once
export default myName; 