import React from "react";
import TypewriterTextClient from "./typewriter-text-client";

interface TypewriterTextProps {
  label: string;
  className?: string;
  onComplete?: () => void;
}

const TypewriterText: React.FC<TypewriterTextProps> = ({
  label,
  className,
  onComplete,
}) => {
  return (
    <TypewriterTextClient
      label={label}
      className={className}
      onComplete={onComplete}
    />
  );
};

export default TypewriterText;
