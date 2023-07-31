Client View
    []HTML
        [x]source in jquery, js files
        [x]link css
        [x]task input field
             [x]submit task button
        [x]task table
           [x]table headers
                [x]task, completed, delete
            <!-- []table row - is this all created in client.js? - YES
                []task
                []completed task check-box(is this a button?)
                []delete task button -->
Client Logic
    []Handlers
        [x]listener for task submit button
        [x]listener for completed check-box
        [x]listener for delete button
    []Functions
        [x]addTask
            [x]sends new task as object to server
            [x]ajax POST request
            [x]renders new task to DOM (getTask)
            [x]clears task input field
        [x]completeTask
            [x]getter for completed task id
            [x]ajax PUT to update completed task in server
            [x]retrieve and render new status to dom(getTask)
        [x]deleteTask
            [x]getter for id of deleted task
            [x]ajax DELETE request to server
            [x]retrieve and render latest version of task table(getTask)
        [x]getTask
            [x]jquery to empty old version of task table
            [x]ajax GET request to get task data from server
            [x]for loop to append task data to dom
                [x]task data id setter

Server Logic
    [x]server.js
        [x]require express
        [x]require bodyparser
        []require(?)pg
        [x]set up body parser
        [x]set up static assets
        [x]set up task router
        [x]start express
    []task.router.js
            [x]require express
            [x]set up express router
            [x]require pool for DB connection
            [x]module exports router
        [x]router.post
            [x]declare req.body variables
            [x]declare query params
            [x]declare query text
            [x]pool query with text and params
        []router.put
            [x]declare var to get the id from params
            [x]declare new completed status
            [x]declare query params
            [x]declare query text that targets task id and updates completed status
            [x]pool query with text and params
        [x]router.get 
            [x]declare query text to select tasks from table
            [x]pool query with text 
        []router.delete
            [x]declare variable to get id from params
            [x]declare querytext to delete task in DB
            [x]pool query with text and task id

Database
    [x]create new db weekend-to-do-app
        [x]create table "to-dos"
            [x]insert mock data
    [x]create database.sql
        [x]copy paste create table queries
        
       