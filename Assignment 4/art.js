

class App extends React.Component {
constructor(props) {
	super(props);

	// Setting up state
	this.state = {
	userInput : "",
	list:[]
	}
}

// Set a user input value
updateInput(value){
	this.setState({
	userInput: value,
	});
}

// Add item if user input in not empty
addItem(){
	if(this.state.userInput !== '' ){
	const userInput = {

		

		// Add a user value to list
		value : this.state.userInput
	};

	// Update list
	const list = [...this.state.list];
	list.push(userInput);

	// reset state
	this.setState({
		list,
		userInput:""
	});
	}
}




render(){
	return(<Container>


		<hr/>
		<Row>
		<Col md={{ span: 5, offset: 4 }}>

		<InputGroup className="mb-3">
		<FormControl
			placeholder="add item . . . "
			size="lg"
			value = {this.state.userInput}
			onChange = {item => this.updateInput(item.target.value)}
			aria-label="add something"
			aria-describedby="basic-addon2"
		/>
		<InputGroup.Append>
			<Button
			variant="dark"
			size="lg"
			onClick = {()=>this.addItem()}
			>
			ADD
			</Button>
		</InputGroup.Append>
		</InputGroup>

	</Col>
</Row>
<Row>
	<Col md={{ span: 5, offset: 4 }}>
		<ListGroup>
		{/* map over and print items */}
		</ListGroup>
	</Col>
</Row>
	</Container>
	);
}
}

ReactDOM.render(<App/>,document.getElementById('container'))
