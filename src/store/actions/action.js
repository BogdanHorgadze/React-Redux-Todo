import {RECIVE_VALUE,ADD_VALUE,DELETE} from "./actionType";

export function reciveValue(val) {
    return {
        type : RECIVE_VALUE,
        val,
    }
}

export function addValue(value) {
    return {
        type : ADD_VALUE,
        value,
    }
}

export function del(index) {
    return {
        type : DELETE,
        index,
    }
}