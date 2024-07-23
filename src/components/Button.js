function Button({ onClickHandler, value, title }) {

  return (
    <div onClick={onClickHandler} value={value} className="btns">
      {title}
      
    </div>
  );
}
export default Button;
