import React, {Component} from 'react';
import { Row, Col } from 'react-bootstrap';
// Layout components.
import Main from '../../layouts/main';
import List from './components/List';
import {DragDropContext} from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';


class KanbanApp extends Component {
  constructor() {
    super();
  }
  render(){
    return(
      <Main>
        <h1>Kanban App</h1>
        <Row>

          <Col sm={6} >
            <h2>Todo</h2>
            <List status='Todo' />
          </Col>

          <Col sm={6} >
            <h2>Done</h2>
            <List status='Done' />
          </Col>

        </Row>

      </Main>
    )
  }
}
export default DragDropContext(HTML5Backend)(KanbanApp);
