import "./Button.css"

export const Button = ({handleClick}) => {
  return (
    <>
        <button onClick={handleClick} className="button_container btn-animated">Probar mi suerte</button>
    </>
  )
}
