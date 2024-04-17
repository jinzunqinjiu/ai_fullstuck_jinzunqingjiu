import { makeAutoObservable } from "mobx"

class TodoStore {
  list = [
    { id: 1, name: '学习react', isDone: true },
    { id: 2, name: '学习mobx', isDone: false },
  ]
  constructor() {
    makeAutoObservable(this)
  }

  checkItem(id) {
    this.list[id - 1].isDone = this.list[id - 1].isDone ? false : true
    console.log(this.list[id - 1].isDone);
  }
  checkAll() {
    for (let i = 0; i < this.list.length; i++) {
      this.list[i].isDone = true
      console.log(this.list[i].isDone);
    }
  }
  deleteItem(index) {
    this.list.splice(index, 1)
  }
  pushValue(id, name) {
    this.list.push({ id: id, name: name, isDone: false })
  }

}
const todolist = new TodoStore()
// console.log(todolist);
export default todolist