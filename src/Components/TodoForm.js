import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";

const TodoForm = ({ addTodo }) => {
  const [value, setValue] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(value);
    setValue("");
  };
  return (
    <Container fluid>
      <Row>
        <Col xs={12} sm={12} md={12} lg={12}>
          <form className="todoform mt-2" onSubmit={handleSubmit}>
            <input
              value={value}
              type="text"
              className="todoinput"
              placeholder="What is the task today?"
              onChange={(e) => setValue(e.target.value)}
            />
            <button type="submit" className="todobtn mx-1">
              Add Task
            </button>
          </form>
        </Col>
      </Row>
    </Container>
  );
};

export default TodoForm;
