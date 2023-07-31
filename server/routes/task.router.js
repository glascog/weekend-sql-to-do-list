const express = require('express');
const router = express.Router();
// Connect to DB
const pool = require('../modules/pool.js')

// GET route for getting tasks, with id, from DB
router.get('/', (req, res) => {
    // to use with query params
    // const idToGet = [req.params.id]
     // query to select all tasks from to-dos table
    const queryText =  `
    SELECT * FROM "to-dos" ORDER BY "id" DESC;`

    // use pool to connect with DB
    pool.query(queryText) //idToGet
        .then((result) => {
            console.log(result)
            res.send(result.rows)
        })
        .catch((error) => {
            console.log("Error on GET '/tasks'", error )
            res.sendStatus(500)
        })
})

// POST route for inserting tasks into DB
router.post('/', (req, res) => {
    console.log('req.body:', req.body)

    const task = req.body.task
    const isCompleted = req.body.isCompleted

    const queryText = `INSERT INTO "to-dos" ("task", "isCompleted")
                        VALUES($1, $2);`
    const queryParams = [task, isCompleted]

    // using pool to connect with DB
    pool.query(queryText, queryParams)
        .then((result) => {
            console.log('pool query is working')
            res.sendStatus(201);
        })
        .catch((error) => {
            console.log(error)
            res.sendStatus(500)
        })
})

// PUT route to update completed status of task with id in DB
router.put('/updatestatus/:id', (req, res) => {
    console.log("Req.params:", req.params)

    // get id from params
    let taskId = req.params.id
    // new status will be 
    let isCompleted = false
    let newStatus = !isCompleted;
    let queryParams = [newStatus, taskId]

    // query should target task id and update completed status 
    let queryText = `UPDATE "to-dos" SET "isCompleted" = $1 WHERE "id" = $2;`
    console.log(`Success connecting /updatestatus. taskId = ${taskId}, newStatus = ${newStatus}`)

    pool.query(queryText, queryParams)
        .then((resposne) => {
            res.sendStatus(200)
        })
        .catch((error) => {
            console.log(error)
            res.sendStatus(500)
        })
})

// DELETE route to delete task by taking in param for id
router.delete('/deletetask/:id', (req, res) => {
    let taskToDeleteId = req.params.id

    let queryText = 'DELETE FROM "to-dos" WHERE id = $1;'

    pool.query(queryText, [taskToDeleteId])
        .then((result) => {
            console.log("Task Deleted, id:", taskToDeleteId)
            res.sendStatus(200)
        })
        .catch((error) => {
            console.log('Error on DELETE:', error)
            res.sendStatus(500)
        })
})


module.exports = router;