
import React from 'react';
import { Screen } from '../../types';
import InvitationCard from '../InvitationCard';

interface InvitationProps {
  personalizedWish: string;
  onNavigate: (screen: Screen) => void;
}

const Invitation: React.FC<InvitationProps> = ({ personalizedWish, onNavigate }) => {
  return (
    <InvitationCard>
      <div className="mb-6 px-4">
        <p className="text-[#b05d6d] italic text-sm mb-4 leading-relaxed font-medium">
          "{personalizedWish}"
        </p>
        <div className="h-[1px] w-1/2 bg-[#f8d7da] mx-auto mb-6"></div>
      </div>
      
      <h2 className="tracking-[4px] font-bold text-[#5a3e3e] text-lg uppercase mb-2">THƯ MỜI TRÂN TRỌNG</h2>
      <div className="font-cursive text-5xl text-[#b05d6d] mb-6">Lễ Tốt Nghiệp</div>
      
      <p className="text-[#5a3e3e] leading-relaxed my-8 px-4">
        Trân trọng kính mời Quý vị tới tham dự buổi lễ tốt nghiệp của sinh viên Trường <strong className="text-[#b05d6d]">Đại học Phenikaa</strong>
      </p>

      <div className="flex justify-center items-center gap-4 py-8 border-t border-[#eee] my-6">
        <div className="text-right border-r-2 border-[#b05d6d] pr-4 font-bold text-[#5a3e3e]">
          Thứ Bảy, 31/01/2026<br />
          08:30 - 10:30
        </div>
        <div className="text-left pl-2 text-[#5a3e3e]">
          <strong className="block text-[#b05d6d]">Đại học Phenikaa</strong>
          <span className="text-sm">Đường Nguyễn Trác, P. Dương Nội, Hà Nội</span>
        </div>
      </div>

      <div className="text-sm text-[#5a3e3e] mb-10 flex flex-col items-center gap-1">
        <span className="opacity-70 uppercase tracking-widest text-xs">Liên hệ:</span>
        <span className="font-bold text-lg">0912 808 538</span>
      </div>

      <button 
        onClick={() => onNavigate(Screen.HOME)}
        className="text-[#b05d6d] flex items-center gap-2 mx-auto font-bold hover:underline"
      >
        <span className="text-xl">↑</span> Quay lại
      </button>
    </InvitationCard>
  );
};

export default Invitation;
