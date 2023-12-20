const app = require("./app")
require("dotenv").config()

const port = process.env.SERVER_PORT || 8000

app.listen(port, () => console.log(`Server running on port ${port}`));
