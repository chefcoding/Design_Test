/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { Phone, Clock, MapPin, ChevronRight, CheckCircle2, Star } from "lucide-react";

const treatments = [
  {
    title: "여드름 클리닉",
    description: "원인 분석부터 흉터 케어까지 완벽한 솔루션",
    icon: "✨",
    color: "bg-[#F1EDE4]",
  },
  {
    title: "프리미엄 레이저",
    description: "최첨단 장비를 이용한 피부 톤 개선 및 색소 치료",
    icon: "⚡",
    color: "bg-[#E8F0FE]",
  },
  {
    title: "보톡스/필러",
    description: "자연스러운 볼륨감과 주름 개선을 위한 정밀 시술",
    icon: "💉",
    color: "bg-[#F5F1FF]",
  },
];

export default function App() {
  return (
    <div className="min-h-screen bg-sleek-bg text-sleek-ink font-sans selection:bg-sleek-gold selection:text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-sleek-line">
        <div className="max-w-7xl mx-auto px-12 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-sleek-gold rounded-full flex items-center justify-center">
              <div className="w-4 h-4 border-2 border-white rounded-sm rotate-45"></div>
            </div>
            <div className="font-bold text-xl tracking-tight text-[#1A1A1A]">
              강남 글로우 피부과
            </div>
          </div>
          <div className="hidden md:flex space-x-10 text-sm font-medium text-sleek-muted">
            <a href="#about" className="hover:text-sleek-gold transition-colors">병원소개</a>
            <a href="#treatments" className="hover:text-sleek-gold transition-colors">진료안내</a>
            <a href="#info" className="hover:text-sleek-gold transition-colors">이용정보</a>
            <a href="tel:02-XXX-XXXX" className="text-sleek-gold font-bold">상담문의</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header id="about" className="pt-40 pb-24 px-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-6"
          >
            <div className="inline-block px-3 py-1 bg-sleek-badge-bg text-sleek-badge-text text-xs font-semibold rounded-full tracking-wider">
              PREMIUM SKINCARE CLINIC
            </div>
            <h1 className="text-5xl md:text-6xl font-bold leading-tight text-[#1A1A1A]">
              당신의 본연의<br />
              <span className="text-sleek-gold">아름다움을 디자인</span>합니다
            </h1>
            <p className="text-sleek-muted leading-relaxed text-lg max-w-lg">
              강남역 중심, 숙련된 의료진의 1:1 맞춤 진료로<br />
              가장 건강하고 맑은 피부를 선사합니다.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button className="px-8 py-4 bg-[#1A1A1A] text-white rounded-xl font-bold shadow-lg hover:bg-[#333] transition-all transform hover:scale-[1.02] active:scale-[0.98]">
                상담 예약하기
              </button>
              <button className="px-8 py-4 border border-sleek-line bg-white text-[#1A1A1A] rounded-xl font-bold hover:bg-gray-50 transition-all">
                진료 안내
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {treatments.map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className={`p-8 bg-white rounded-3xl shadow-sm border border-sleek-line space-y-3 ${i % 2 === 1 ? 'sm:mt-8' : ''}`}
              >
                <div className={`w-10 h-10 ${t.color} rounded-lg flex items-center justify-center text-xl`}>
                  {t.icon}
                </div>
                <h3 className="text-xl font-bold">{t.title}</h3>
                <p className="text-sm text-[#9CA3AF] leading-relaxed">
                  {t.description}
                </p>
              </motion.div>
            ))}
            <div className="p-8 bg-sleek-gold rounded-3xl shadow-lg space-y-3 sm:mt-8 text-white flex flex-col justify-center">
              <h3 className="text-xl font-bold">상담 문의</h3>
              <p className="text-2xl font-black">02-XXX-XXXX</p>
              <p className="text-xs opacity-80 uppercase tracking-widest font-medium">카카오톡: @강남글로우피부과</p>
            </div>
          </motion.div>
        </div>
      </header>

      {/* Information Section */}
      <section id="info" className="py-24 px-12 border-t border-sleek-line bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-10">
              <div className="space-y-4">
                <div className="inline-block px-3 py-1 bg-sleek-badge-bg text-sleek-badge-text text-[10px] font-bold rounded uppercase tracking-widest">
                  Contact Details
                </div>
                <h2 className="text-4xl font-bold tracking-tight">병원 안내</h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="space-y-2">
                  <p className="text-[10px] uppercase tracking-widest text-[#9CA3AF] font-bold">Working Hours</p>
                  <div className="space-y-1">
                    <p className="text-sm font-medium"><span className="text-sleek-gold font-bold">평일</span> 10:00 - 19:00</p>
                    <p className="text-sm font-medium"><span className="text-sleek-gold font-bold">토요일</span> 10:00 - 14:00</p>
                    <p className="text-xs text-[#9CA3AF] italic">일요일 및 공휴일 휴진</p>
                  </div>
                </div>
                <div className="space-y-2">
                  <p className="text-[10px] uppercase tracking-widest text-[#9CA3AF] font-bold">Location</p>
                  <p className="text-sm font-medium leading-relaxed">
                    서울특별시 강남구 강남대로 XXX길 XX <br />
                    리움타워 5층 (강남역 X번 출구)
                  </p>
                </div>
              </div>
            </div>

            <div className="relative p-10 bg-sleek-bg rounded-[40px] border border-sleek-line space-y-6">
              <h3 className="text-2xl font-bold mb-4 italic">Professional Philosophy</h3>
              <ul className="space-y-4">
                {[
                  "정품·정량 시술 원칙 준수",
                  "개개인의 피부 특성에 맞는 1:1 맞춤 진단",
                  "풍부한 임상 경험을 보유한 전문의 직접 시술",
                  "체계적인 사후 관리 프로그램 운영"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center space-x-3">
                    <CheckCircle2 size={18} className="text-sleek-gold shrink-0" />
                    <span className="text-sm font-medium text-sleek-muted">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="pt-6 border-t border-sleek-line">
                <p className="text-xs text-sleek-muted font-medium">당신의 본연의 아름다움이 가장 밝게 빛날 수 있도록 지원합니다.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full bg-white border-t border-sleek-line py-12 px-12">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-10">
            <div>
              <p className="text-[10px] uppercase tracking-widest text-[#9CA3AF] mb-1 font-bold">Copyright</p>
              <p className="text-xs text-[#9CA3AF]">© 2026 Gangnam Glow Dermatology. All Rights Reserved.</p>
            </div>
          </div>
          <div className="flex gap-8 text-[11px] font-bold uppercase tracking-widest text-sleek-muted">
            <a href="#" className="hover:text-sleek-gold transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-sleek-gold transition-colors">Terms of Service</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
