const express = require('express')
const mysql = require('mysql2')

const port = 3000
const app = express()
const config = {
    host: process.env.DB_HOST ?? 'localhost',
    port: parseInt(process.env.DB_PORT ?? '3306') ,
    user: process.env.DB_USER ?? 'root',
    password: process.env.DB_PASSWORD ?? 'root',
    database: process.env.DB_DATABASE ?? 'nodedb',
}


app.get('/', async (req, res) => {
    const dbConnection = mysql.createConnection(config);
    dbConnection.query(`INSERT INTO people (name) VALUES ('Joaozinho')`)
    const result = await dbConnection.promise().query('SELECT * FROM people')
    dbConnection.end()

    const tableRows = result[0]
        .map((row) => `<pre><h4>   ${row.name}</h4></pre>`)
        .join('')

    const response = `
        <h1>Full Cycle Rocks!!!</h1>
        <h2>People:</h2>
        ${tableRows}
    `

    res.send(response)
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})
