import React from "react";
import { useState } from "react";
import { Box, Button, List, ListItemText, TextField } from "@mui/material";

export type TodoProps = {
    description: string;
};

export const Todo = ({ description }: TodoProps) => {
    return <ListItemText primary={`${description}`} />;
};

export type TodoListProps = {
    models: TodoProps[];
};

export const TodoList = ({ models }: TodoListProps) => {
    return (
        <List>
            {models.map((e) => (
                <Todo description={e.description} />
            ))}
        </List>
    );
};

export type AddTodoState = {
    description: string;
};

export type AddTodoProps = {
    addTodo: (todo: AddTodoState) => void;
};

export const AddTodoForm = ({ addTodo }: AddTodoProps) => {
    const [todoState, setTodo] = useState({ description: "" });
    return (
        <Box>
            <TextField
                type="text"
                label="description"
                required
                onChange={(e) => {
                    console.log(e.target.value);
                    setTodo({ description: e.target.value || "" });
                }}
            />
            <Button variant="contained" onClick={() => addTodo(todoState)}>
                Add
            </Button>
        </Box>
    );
};

export const Todos = () => {
    const [todos, setModel] = useState<TodoListProps>({ models: [] });
    return (
        <Box>
            <AddTodoForm
                addTodo={(todo) =>
                    setModel({
                        models: [
                            ...todos.models,
                            { description: todo.description },
                        ],
                    })
                }
            />
            <TodoList models={todos.models} />
        </Box>
    );
};
