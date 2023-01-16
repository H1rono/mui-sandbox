import { useState } from "react";
import { Box, Button, Typography } from "@mui/material";

const Counter = () => {
    const [count, setCount] = useState(0);
    return (
        <Box>
            <Typography variant="h2">Counter</Typography>
            <Typography>Count is: {count}</Typography>
            <Button variant="outlined" onClick={() => setCount(count + 1)}>
                +
            </Button>
            <Button variant="outlined" onClick={() => setCount(count - 1)}>
                -
            </Button>
            <Button variant="outlined" onClick={() => setCount(0)}>
                reset
            </Button>
        </Box>
    );
};

export default Counter;
