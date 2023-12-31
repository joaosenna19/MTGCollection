const QuantityModifier = ({ text, classes, onClick }) => {
  return (
    <button className={classes} onClick={onClick}>
      {text}
    </button>
  );
};

export default QuantityModifier;
