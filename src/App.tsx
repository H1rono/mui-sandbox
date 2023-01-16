import { Box, Typography } from "@mui/material";
import Counter from "./Counter";
import { Todos } from "./Todos";

const App = () => {
    return (
        <Box>
            <Typography variant="h1">Hello, Material UI!</Typography>
            <Counter />
            <Todos />
        </Box>
    );
};

export default App;
