import React from 'react';
import { Page } from '../types';
import { TEAM_MEMBERS, PRODUCTION_ARCHITECTS } from '../data/team';
import { Users, Award, ShieldCheck, CheckCircle2, ArrowRight } from 'lucide-react';

interface TeamPageProps {
  onNavigate: (page: Page) => void;
  handleImgError: (e: React.SyntheticEvent<HTMLImageElement, Event>) => void;
}

export const TeamPage: React.FC<TeamPageProps> = ({ onNavigate, handleImgError }) => {
  return (
    <div className="py-16 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
      
      {/* Page Header */}
      <div className="pb-12 border-b border-black/[0.08]">
        <div className="flex items-center gap-2 mb-3">
          <span className="p-1.5 bg-[#d4a234]/15 rounded-xs text-[#d4a234]">
            <Users className="w-4 h-4" />
          </span>
          <span className="editorial-label text-[#d4a234]">Executive Leadership & Jury</span>
        </div>
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-serif font-semibold text-[#1a1a1a] leading-[0.95] tracking-tight">
          The Minds <br />
          Behind RAW.
        </h1>
        <p className="text-lg text-[#4a4844] mt-6 max-w-3xl font-normal leading-relaxed">
          The cultural icons, former agricultural ministers, and scientific deans who built an arena where the cultivators of our food take center stage under national primetime broadcast lights.
        </p>
      </div>

      {/* Leadership Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {TEAM_MEMBERS.map((member) => (
          <div 
            key={member.id}
            className="editorial-card overflow-hidden flex flex-col justify-between"
          >
            <div>
              {/* Photo Box */}
              <div className="aspect-[4/3] bg-[#e0deda] relative overflow-hidden border-b border-black/10">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  onError={handleImgError}
                  className="w-full h-full object-cover object-top lookbook-photo"
                />
                <div className="absolute top-3 left-3 bg-[#1a1a1a] text-white text-[10px] font-mono uppercase tracking-wider font-bold px-3 py-1">
                  {member.role}
                </div>
              </div>

              {/* Text content */}
              <div className="p-6 space-y-4">
                <div>
                  <span className="editorial-label text-[#d4a234] mb-1">{member.title}</span>
                  <h3 className="text-2xl font-serif font-bold text-[#1a1a1a]">{member.name}</h3>
                </div>

                <p className="font-serif italic text-xs text-[#1a1a1a] leading-relaxed border-l-2 border-[#d4a234] pl-3 py-0.5">
                  "{member.quote}"
                </p>

                <p className="text-xs text-[#4a4844] leading-relaxed">
                  {member.bio}
                </p>

                <div className="pt-2">
                  <span className="font-mono text-[10px] uppercase tracking-wider text-[#76726b] font-bold block mb-2">
                    Key Credentials:
                  </span>
                  <ul className="space-y-1.5 font-mono text-[10px] text-[#4a4844]">
                    {member.credentials.map((cred, i) => (
                      <li key={i} className="flex items-start gap-1.5">
                        <span className="text-[#d4a234] font-bold">›</span>
                        <span>{cred}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Institutional & Production Partners */}
      <div className="p-8 sm:p-12 bg-white border border-black/[0.08] rounded-xs space-y-8">
        <div>
          <span className="editorial-label text-[#d4a234] mb-2">Alliances & Guilds</span>
          <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#1a1a1a]">
            The Production Consortium
          </h3>
          <p className="text-sm text-[#4a4844] mt-2 max-w-2xl leading-relaxed">
            RAW is produced through a cross-sector partnership uniting television entertainment, scientific academia, and grassroots forestry governance:
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {PRODUCTION_ARCHITECTS.map((arch, idx) => (
            <div key={idx} className="p-6 bg-[#f8f7f4] border border-black/10 rounded-xs space-y-2">
              <span className="font-mono text-[10px] uppercase tracking-wider text-[#d4a234] font-bold block">
                {arch.role}
              </span>
              <h4 className="font-serif font-bold text-xl text-[#1a1a1a]">
                {arch.entity}
              </h4>
              <p className="text-xs text-[#4a4844] leading-relaxed">
                {arch.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};
