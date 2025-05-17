import React from "react";

interface Props {
  children: React.ReactNode;
  className?: string;
}

export const Container = ({ children, className = "" }: Props) => {
  return (
    <section className={`container mx-auto w-[90%] ${className}`}>
      {children}
    </section>
  );
};
