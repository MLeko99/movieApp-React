const Display = ({ value }) => {
  return <div className="calculator-preview">{value || "0"}</div>;
};

export default Display;
