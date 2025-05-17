import React from "react";

interface Props {
  children: React.ReactNode;
  className?: string;
}

export const Heading = ({ children, className = "" }: Props) => {
  return (
    <h1 className={`text-[82px] font-[900] text-midnight ${className}`}>
      {children}
    </h1>
  );
};
