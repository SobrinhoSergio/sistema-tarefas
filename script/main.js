//função que adiciona tarefas

function addTask(){

    //titulo da tarefa

    const taskTitle = document.querySelector("#task-title").value

    if(taskTitle){

        //clonar o templates

        const template = document.querySelector(".template")

        const newTask = template.cloneNode(true)

        //adicionar titulo

        newTask.querySelector(".task-title").textContent = taskTitle

        //remover as classes desnecessárias

        newTask.classList.remove("template")
        newTask.classList.remove("hide")

        //adicionar tarefas a lista

        const list = document.querySelector("#task-list")

        list.appendChild(newTask)

        //Adicionar o evento de remover

        const removeBtn = newTask.querySelector(".remove-btn").addEventListener("click", function(){

            removeTask(this)


        });

        //Adicionar evento de completar tarefas

        const doneBtn = newTask.querySelector(".done-btn").addEventListener("click", function(){

            completeTask(this)
        })

        //limpar texto

        document.querySelector("#task-title").value = ""

    }

}

//Função de remover tarefas

function removeTask(task){

    task.parentNode.remove(true);

}

//Função de completar tarefas

function completeTask(task){

    const taskToComplete = task.parentNode

    taskToComplete.classList.toggle("done")

}




//Evento de adicionar Tarefa

const addBtn = document.querySelector("#add-btn")

addBtn.addEventListener("click", function(e){

    e.preventDefault();

    addTask();


});