import React from 'react';
import { Cross } from './cross';

interface ContainerProps {
  children: React.ReactNode;
}

const Container = ({ children }: ContainerProps) => {
  return (
    <div className="container">
      <div className="relative flex flex-col gap-8 border-x">
        <Cross className="absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-black" />
        <Cross className="absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-black" />
        <span />
        <span />
        <div>{children}</div>
      </div>
    </div>
  );
};

export default Container;
