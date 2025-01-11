import { Button } from '@/components/ui/button';
import { generateBrandedTypes } from '@/lib/generateBrandedTypes';
import { useState } from 'react';
import { Textarea } from './ui/textarea';

export default function Generator() {
  const [inputText, setInputText] = useState(`post, string
id, number`);
  const [outputText, setOutputText] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  function handleGenerate() {
    try {
      const result = generateBrandedTypes(inputText);
      setOutputText(result);
      setErrorMessage('');
    } catch (error) {
      if (error instanceof Error) {
        setErrorMessage(error.message);
      }
    }
  }

  return (
    <>
      <h1 className='text-xl font-bold mb-2'>Input</h1>
      <p>
        This tool will generate branded types for TypeScript based on the input data. The input data
        should be in CSV or Tab separated format.
      </p>
      <Textarea
        value={inputText}
        rows={8}
        onChange={(e) => setInputText(e.target.value)}
        placeholder='Please input data in CSV or Tab separated format'
        aria-label='Input Text'
      />
      <Button onClick={handleGenerate}>Generate</Button>
      {errorMessage && <p className='text-red-600 font-semibold mb-4'>{errorMessage}</p>}
      <h1 className='text-xl font-bold mb-2'>Output</h1>
      <p>
        It is generated based on the best practices described in the following article. For more
        information, please{' '}
        <a
          href='https://qiita.com/uhyo/items/de4cb2085fdbdf484b83'
          target='_blank'
          rel='noopener noreferrer'
          className='text-blue-500 hover:underline'
        >
          click here
        </a>{' '}
        to review the article.
      </p>
      <Textarea
        className='bg-gray-100'
        rows={10}
        value={outputText}
        readOnly
        aria-label='Output Text'
      />
    </>
  );
}
