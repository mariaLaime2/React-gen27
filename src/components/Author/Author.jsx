import "./Author.css"

const Author = ({author}) => {
  return (
    <div className="container_author">
       <p>Fuente:{author.author}</p>
    </div>
  )
}

export default Author