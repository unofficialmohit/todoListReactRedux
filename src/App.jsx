import React from 'react'
import AddTodo from './components/AddTodo'
import Todo from './components/Todo'
function App() {
  const[input,setInput]=React.useState('');
  return (
    <div>
      <AddTodo input={input} setInput={setInput}/>
      <Todo input={input}/>
    </div>
  )
}
export default App