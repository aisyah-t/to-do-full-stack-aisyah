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
    console.log("running add todo ", data)
    return {
        type: "ADDTODO",
        data: data
    }

}
export const fetchtodos  = () => {
    console.log("running fetch todo ")
    return (dispatch) => {
        gettasks()
        .then(data => {
            dispatch(gettodos(data))
        })

    }
    
}

