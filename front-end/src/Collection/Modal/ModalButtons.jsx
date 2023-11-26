const ModalButtons = ({ type, handler, classes, text }) => {
  return (
    <button type={type} onClick={handler} className={classes}>
      {text}
    </button>
  );
};

export default ModalButtons;
