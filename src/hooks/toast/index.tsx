import { createContext, useCallback, useContext } from 'react';
import { toast, ToastContainer } from 'react-toastify';

export interface IToastMessageParams {
  type?: 'info' | 'success' | 'warning' | 'error';
  description: string;
}

interface IToastContextData {
  addToast(data: IToastMessageParams): void;
}

const ToastContext = createContext<IToastContextData>({} as IToastContextData);

interface IToastProviderProps {
  children: React.ReactNode;
}

const toastStyle = {
  background: '#fff',
  color: '#333',
  border: '1px solid #ccc',
  borderRadius: '4px',
  fontSize: '14px',
  padding: '10px',
};

const ToastProvider: React.FC<IToastProviderProps> = ({ children }) => {
  const addToast = useCallback(({ type, description }: IToastMessageParams) => {
    toast(description, {
      type: type || 'success',
      position: 'top-right',
      style: toastStyle,
    });
  }, []);

  return (
    <ToastContext.Provider value={{ addToast }}>
      {children}
      <ToastContainer limit={6} />
    </ToastContext.Provider>
  );
};

const useToast = () => {
  const context = useContext(ToastContext);

  if (!context) {
    throw new Error('useToast must be used within a ToastProvider');
  }

  return context;
};

export { ToastProvider, useToast };
