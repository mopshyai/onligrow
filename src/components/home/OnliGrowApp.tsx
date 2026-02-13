'use client';

import { Smartphone, Globe } from 'lucide-react';

/* ── Phone Frame component ── */
function PhoneFrame({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`w-[240px] h-[480px] md:w-[280px] md:h-[560px] rounded-[40px] border-[8px] border-gray-900 bg-white shadow-2xl relative overflow-hidden ${className}`}>
      {/* Notch */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[120px] h-[28px] bg-gray-900 rounded-b-[14px] z-20" />
      {/* Screen content */}
      <div className="h-full overflow-hidden rounded-[32px] flex flex-col">
        {children}
      </div>
      {/* Bottom bar */}
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-[100px] h-1 bg-gray-300 rounded-full z-20" />
    </div>
  );
}

/* ── Student Screen ── */
function StudentScreen() {
  return (
    <div className="pt-10 px-4 pb-4 flex-1 animate-phone-scroll">
      <div className="flex items-center justify-between mb-4">
        <p className="text-sm font-bold text-gray-900">Welcome back, Arjun 👋</p>
        <div className="w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center">
          <span className="text-xs">🔔</span>
        </div>
      </div>

      {/* Progress rings */}
      <div className="flex gap-3 mb-4">
        {[
          { label: 'AI & Tech', pct: 72, color: '#6366F1' },
          { label: 'Career', pct: 45, color: '#F97316' },
          { label: 'English', pct: 68, color: '#A855F7' },
        ].map((r) => (
          <div key={r.label} className="text-center flex-1">
            <div className="w-12 h-12 mx-auto rounded-full flex items-center justify-center" style={{
              background: `conic-gradient(${r.color} ${r.pct * 3.6}deg, #f3f4f6 0deg)`
            }}>
              <div className="w-9 h-9 rounded-full bg-white flex items-center justify-center">
                <span className="text-[10px] font-bold">{r.pct}%</span>
              </div>
            </div>
            <p className="text-[9px] text-gray-500 mt-1">{r.label}</p>
          </div>
        ))}
      </div>

      {/* Today card */}
      <div className="bg-primary-50 rounded-2xl p-3 mb-3">
        <div className="flex items-center gap-2">
          <span className="text-xs">🕐</span>
          <p className="text-xs font-semibold text-primary-700">Today: Intro to ML</p>
        </div>
      </div>

      {/* Certifications */}
      <div className="flex gap-1.5 mb-3">
        {['🥉 AI', '🥉 Career', '🥈 English'].map((b) => (
          <span key={b} className="text-[9px] bg-gray-100 rounded-full px-2 py-0.5 font-medium text-gray-600">{b}</span>
        ))}
      </div>

      {/* Portfolio count */}
      <div className="bg-gray-50 rounded-xl p-2.5">
        <p className="text-xs text-gray-700 font-medium">📁 3 Projects</p>
      </div>
    </div>
  );
}

/* ── Parent Screen ── */
function ParentScreen() {
  return (
    <div className="pt-10 px-4 pb-4 flex-1 animate-phone-scroll">
      <div className="flex items-center gap-2 mb-4">
        <div className="w-8 h-8 rounded-full bg-creative-100 flex items-center justify-center text-sm">A</div>
        <p className="text-sm font-bold text-gray-900">Arjun&apos;s Progress</p>
      </div>

      {/* Attendance bar */}
      <div className="mb-3">
        <div className="flex justify-between text-[10px] text-gray-500 mb-1">
          <span>Attendance</span><span>95%</span>
        </div>
        <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
          <div className="h-full bg-success-500 rounded-full" style={{ width: '95%' }} />
        </div>
      </div>

      {/* Stats grid */}
      <div className="grid grid-cols-2 gap-2 mb-3">
        {[
          { label: 'Assignments', value: '8/10' },
          { label: 'Quizzes', value: '7/9' },
          { label: 'Attendance', value: '95%' },
          { label: 'Rank', value: '#3' },
        ].map((s) => (
          <div key={s.label} className="bg-gray-50 rounded-xl p-2 text-center">
            <p className="text-sm font-bold text-gray-900">{s.value}</p>
            <p className="text-[9px] text-gray-500">{s.label}</p>
          </div>
        ))}
      </div>

      {/* Latest badge */}
      <div className="bg-energy-50 rounded-xl p-3 mb-3">
        <p className="text-xs font-semibold text-energy-700">🥉 Bronze — AI & Technology</p>
        <p className="text-[10px] text-energy-600 mt-0.5">Earned this week 🎉</p>
      </div>

      {/* Next session */}
      <div className="bg-gray-50 rounded-xl p-2.5 mb-3">
        <p className="text-xs text-gray-700">📅 Thursday, 2:00 PM — ML Basics</p>
      </div>

      <button className="w-full bg-energy-500 text-white text-xs font-bold rounded-xl py-2.5">
        Download Report
      </button>
    </div>
  );
}

