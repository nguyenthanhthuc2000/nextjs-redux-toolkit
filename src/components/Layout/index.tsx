// pages/index.tsx (hoặc trang tương tự)
import React from 'react';
import Header from '@/components/Header';

interface LayoutInterface {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutInterface) {
  return (
    <div>
      <Header />
    </div>
  );
};
