import { useState, useEffect } from 'react'
import { ReactMarkdown } from 'react-markdown/lib/react-markdown'
import { Guest } from 'types/Guest';

type Parameters = {
  text: string;
  contacts?: Guest[],
  variables?: {
    [key: string]: string
  }
};

function Preview({text = '', variables}: Parameters) {
  const [updatedText, setUpdatedText] = useState(text);
  useEffect(() => {
    let textWithVariables = text;
    const variablesInMessage = text.match(/{{\w+}}/g) || [];
    variablesInMessage.forEach((variable: string, index: number) => {
      if(variables && variables[index]) {
        textWithVariables = textWithVariables.replace(variable, variables[index] as string);
      }
    });
    setUpdatedText(textWithVariables);
  }, [text, variables, updatedText, JSON.stringify(variables)])
  
  return (
    <>
      <h3 className='font-semibold text-blue-800 md:mt-5 mb-3'>Apperçu</h3>
      <article className="preview p-4 bg-slate-100 rounded-lg text-sm">
        <ReactMarkdown className='line-break'>{updatedText}</ReactMarkdown>
      </article>
    </>
  )
}

export default Preview