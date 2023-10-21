import app from "./server";

const PORT = "3001";


app.listen(PORT, () => {
    console.log(`server listening on http://localhost:${PORT}`);
});

