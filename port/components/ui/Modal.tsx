'use client';

import { ReactNode } from 'react';
import Icon from './AppIcon';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: ReactNode;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

export default function Modal({
  isOpen,
  onClose,
  title,
  children,
  size = 'lg',
}: ModalProps) {
  if (!isOpen) return null;

  const sizeClasses = {
    sm: 'max-w-sm',
    md: 'max-w-md',
    lg: 'max-w-2xl',
    xl: 'max-w-4xl',
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal Content */}
      <div
        className={`${sizeClasses[size]} w-full bg-white border border-slate-200 rounded-2xl shadow-2xl max-h-[90vh] overflow-y-auto relative z-10`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        {title && (
          <div className="flex items-center justify-between p-6 border-b border-slate-200 sticky top-0 bg-white rounded-t-2xl">
            <h2 className="text-2xl font-bold text-slate-900">
              {title}
            </h2>
            <button
              onClick={onClose}
              className="inline-flex items-center justify-center w-10 h-10 text-slate-500 hover:text-slate-900 hover:bg-slate-100 rounded-lg transition-colors"
              aria-label="Close modal"
            >
              <Icon name="XMarkIcon" size={24} />
            </button>
          </div>
        )}

        {/* Close Button (Top Right if no title) */}
        {!title && (
          <button
            onClick={onClose}
            className="absolute top-4 right-4 inline-flex items-center justify-center w-10 h-10 text-slate-500 hover:text-slate-900 hover:bg-slate-100 rounded-lg transition-colors z-20"
            aria-label="Close modal"
          >
            <Icon name="XMarkIcon" size={24} />
          </button>
        )}

        {/* Body */}
        <div className="p-6 text-slate-900">{children}</div>
      </div>
    </div>
  );
}
