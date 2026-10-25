import React from 'react';
import { Pencil } from 'lucide-react';

interface PreviewToolbarProps {
  isVisible: boolean;
  editActive: boolean;
  onToggle: () => void;
}

export const PreviewToolbar: React.FC<PreviewToolbarProps> = ({ isVisible, editActive, onToggle }) => {
  if (!isVisible) return null;

  return (
    <div className="fixed bottom-5 right-5 z-50 flex items-center gap-2.5 bg-[#0b0906]/95 border border-[#f3d482]/40 backdrop-blur-md px-3.5 py-2 rounded-full shadow-[0_8px_32px_rgba(0,0,0,0.85)] text-xs font-mono">
      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
      <span className="text-[#a39780] font-cinzel text-[10px] tracking-wider uppercase font-semibold">
        Preview Mode
      </span>
      <span className="text-white/20">|</span>
      <button
        onClick={onToggle}
        className={`px-2.5 py-1 rounded-full text-[11px] font-semibold transition-all cursor-pointer flex items-center gap-1.5 ${
          editActive
            ? 'bg-[#f3d482] text-black font-bold shadow-md'
            : 'bg-white/10 text-[#dcd0bc] hover:bg-white/20'
        }`}
      >
        <Pencil className="w-3 h-3" />
        <span>Inline Edit: {editActive ? 'ON' : 'OFF'}</span>
      </button>
    </div>
  );
};
