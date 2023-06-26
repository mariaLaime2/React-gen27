import "./PhrasesCard.css"

const PhrasesCard = ({data}) => {
  return (
    <section className="container_phrase">
         <p>{data.phrase}</p>
    </section>
   
  )
}

export default PhrasesCard