import React from 'react'
import { observer } from 'mobx-react-lite';

import counter from './counterStore'
import movie from './movieStore'
import todolist from './todoStore'

class RootStore {
  constructor() {
    this.todoStore = todolist
  }
}
const rootStore = new RootStore()

// const context = React.createContext(rootStore)

const useStore = () => rootStore

export { useStore, observer } 