export default function ButtonNext({ next, lang }) {
  
  return (
       <button
          onClick={next}
          style={{
            position: 'relative',
            zIndex: 30,
            marginTop: '2rem',
            padding: '12px 24px',
            fontSize: '12px',
            color: '#f5c462',
            backgroundColor: '#000',
            border: '2px solid #f5c462',
            textTransform: 'uppercase',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
            outline: 'none',
            fontFamily: '"Press Start 2P", system-ui',
          }}
          onMouseEnter={(e) => {
            e.target.style.boxShadow = '0 0 10px #f5c462, 0 0 25px #f5c462';
          }}>
            {lang == 'en' ? 'Continue' : 'Continuar'} 
          </button>
  );
}
