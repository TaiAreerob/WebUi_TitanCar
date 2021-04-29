
import { toast, Flip, Zoom, cssTransition } from 'react-toastify';

export const renderToastSuccess = (textMessage = '') => {
    toast.success(textMessage, {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
    });
}

export const renderToastError = (textMessage = '') => {
    toast.error(textMessage, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
    });

}

export const renderToastJSN = (textMessage = '') => {
    const Zoom = cssTransition({
        enter: 'zoomIn',
        exit: 'zoomOut',
        duration: [300, 300]
    });
    toast.info('', {
        className: 'JSNToast__Overlay',
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        closeButton: false,
        transition: Zoom,
    })
    toast.success(textMessage, {
        className: 'JSNToast',
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        transition: Flip,
    })
}