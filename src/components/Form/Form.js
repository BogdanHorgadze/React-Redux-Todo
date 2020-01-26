import React from "react";
import classes from "./Form.module.css";
import {connect} from "react-redux";
import {reciveValue} from "../../store/actions/action";

 class Form extends React.Component{
     render(){
    return(
        <>
        <input onChange={event => this.props.onValue(event.target.value)}className={classes.Form}type="text"/>
        </>
    )
     }
}

function mapStateToProps(state) {
    return{
        inputValue : state.form.inputValue
    }
}

function mapDispatchToProps(dispatch) {
    return{
        onValue : (val)=> dispatch(reciveValue(val))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Form)