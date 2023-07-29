Client View
    []HTML
        []task input field
             []submit task button
        []task table
           []table headers
                []task, completed, delete
            []table row
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
    []server.js
        []require express
        []require bodyparser
        []require(?)pg
        []set up body parser
        []set up static assets
        []set up task router
        []start express
    []task.router.js
            []require express
            []set up express router
            []require pool for DB connection
            []module exports router
        []router.post
            []declare req.body variables
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
            []declare query text to select tasks from table
            []pool query with text 
        []router.delete
            []declare variable to get id from params
            []declare querytext to delete task in DB
            []pool query with text and task id

Database
    []create new db weekend-to-do-app
        []create table "to-dos"
            []insert mock data
    []create database.sql
        []copy paste create table queries
        
       