$(document).ready(onReady);

function onReady() {
//------ Handlers go here
$('#add').on('click', addTask);

}

//------ Functions go here

// POST request for adding a task
function addTask() {
    let newTask = {
        task: $('#taskIn').val()
    }
    $.ajax({
        type: 'POST',
        url: '/tasks',
        data: newTask
    })
    .then((response) => {
        $('#taskIn').val('')
        // render function (or, getTasks?) goes here
    })
    .catch((error) =>{
        console.log('error in POST:', error)
    })
}