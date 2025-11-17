import express from 'express';
import 'dotenv/config';
import mongoDb from './config/database/mongoDb.js'
import route from './routes/index.js';

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware: Cho phép Express đọc JSON
app.use(express.json());

await mongoDb();

route(app);

app.get("/", (req, res) => {
    res.json({ message: "API is running..." });
});

app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`)
})