/* ── Facilitator Screen ── */
function FacilitatorScreen() {
  return (
    <div className="pt-10 px-4 pb-4 flex-1 animate-phone-scroll">
      <div className="flex items-center gap-2 mb-4">
        <span className="text-sm">📅</span>
        <p className="text-sm font-bold text-gray-900">Today — 3 Sessions</p>
      </div>

      {/* School cards */}
      {[
        { school: 'ABC Public School', grade: '9A', time: '2:00 PM', topic: 'ML Basics', status: 'Upcoming', statusColor: 'bg-energy-100 text-energy-700' },
        { school: 'XYZ Academy', grade: '10B', time: '4:00 PM', topic: 'Career Workshop', status: 'Upcoming', statusColor: 'bg-energy-100 text-energy-700' },
        { school: 'Sunrise School', grade: '8A', time: '10:00 AM', topic: 'AI Intro', status: 'Completed', statusColor: 'bg-success-100 text-success-700' },
      ].map((card) => (
        <div key={card.school} className="bg-gray-50 rounded-xl p-3 mb-2">
          <div className="flex items-center justify-between mb-1">
            <p className="text-xs font-bold text-gray-900">{card.school}</p>
            <span className="text-[9px] bg-primary-100 text-primary-700 rounded-full px-2 py-0.5 font-medium">{card.grade}</span>
          </div>
          <p className="text-[10px] text-gray-500">{card.time} — {card.topic}</p>
          <span className={`inline-block text-[9px] font-medium rounded-full px-2 py-0.5 mt-1 ${card.statusColor}`}>{card.status}</span>
        </div>
      ))}

      {/* Quick actions */}
      <div className="flex gap-2 mt-2">
        {['📋 Attendance', '📖 Session Plan', '💬 Feedback'].map((a) => (
          <span key={a} className="text-[9px] bg-gray-100 rounded-xl px-2 py-1.5 font-medium text-gray-600 flex-1 text-center">{a}</span>
        ))}
      </div>
    </div>
  );
}

export function OnliGrowApp() {
  return (
    <section className="py-20 md:py-28 bg-gradient-to-br from-creative-50/50 via-primary-50/30 to-energy-50/40 relative overflow-hidden">
      {/* Dot pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{ backgroundImage: 'radial-gradient(circle, #6366F1 1px, transparent 1px)', backgroundSize: '24px 24px' }}
      />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-success-600">
            THE APP
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3 font-heading">
            One App. Three Views.
          </h2>
          <p className="mt-4 text-gray-700 text-lg max-w-2xl mx-auto">
            Students track progress. Parents see results. Facilitators manage sessions.
            Everything connected.
          </p>
        </div>

        {/* Three phone mockups */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-10">
          {/* Student */}
          <div className="text-center">
            <PhoneFrame className="mx-auto">
              <div className="bg-primary-500 px-4 py-2 pt-8">
                <p className="text-white font-bold text-xs">🎓 Student</p>
              </div>
              <StudentScreen />
            </PhoneFrame>
            <p className="mt-4 text-sm font-semibold text-gray-700">Student View</p>
          </div>

          {/* Parent */}
          <div className="text-center md:-mt-8">
            <PhoneFrame className="mx-auto">
              <div className="bg-creative-500 px-4 py-2 pt-8">
                <p className="text-white font-bold text-xs">👨‍👩‍👧 Parent</p>
              </div>
              <ParentScreen />
            </PhoneFrame>
            <p className="mt-4 text-sm font-semibold text-gray-700">Parent View</p>
          </div>

          {/* Facilitator */}
          <div className="text-center">
            <PhoneFrame className="mx-auto">
              <div className="bg-energy-500 px-4 py-2 pt-8">
                <p className="text-white font-bold text-xs">👩‍🏫 Facilitator</p>
              </div>
              <FacilitatorScreen />
            </PhoneFrame>
            <p className="mt-4 text-sm font-semibold text-gray-700">Facilitator View</p>
          </div>
        </div>

        {/* App Store Badges Row */}
        <div className="flex flex-col sm:flex-row gap-4 items-center justify-center mt-12">
          {/* Apple — coming soon */}
          <div className="flex items-center gap-2 bg-gray-200 rounded-xl px-5 py-3 opacity-60">
            <span className="text-lg">🍎</span>
            <span className="text-gray-500 text-sm">Coming Soon on iOS</span>
          </div>

          {/* Google — coming soon */}
          <div className="flex items-center gap-2 bg-gray-200 rounded-xl px-5 py-3 opacity-60">
            <Smartphone className="w-5 h-5 text-gray-400" />
            <span className="text-gray-500 text-sm">Coming Soon on Android</span>
          </div>

          {/* PWA — available now */}
          <div className="flex items-center gap-2 bg-energy-500 rounded-xl px-5 py-3 shadow-lg shadow-energy-500/25">
            <Globe className="w-5 h-5 text-white animate-pulse" />
            <span className="text-white text-sm font-bold">Available Now — app.onligrow.com</span>
          </div>
        </div>

        <p className="text-center text-sm text-gray-500 mt-4">
          Native iOS & Android apps launching Q3 2026. Get the PWA today.
        </p>
      </div>
    </section>
  );
}
