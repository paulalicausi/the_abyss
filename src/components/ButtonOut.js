export default function ButtonOut({lang}) {
  
  return (
      <a
      href='https://nebulascafe.com'
      target='_blank'
      style={{
        position: 'relative',
        zIndex: 30,
        marginTop: '2rem',
        padding: '12px 24px',
        fontSize: '12px',
        color: '#000',
        backgroundColor: '#6BF562',
        border: '2px solid #6BF562',
        textTransform: 'uppercase',
        cursor: 'pointer',
        transition: 'all 0.3s ease',
        outline: 'none',
        fontFamily: '"Press Start 2P", system-ui',
        textDecoration: 'none',
      }}>
        {lang == 'en' ? 'Get out of the abyss' : 'Salir del abismo'}  ☄
      </a>
  );
}
