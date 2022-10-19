import React from "react";
import { useState } from "react";
import {
    Box,
    Button,
    List,
    ListItemText,
    TextField,
    Typography,
} from "@mui/material";

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
    const updateTodo = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        setTodo({ description: e.target.value });
    };
    const callback = () => {
        addTodo(todoState);
        setTodo({ description: "" });
    };
    return (
        <Box
            sx={{
                margin: 2,
            }}
        >
            <TextField
                type="text"
                label="description"
                variant="outlined"
                required
                onChange={updateTodo}
            />
            <Button variant="contained" onClick={callback}>
                Add
            </Button>
        </Box>
    );
};

export const Todos = () => {
    const [todos, setModel] = useState<TodoListProps>({ models: [] });
    const addTodo = (todo: AddTodoState) => {
        setModel({
            models: [...todos.models, { description: todo.description }],
        });
    };
    return (
        <Box>
            <Typography variant="h2">Todos</Typography>
            <AddTodoForm addTodo={addTodo} />
            <TodoList models={todos.models} />
        </Box>
    );
};
