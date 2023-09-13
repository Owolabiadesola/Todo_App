import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";

const EditTodoForm = ({ editTodo, task }) => {
  const [value, setValue] = useState(task.task);
  const handleSubmit = (e) => {
    e.preventDefault();
    editTodo(value, task.id);
    setValue("");
  };
  return (
    <div>
      <Container fluid>
        <Row>
          <Col xs={12} sm={12} md={12} lg={12}>
            <form className="todoform" onSubmit={handleSubmit}>
              <input
                value={value}
                type="text"
                className="todoinput"
                placeholder="Update Task"
                onChange={(e) => setValue(e.target.value)}
              />
              <button type="submit" className="todobtn mx-1 mt-3">
                Update Task
              </button>
            </form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default EditTodoForm;
