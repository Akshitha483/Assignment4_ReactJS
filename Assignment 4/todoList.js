class TodoList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            items: []
          };
     
        this.addItem = this.addItem.bind(this);
      }
       
      addItem(e) {
        if (this._inputElement.value !== "") {
            var newItem = {
              text: this._inputElement.value,
              key: Date.now()
            };
         
            this.setState((prevState) => {
              return { 
                items: prevState.items.concat(newItem) 
              };
            });
           
            this._inputElement.value = "";
          }
           
          console.log(this.state.items);
             
          e.preventDefault();
     
      }
    render() {
      return (
        <div className="todoListMain">
          <div className="header">
          <form onSubmit={this.addItem}>
              <input ref={(a) => this._inputElement = a}  placeholder="enter task">
              </input>
              <button type="submit">add</button>
            </form>
          </div>
          <TodoItems entries={this.state.items}/>
        </div>
      );
    }
  }

  class TodoItems extends React.Component {
    createTasks(item) {
      return <li key={item.key}>{item.text}</li>
    }
   
    render() {
      var todoEntries = this.props.entries;
      var listItems = todoEntries.map(this.createTasks);
   
      return (
        <ul className="theList">
            {listItems}
        </ul>
      );
    }
  };

  ReactDOM.render(<TodoList/>,document.getElementById('container'))