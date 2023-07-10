import "./styles/HeadBoard.css"

const HeadBoard = ({image1,image2}) => {
  return (
    <>
    
    <img className="img1" src={image1} alt="" />
    <img className="img2" src={image2} alt="" />
    </>
  )
}

export default HeadBoard