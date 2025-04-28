import { Suspense } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ErrorBoundary } from 'react-error-boundary';
import Jokes from './Jokes';
import Loading from './Loading';
import Error from './Error';
import './App.css';

const cli = new QueryClient({
  defaultOptions: {
    queries: {
      suspense: true,
    },
  },
});

function App() {
  return (
    <main>
      <header>
        <h1>Jokes</h1>
      </header>
      <Suspense fallback={<Loading />}>
        <ErrorBoundary  fallback={<Error />}>
          <QueryClientProvider client={cli}>
            <Jokes />
          </QueryClientProvider>
        </ErrorBoundary>
      </Suspense>
    </main>
  );
}

export default App;
