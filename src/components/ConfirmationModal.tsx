import React from 'react';
import { AlertTriangle, Trash2, X } from 'lucide-react';

type ConfirmationModalProps = {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  title: string;
  message: string;
  confirmText: string;
  cancelText: string;
  type: 'danger' | 'warning' | 'info';
};

export function ConfirmationModal({
  isOpen,
  onClose,
  onConfirm,
  title,
  message,
  confirmText,
  cancelText,
  type = 'danger'
}: ConfirmationModalProps) {
  if (!isOpen) return null;

  const getTypeStyles = () => {
    switch (type) {
      case 'danger':
        return {
          icon: <Trash2 className="w-12 h-12 text-red-500" />,
          confirmButton: 'bg-red-600 hover:bg-red-700 text-white',
          iconBackground: 'bg-red-100'
        };
      case 'warning':
        return {
          icon: <AlertTriangle className="w-12 h-12 text-yellow-500" />,
          confirmButton: 'bg-yellow-600 hover:bg-yellow-700 text-white',
          iconBackground: 'bg-yellow-100'
        };
      case 'info':
        return {
          icon: <AlertTriangle className="w-12 h-12 text-blue-500" />,
          confirmButton: 'bg-blue-600 hover:bg-blue-700 text-white',
          iconBackground: 'bg-blue-100'
        };
      default:
        return {
          icon: <Trash2 className="w-12 h-12 text-red-500" />,
          confirmButton: 'bg-red-600 hover:bg-red-700 text-white',
          iconBackground: 'bg-red-100'
        };
    }
  };

  const styles = getTypeStyles();

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50 animate-fadeIn">
      <div className="bg-white rounded-xl shadow-lg p-6 w-full max-w-md animate-scaleIn">
        <div className="flex justify-between items-start mb-4">
          <div className="flex items-center gap-4">
            <div className={`p-3 rounded-full ${styles.iconBackground}`}>
              {styles.icon}
            </div>
            <h2 className="text-xl font-bold text-gray-800">{title}</h2>
          </div>
          <button
            onClick={onClose}
            className="p-1 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X className="w-5 h-5 text-gray-500" />
          </button>
        </div>
        
        <div className="my-6">
          <p className="text-gray-600">{message}</p>
        </div>
        
        <div className="flex gap-3 justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50"
          >
            {cancelText}
          </button>
          <button
            onClick={() => {
              onConfirm();
              onClose();
            }}
            className={`px-4 py-2 rounded-lg ${styles.confirmButton}`}
          >
            {confirmText}
          </button>
        </div>
      </div>
    </div>
  );
}