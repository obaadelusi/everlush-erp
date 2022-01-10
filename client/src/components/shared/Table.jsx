import './Table.css';

function Table({ children, title, dataLength }) {
  return (
    <div className="Table-container">
      <div className="Table-header">
        <h2 className="text-display">{title}</h2>
      </div>
      <table className="Table">{children}</table>
      {dataLength === 0 && <p className="Table-default">Nothing yet.</p>}
    </div>
  );
}

export default Table;
