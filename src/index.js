document.addEventListener("DOMContentLoaded", () => {
  // your code here
    let form = document.querySelector('form')
    form.addEventListener('submit', (e) => {
      e.preventDefault()
      buildToDo(e.target.new_task_description.value)
      form.reset()
  })
});
//Lets you add task to the list
function buildToDo(todo) {
    let p = document.createElement('p')
    let btn = document.createElement('button')
    btn.addEventListener('click', handleDelete)
    btn.textContent = 'x'
    p.textContent = `${todo} `
    p.appendChild(btn)
    document.querySelector('#tasks').appendChild(p)

}
//allows the tasks to be deleted when completed
function handleDelete(e){
    e.target.parentNode.remove()
}