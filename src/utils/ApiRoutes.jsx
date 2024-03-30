 

const ApiRoutes = {
    SINGIN:{
        path:'/user/login',
        authenticate:false
    },
    SING_UP:{
        path:'/user/createUser',
        authenticate:false
    },
    GET_USERS:{
        path:'/user',
        authenticate:false
    }
}

export default ApiRoutes 