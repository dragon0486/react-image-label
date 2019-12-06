import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import dataSetList from './components/DataSetList'
import TaskList from './components/TaskList'
import TaskDetail from './components/TaskDetail'
import Test from './components/test'


export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = { token: null }
  }
  componentDidMount() {

  }
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={dataSetList} />
          <Route exact path="/taskList/:dataSetId" component={TaskList} />
          <Route exact path="/taskDetail/:dataSetId/:taskId" component={TaskDetail} />
        </Switch>
      </Router>
    )
  }
}