import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const errorToast = (message: string) => {
  toast.error(message);
};

export const successToast = (message: string) => {
  toast.success(message);
};

export const infoToast = (message: string) => {
  toast.info(message);
};

export const warningToast = (message: string) => {
  toast.warning(message);
};
