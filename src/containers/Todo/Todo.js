import React,{Component} from 'react'
import classes from './Todo.module.css'
import Button from '../../components/Button/Button'
import Form from '../../components/Form/Form'
import TodoCreator from '../TodoCreator/TodoCreator'

class Todo extends Component {
    render(){
        return (
            <div className={classes.Todo}>
                <Form/>
                <Button/>
                <TodoCreator/>
            </div>
        )
    }
}

export default Todo