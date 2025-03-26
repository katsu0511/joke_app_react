import { Suspense } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ErrorBoundary } from 'react-error-boundary';
import Jokes from './Jokes';
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
      <Suspense fallback={<p></p>}>
        <ErrorBoundary fallback={<p>Error has happe</p>}>
          <QueryClientProvider client={cli}>
            <Jokes />
          </QueryClientProvider>
        </ErrorBoundary>
      </Suspense>
    </main>
  );
}

export default App;
