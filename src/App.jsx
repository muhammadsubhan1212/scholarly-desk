import { RouterProvider } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { CurrencyProvider } from './context/CurrencyContext';
import { ToastProvider } from './context/ToastContext';
import { router } from './routes';

export default function App() {
  return (
    <AuthProvider>
      <CurrencyProvider>
        <ToastProvider>
          <RouterProvider router={router} />
        </ToastProvider>
      </CurrencyProvider>
    </AuthProvider>
  );
}
