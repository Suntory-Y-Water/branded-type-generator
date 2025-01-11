import Generator from './components/Generator';

export default function App() {
  return (
    <div className='px-2 py-4 bg-gray-100 min-h-screen'>
      <div className='max-w-4xl mx-auto bg-white shadow-md rounded-lg p-6 space-y-2'>
        <h1 className='text-2xl font-bold mb-4'>Branded Type Generator</h1>
        <Generator />
      </div>
    </div>
  );
}
