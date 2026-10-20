import {
  Activity,
  Briefcase,
  CheckCircle2,
  FileCheck,
  Layers,
  Network,
  Radio,
  Server,
  Terminal,
  Users,
  Wrench
} from 'lucide-react';
import { RESUME_DATA } from '../data/resumeData';

export function CompetenciesSection() {
  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'OLT & Transport':
        return <Server className="w-5 h-5 text-cyan-400" />;
      case 'Globe Processes':
        return <FileCheck className="w-5 h-5 text-cyan-400" />;
      case 'NOC & Tools':
        return <Terminal className="w-5 h-5 text-cyan-400" />;
      case 'OSP & Fiber':
        return <Network className="w-5 h-5 text-cyan-400" />;
      case 'Equipment':
        return <Layers className="w-5 h-5 text-cyan-400" />;
      case 'Soft Skills':
        return <Users className="w-5 h-5 text-cyan-400" />;
      default:
        return <Activity className="w-5 h-5 text-cyan-400" />;
    }
  };

  return (
    <section id="competencies" className="py-12 sm:py-16 border-b transition-colors border-slate-800/80 bg-slate-900/20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-8 pb-4 border-b border-slate-800">
          <div className="text-xs font-bold uppercase tracking-wider text-cyan-400 mb-1">
            Core Competencies
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white">
            Technical & Engineering Competencies
          </h2>
          <p className="text-sm text-slate-400 mt-1 max-w-2xl">
            Key areas of technical expertise, carrier processes, field equipment, and operations from curriculum vitae.
          </p>
        </div>

        {/* 6 Core Competency Cards directly from Resume */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {RESUME_DATA.coreCompetencies.map((group) => (
            <div
              key={group.category}
              className="bg-slate-950/80 border border-slate-800/90 rounded-xl p-5 sm:p-6 flex flex-col justify-between shadow-sm hover:border-slate-700 transition-colors"
            >
              <div>
                <div className="flex items-center gap-2.5 mb-4 pb-3 border-b border-slate-800/80">
                  {getCategoryIcon(group.category)}
                  <h3 className="text-base font-bold text-white tracking-tight">
                    {group.category}
                  </h3>
                </div>

                <ul className="space-y-2 text-xs sm:text-sm text-slate-300">
                  {group.items.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2 shrink-0" />
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Project Management & Soft Skills directly from Resume */}
        <div className="bg-slate-950/80 border border-slate-800/90 rounded-xl p-5 sm:p-7 shadow-sm">
          <div className="flex items-center gap-2.5 mb-4 pb-3 border-b border-slate-800">
            <Users className="w-5 h-5 text-cyan-400 shrink-0" />
            <div>
              <h3 className="text-base sm:text-lg font-bold text-white">
                Project Management & Soft Skills
              </h3>
              <p className="text-xs text-slate-400">
                Directly from official curriculum vitae
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
            {RESUME_DATA.projectManagementAndSoftSkills.map((skill, idx) => (
              <div
                key={idx}
                className="bg-slate-900/40 border border-slate-800/80 rounded-lg p-3.5 flex items-start gap-3"
              >
                <CheckCircle2 className="w-4 h-4 text-cyan-400 mt-0.5 shrink-0" />
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {skill}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
