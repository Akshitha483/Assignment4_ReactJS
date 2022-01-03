function ToDo(){
  const [state,setState] = React.useState("")
  const [newList, setList] = React.useState([])

  let ToDoEvent = (event)=>{
      console.log(event.target.value)
      setState(event.target.value)
  }

  let Add = (event)=>{
      console.log(state)
      newList.push(state)
      console.log(newList)
      event.preventDefault();
      setState("")
  }

  return <div className="todoListMain">
      <div className="header">
          <input type="text" value={state} placeholder="Enter Task" onChange={(event)=>{ToDoEvent(event)}}/>
          <button onClick={Add}>Add Task</button>
      </div>
      <ul>
          {newList.map((val,idx)=>{
              return <li key={val+idx}>{val}</li>
          })}
      </ul>
  </div>
}

ReactDOM.render(<ToDo/>,document.getElementById('container'))
