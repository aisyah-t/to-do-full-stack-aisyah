import request from "superagent"
import { gettasks } from "../apis/api"

export const dostuff  = () => {
    return {
        type: "TEST",
        data: "hello"
    }
}
export const addmore  = () => {
    return {
        type: "ADDTO",
        data: "goodbye"
    }
}
export const gettodos  = (data) => {
    return {
        type: "GETTASKS",
        data: data
    }
}
export const deletetask  = (data) => {
    return {
        type: "DELETETASK",
        data: data
    }
}
export const addtodo  = (data) => {
    
    return {
        type: "ADDTODO",
        data: data
    }

}
export const edittodo = (data) => {
    return {
        type: "EDITTODO",
        data: data
    }
}
export const fetchtodos  = () => {
    
    return (dispatch) => {
        gettasks()
        .then(data => {
            dispatch(gettodos(data))
        })

    }
    
}

