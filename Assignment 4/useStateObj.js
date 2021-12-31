function Book(){

    const [author, setauthor]=React.useState({
        authorName:'Amrita Pritam',
        bookName:"Revolution 2020"
    })

    let updateAuthorName=()=>{
        setauthor({
            ...author,
            authorName:"Chetan Bhagat"
        })
    }

    
    return <div>
        <h1>Author Name:{author.authorName}</h1>
        <h1>Book Name:{author.bookName}</h1>
        <button onClick={updateAuthorName}>Update Author Name</button>
    </div>
}

ReactDOM.render(<Book/>,document.getElementById('container'))