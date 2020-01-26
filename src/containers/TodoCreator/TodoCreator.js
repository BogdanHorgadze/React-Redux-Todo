import React from "react";
import classes from "./TodoCreator.module.css";
import {connect} from "react-redux";
import {del} from '../../store/actions/action'

class TodoCreator extends React.Component {
    renderTodo(){
   return this.props.todo.map((item,index) => {
        return(
            <li onDoubleClick={()=> this.props.delete(index)} key={index}>{item}</li>
        )
    })
}
    render(){
        return(
            <ul className={classes.Todo}>
                {this.renderTodo()}
            </ul>
        )
    }
}

function mapStateToProps(state) {
    console.log(state)
    return{
        todo : state.form.todo
    }
}

function mapDispatchToProps(dispatch) {
    return{
        delete : index => dispatch(del(index))
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(TodoCreator)