import React from "react";
import classes from "./Button.module.css";
import {connect} from "react-redux";
import {addValue} from "../../store/actions/action";

class Button extends React.Component{
    render(){
        return(
            <button onClick={() => this.props.addValue(this.props.value)}className={classes.Button}>send</button>
        )
    }
}
function mapStateToProps(state){
    return{
        value : state.form.inputValue
    }
}
function mapDispatchToProps(dispatch) {
    return{
        addValue : (value) => dispatch(addValue(value))
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Button)
