import React,{Component} from 'react';
import './App.css';
import Layout from './hoc/Layout/Layout'
import Todo from './containers/Todo/Todo'

class App extends Component {
  render(){
    return(
        <Layout>
            <Todo/>  
        </Layout>
    )
  }
}

export default App;
