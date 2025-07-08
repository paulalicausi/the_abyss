export default function ButtonPrev({ prev, lang }) {
  
  return (
    <button
        onClick={prev}
        style={{
        position: 'absolute',
        zIndex: 30,
        top: '10px',
        padding: '12px 24px',
        fontSize: '12px',
        color: '#f5c462',
        backgroundColor: '#000',
        border: '0',
        textTransform: 'uppercase',
        fontFamily: '"Press Start 2P", system-ui',
        cursor: 'pointer',
        transition: 'all 0.3s ease',
        outline: 'none',
        }}
    >
        {"<"} {lang == 'en' ? 'Back' : 'Volver'} 
    </button>
  );
}
