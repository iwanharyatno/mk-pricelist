import { useRouteError } from 'react-router-dom';

import { useEffect } from 'react';

function ErrorPage() {
  const error = useRouteError();

  useEffect(() => {
    document.title = `Error: ${error.status} - ${error.statusText}`;
  });

  return (
    <div className="flex fixed justify-center items-center w-full h-full flex-col">
      <h1 className="text-4xl mb-4 text-blue-500 font-bold">Ups!</h1>
      <p className="mb-4 text-center max-w-24">{ getExtendedMessage(error.status) }</p>
      <p className="text-gray-400 text-center divide-x mt-4">
        <span className="inline-block p-4">{error.status}</span>
        <span className="inline-block p-4">{error.statusText}</span>
      </p>
    </div>
  );
}

function getExtendedMessage(errorStatus) {
  switch(errorStatus) {
    case 404:
      return 'Maaf, kami tidak bisa menemukan halaman yang dimaksud.';
      break;
    default:
      return 'Ada sesuatu yang salah';
  }
}

export default ErrorPage;
