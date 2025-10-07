import { useEffect } from 'react';
import AppRouter from './router/AppRouter';
import { useAuth } from './application/hooks/useAuth';

function App() {
  const { initialize } = useAuth();

  useEffect(() => {
    initialize();
  }, [initialize]);

  return <AppRouter />;
}

export default App;
