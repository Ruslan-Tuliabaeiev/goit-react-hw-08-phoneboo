
const getIsLoggedIn = state => state.auth.getIsLoggedIn
const getToken = state => state.auth.getToken
const getUserName=state=>state.auth.user.name

export const authSelectors = {
    getIsLoggedIn,
    getUserName,
    getToken
}





// const getIsLoggedIn = state => state.auth.isLoggedIn;

// const getUserName = state => state.auth.user.name;


// const getToken = state => state.auth.token; 

// export const authSelectors = {
//     getIsLoggedIn,
//     getUserName,
   
//     getToken,
// }


