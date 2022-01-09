const style = {
  color: '#000',
  fontWeight: '700',
  marginBottom: '0.5em'
};

const PageTitle = ({ title, info }) => {
  return (
    <h1 style={style}>
      {title}
      <span style={{ color: 'var(--grey-400)' }}>{info && `(${info})`}</span>
    </h1>
  );
};

export default PageTitle;
