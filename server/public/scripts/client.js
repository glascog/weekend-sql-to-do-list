$(document).ready(onReady);

function onReady() {
// render updated task list to dom upon loading
getTasks();

    //------ Handlers go here
$('#add').on('click', addTask);
$('#taskTableBody').on('click','.chk-Complete', completeTask);
$('#taskTableBody').on('click', '.btn-Delete', deleteTask);
}
let tasks;

//------ Functions go here

// DELETE request to delete tasks from the dom and DB
function deleteTask() {
    console.log('You clicked on', $(this));
    const taskId = $(this).parent().parent().data('id')
    console.log('in deleteTask: id is:', taskId)

    // ajax request to use route 'tasks/deletetask/:id'
    $.ajax({
        method: 'DELETE',
        url: `/tasks/deletetask/${taskId}`
    })
    .then((response) => {
        console.log(`Deleted task id: ${taskId}`)
        getTasks()
    })

}

// PUT request to update completion status of task
function completeTask() {
    const taskId = $(this).parent().parent().data('id')
    console.log('will update completion status with id:', taskId)
    

    // ajax request to use route 'tasks/updatestatus/:id'
    $.ajax({
        method: 'PUT',
        url: `tasks/updatestatus/${taskId}`
    })
    .then((response) => {
        console.log("Success for id:", taskId)
        getTasks()
    })
    .catch((error) => {
        console.log(error)
    })
}

// GET request to retrieve data from server
function getTasks() {
    console.log('in getTasks')
    $.ajax({
        type: 'GET',
        url: '/tasks'
    })
    .then((response) => {
        console.log(response);
        tasks = response;
        renderTasks(tasks);
    })
    .catch((error) => {
        console.log('error in GET', error);
    })
} // end getTasks

// -----------------

// POST request for adding a task
function addTask() {
    let newTask = {
        task: $('#taskIn').val(),
        isCompleted: false
    }
    $.ajax({
        type: 'POST',
        url: '/tasks',
        data: newTask
    })
    .then((response) => {
        $('#taskIn').val('')
        getTasks()
    })
    .catch((error) =>{
        console.log('error in POST:', error)
    })
}

// ----------------

function renderTasks() {
    $('#taskTableBody').empty();    
        for (let task of tasks){
        // for (let i = 0; i < tasks.length; i += 1) {
        //     let task = tasks[i];
        let newRow = $(`
            <tr>
                <td>${task.task}</td>
                <td><input type="checkbox" class="chk-Complete">
                </checkbox>
                </td>
                <td>
                    <button class="btn-Delete">
                    Delete
                    </button>
                </td>
            `)

            // id setter
            newRow.data('id', task.id)
            $('#taskTableBody').append(newRow);
    }
}
