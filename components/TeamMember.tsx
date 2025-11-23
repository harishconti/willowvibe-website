"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { Linkedin, Check, ChevronDown, ChevronUp, Award } from 'lucide-react';
import { TeamMember as TeamMemberType } from '@/data/team';
import { getOptimizedImage } from '@/lib/images';

interface TeamMemberProps {
  member: TeamMemberType;
}

const getBadgeColor = (skill: string) => {
  const lowerSkill = skill.toLowerCase();

  // Blue tint: Programming languages
  if (['python', 'java', 'html/css', 'sql', 'javascript', 'typescript', 'c++'].some(k => lowerSkill.includes(k))) {
    return "bg-blue-100 text-blue-800";
  }
  // Green tint: Cloud/Infrastructure
  if (['aws', 's3', 'jenkins', 'cloud', 'azure', 'devops', 'docker', 'kubernetes', 'git'].some(k => lowerSkill.includes(k))) {
    return "bg-green-100 text-green-800";
  }
  // Purple tint: Frameworks/Tools
  if (['airflow', 'api', 'fastapi', 'robot framework', 'react', 'next.js', '3dexperience', 'teamcenter', 'cad'].some(k => lowerSkill.includes(k))) {
    return "bg-purple-100 text-purple-800";
  }
  // Orange tint: Domains
  return "bg-orange-100 text-orange-800";
};

const TeamMember: React.FC<TeamMemberProps> = ({ member }) => {
  const [showCertifications, setShowCertifications] = useState(false);
  const MAX_VISIBLE_TAGS = 5;
  const visibleExpertise = member.expertise.slice(0, MAX_VISIBLE_TAGS);
  const remainingExpertiseCount = member.expertise.length - MAX_VISIBLE_TAGS;

  const optimizedImage = getOptimizedImage(member.image);

  return (
    <div
      className="bg-white rounded-lg border border-[var(--color-card-border)] shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 p-6 flex flex-col h-full group relative overflow-hidden"
    >
      <div className="flex flex-col items-center mb-4">
        <div className="relative w-48 h-48 mb-4 rounded-full overflow-hidden border-4 border-teal-50 shadow-inner">
           <Image
            src={optimizedImage.src}
            alt={`Photo of ${member.name}, ${member.role} at WillowVibe`}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 192px, 192px"
            loading="lazy"
            placeholder={optimizedImage.blurDataURL ? "blur" : "empty"}
            blurDataURL={optimizedImage.blurDataURL}
          />
        </div>
        <h3 className="text-xl font-bold text-gray-900 text-center mb-1">{member.name}</h3>
        <p className="text-teal-600 font-medium text-center text-sm mb-4 min-h-[40px] flex items-center">{member.role}</p>
      </div>

      <div className="flex-grow">
        <p className="text-gray-600 text-sm leading-relaxed mb-6 text-center">
          {member.bio}
        </p>

        <div className="mb-6">
          <h4 className="sr-only">Expertise</h4>
          <div className="flex flex-wrap gap-2 justify-center">
            {visibleExpertise.map((skill, index) => (
              <span
                key={index}
                className={`px-3 py-1 rounded-full text-xs font-medium ${getBadgeColor(skill)} transition-colors cursor-default`}
              >
                {skill}
              </span>
            ))}
            {remainingExpertiseCount > 0 && (
               <span className="px-3 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-600">
                 +{remainingExpertiseCount} more
               </span>
            )}
          </div>
        </div>

        <div className="mb-6 space-y-2">
           <h4 className="text-sm font-semibold text-gray-900 mb-2">Key Achievements</h4>
           <ul className="space-y-2">
             {member.highlights.map((highlight, idx) => (
               <li key={idx} className="flex items-start text-sm text-gray-600">
                 <Check className="h-4 w-4 text-teal-500 mt-0.5 mr-2 flex-shrink-0" />
                 <span>{highlight}</span>
               </li>
             ))}
           </ul>
        </div>

        {member.certifications && member.certifications.length > 0 && (
          <div className="mt-4 pt-4 border-t border-gray-100">
             <button
               onClick={() => setShowCertifications(!showCertifications)}
               className="flex items-center text-sm text-gray-500 hover:text-teal-600 transition-colors w-full justify-between group/btn"
             >
               <span className="flex items-center">
                 <Award className="h-4 w-4 mr-2" />
                 Certifications
               </span>
               {showCertifications ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
             </button>

             <div className={`mt-2 space-y-1 overflow-hidden transition-all duration-300 ${showCertifications ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}>
               {member.certifications.map((cert, idx) => (
                 <p key={idx} className="text-xs text-gray-500 pl-6">• {cert}</p>
               ))}
             </div>
          </div>
        )}
      </div>

      <div className="mt-6 pt-4 flex justify-center border-t border-gray-100">
        <a
          href={member.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center p-2 text-gray-400 hover:text-[#0077B5] hover:bg-blue-50 rounded-full transition-all duration-300"
          aria-label={`View ${member.name}'s LinkedIn Profile`}
        >
          <Linkedin className="h-6 w-6" />
        </a>
      </div>
    </div>
  );
};

export default TeamMember;
