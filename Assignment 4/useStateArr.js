function BookStore(){

    const[books,setbooks]=React.useState(['Physics','Chemistry','Maths','Electronics','Biology'])

    let removebook=()=>{
        let indexOfbook=books.indexOf('Electronics')
        console.log(indexOfbook);

        if(indexOfbook>=0){
            books.splice(indexOfbook,1)
            setbooks(
                [...books]
        )}
        
    }
    
    
    return<div>
        {
            books.map((book,idx)=>{
                return <p key={idx+book}>{book}</p>
            })
        }
        
        <button onClick={removebook}>Remove Electronics</button>
  </div>
}


ReactDOM.render(<BookStore/>,document.getElementById('container'))