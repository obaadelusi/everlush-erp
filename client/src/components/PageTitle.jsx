const style = {
   color: '#000',
   fontWeight: '700',
   marginBottom: '0.5em'
};

const PageTitle = ({ info, children }) => {
   return (
      <h1 style={style}>
         {children}
         <span style={{ color: 'var(--grey-400)' }}>{info && `(${info})`}</span>
      </h1>
   );
};

PageTitle.defaultProps = {
   children: 'PageTitle'
};

export default PageTitle;
