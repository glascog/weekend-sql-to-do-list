Client View
    []HTML
        [x]source in jquery, js files
        [x]link css
        [x]task input field
             [x]submit task button
        [x]task table
           [x]table headers
                [x]task, completed, delete
            []table row - is this all created in client.js?
                []task
                []completed task check-box(is this a button?)
                []delete task button
Client Logic
    []Handlers
        []listener for task submit button
        []listener for completed check-box
        []listener for delete button
    []Functions
        []submitTask
            []sends new task as object to server
            []ajax POST request
            []renders new task to DOM (getTask)
            []clears task input field
        []completeTask
            []getter for completed task id
            []ajax PUT to update completed task in server
            []retrieve and render new status to dom(getTask)
        []deleteTask
            []getter for id of deleted task
            []ajax DELETE request to server
            []retrieve and render latest version of task table(getTask)
        []getTask
            []jquery to empty old version of task table
            []ajax GET request to get task data from server
            []for loop to append task data to dom
                []task data id setter

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
        []router.post
            [x]declare req.body variables
            []declare query params
            []declare query text
            []pool query with text and params
        []router.put
            []declare var to get the id from params
            []declare new completed statius
            []declare query params
            []declare query text that targets task id and updates completed status
            []pool query with text and params
        []router.get 
            [x]declare query text to select tasks from table
            [x]pool query with text 
        []router.delete
            []declare variable to get id from params
            []declare querytext to delete task in DB
            []pool query with text and task id

Database
    [x]create new db weekend-to-do-app
        [x]create table "to-dos"
            [x]insert mock data
    []create database.sql
        []copy paste create table queries
        
       