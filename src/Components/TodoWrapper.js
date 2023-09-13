import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import TodoForm from "./TodoForm";
import Todo from "./Todo";
import { v4 as uuidv4 } from "uuid";
import EditTodoForm from "./EditTodoForm";
uuidv4();

const TodoWrapper = () => {
  const [todos, setTodos] = useState([{}]);
  const addTodo = (todo) => {
    setTodos([
      ...todos,
      { id: uuidv4(), task: todo, completed: false, isEditing: false },
    ]);
    console.log(todos);
  };
  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };
  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };
  const editTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo
      )
    );
  };
  const editTask = (task, id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, task, isEditing: !todo.isEditing } : todo
      )
    );
  };
  return (
    <Container fluid>
      <Row>
        <Col xs={12} sm={12} md={12} lg={12} className="todoWrapper">
          <div className="bodyy">
            <h1 className="header">Get Things Done!</h1>
            <TodoForm addTodo={addTodo} />
            {todos.map((todo, index) =>
              todo.isEditing ? (
                <EditTodoForm editTodo={editTask} task={todo} />
              ) : (
                <Todo
                  task={todo}
                  key={index}
                  toggleComplete={toggleComplete}
                  deleteTodo={deleteTodo}
                  editTodo={editTodo}
                />
              )
            )}
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default TodoWrapper;
