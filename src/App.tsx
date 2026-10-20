/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { CompetenciesSection } from './components/CompetenciesSection';
import { EducationAndLicense } from './components/EducationAndLicense';
import { ExperienceTimeline } from './components/ExperienceTimeline';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { PdfViewerModal } from './components/PdfViewerModal';
import { ReferencesAndContact } from './components/ReferencesAndContact';
import { SoftwareShowcase } from './components/SoftwareShowcase';

export default function App() {
  const [isPdfOpen, setIsPdfOpen] = useState(false);
  const [isLightMode, setIsLightMode] = useState(false);

  return (
    <div
      className={`min-h-screen flex flex-col font-sans transition-colors duration-200 ${
        isLightMode
          ? 'theme-light bg-slate-50 text-slate-900 selection:bg-cyan-200 selection:text-slate-900'
          : 'bg-slate-950 text-slate-100 selection:bg-cyan-500 selection:text-slate-950'
      }`}
    >
      {/* 3-Zone Top Navigation with Print & Theme Controls */}
      <Header
        onOpenPdf={() => setIsPdfOpen(true)}
        isLightMode={isLightMode}
        onToggleTheme={() => setIsLightMode(!isLightMode)}
      />

      {/* Main Resume Canvas */}
      <main className="flex-1 print-page">
        {/* Section I: Executive Header, Contact & Professional Summary */}
        <Hero onOpenPdf={() => setIsPdfOpen(true)} />

        {/* Section II: Chronological Work Experience (6+ Years across 7 Roles) */}
        <ExperienceTimeline />

        {/* Section III: 9 Proprietary Software Automation Systems */}
        <SoftwareShowcase />

        {/* Section IV: Telecom Competencies & Carrier Protocols */}
        <CompetenciesSection />

        {/* Section V: Education & Professional PRC Board Licensure */}
        <EducationAndLicense />

        {/* Section VI: Verified Professional References & Contact */}
        <ReferencesAndContact />
      </main>

      {/* Clean Footer */}
      <Footer onOpenPdf={() => setIsPdfOpen(true)} />

      {/* Fullscreen PDF Document Modal */}
      <PdfViewerModal isOpen={isPdfOpen} onClose={() => setIsPdfOpen(false)} />
    </div>
  );
}
