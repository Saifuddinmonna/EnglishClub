import { toast } from 'react-toastify';

const defaultOptions = {
  position: 'top-right',
  autoClose: 4000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: 'colored',
};

export const showSuccess = (message, options = {}) =>
  toast.success(message, { ...defaultOptions, ...options });

export const showError = (message, options = {}) =>
  toast.error(message, { ...defaultOptions, ...options });

export const showInfo = (message, options = {}) =>
  toast.info(message, { ...defaultOptions, ...options });

export const showWarning = (message, options = {}) =>
  toast.warn(message, { ...defaultOptions, ...options });

export default {
  showSuccess,
  showError,
  showInfo,
  showWarning,
}; 