import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { BsPencilSquare } from "react-icons/bs";
import { FaTrash } from "react-icons/fa";

const Todo = ({ task, toggleComplete, deleteTodo, editTodo }) => {
  return (
    <Container fluid>
      <Row>
        <Col xs={12} sm={12} md={12} lg={12}>
          <div className="Todo">
            <p
              id="text"
              onClick={() => toggleComplete(task.id)}
              className={`${task.completed ? `completed` : ""}`}
            >
              {" "}
              {task.task}
            </p>
            <div className="icon">
              <BsPencilSquare onClick={() => editTodo(task.id)} />
              <FaTrash onClick={() => deleteTodo(task.id)} />
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Todo;
