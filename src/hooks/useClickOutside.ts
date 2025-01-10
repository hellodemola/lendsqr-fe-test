import { useEffect, useRef } from "react";

interface UseClickOutsideProps {
  onClose: () => void; 
}

const useClickOutside = ({ onClose }: UseClickOutsideProps) => {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClose]);

  return ref;
};

export default useClickOutside;