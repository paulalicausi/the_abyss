import ButtonNext from './ButtonNext';
import content from '../content/texts';
import ButtonPrev from './ButtonPrev';
import ButtonOut from './ButtonOut';
import Dot from './Dot';
import Colors from './Colors';

export default function Step({ next, prev, step, lang}) {

  const language = content[lang] ? lang : 'en'; 
  let stepContent = content[language][step] || '';

  return (
    <>
      <div className='main-content'>
          {step === 7 && (
            <Dot></Dot>
          )}
          {step === 8 && (
            <Colors></Colors>
          )}
          {step > 1 && (
            <ButtonPrev lang={lang} prev={prev}></ButtonPrev>
          )}
          {step === 5 && (
            <div className="circle move"></div>
          )}
          {step === 6 && (
            <div className="circle"></div>
          )}

          <div className='main-text' dangerouslySetInnerHTML={{ __html: stepContent }} />
            {step === 10 ? <ButtonOut lang={lang}></ButtonOut> : <ButtonNext lang={lang} next={next}></ButtonNext>}
        </div>
    </>
  );
}
