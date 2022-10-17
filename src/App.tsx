import React from "react";
import Button from "@mui/material/Button";

const App = () => {
    return (
        <Button
            variant="contained"
            onClick={() => console.log("Hello, world!")}
        >
            Hello, world!
        </Button>
    );
};

export default App;
