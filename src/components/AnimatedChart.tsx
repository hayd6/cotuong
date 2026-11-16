import { motion } from 'motion/react';
import { AnimatedCounter } from './AnimatedCounter';

interface SurveyComparisonChartProps {
  reducedMotion?: boolean;
}

export function SurveyComparisonChart({ reducedMotion = false }: SurveyComparisonChartProps) {
  return (
    <div className="flex h-full flex-col justify-between p-3.5">
      <div>
        <div className="mb-1 flex items-center justify-between">
          <span className="font-mono-tech text-xs font-bold uppercase tracking-wider text-[#B92B27]">
            Biểu đồ đối chứng sau 1 tháng
          </span>
          <span className="rounded bg-[#EFE7D8] px-2 py-0.5 text-[11px] font-bold text-[#4B433B]">
            Tỷ lệ tái phạm lỗi phòng ngự
          </span>
        </div>
        <h4 className="text-[22px] font-extrabold text-[#1A1714]">
          Phụ thuộc AI tức thời vs Tư duy độc lập trước
        </h4>
      </div>

      <div className="my-5 space-y-6">
        <div>
          <div className="mb-2 flex items-baseline justify-between">
            <span className="text-[20px] font-extrabold text-[#1A1714]">
              Nhóm A (Xem ngay giải pháp AI)
            </span>
            <AnimatedCounter
              target={42.5}
              decimals={1}
              decimalComma
              suffix="%"
              reducedMotion={reducedMotion}
              className="font-mono-tech text-[34px] font-extrabold text-[#B92B27]"
            />
          </div>
          <div className="h-11 w-full overflow-hidden rounded-2xl bg-[#EFE7D8] p-1">
            <motion.div
              initial={reducedMotion ? { width: '42.5%' } : { width: '0%' }}
              animate={{ width: '42.5%' }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className="flex h-full items-center justify-end rounded-xl bg-[#B92B27] px-4 text-sm font-extrabold text-white"
            >
              42,5%
            </motion.div>
          </div>
        </div>

        <div>
          <div className="mb-2 flex items-baseline justify-between">
            <span className="text-[20px] font-extrabold text-[#1A1714]">
              Nhóm B (Tự tính toán trước khi đối chiếu)
            </span>
            <AnimatedCounter
              target={11.2}
              decimals={1}
              decimalComma
              suffix="%"
              reducedMotion={reducedMotion}
              className="font-mono-tech text-[34px] font-extrabold text-[#15805D]"
            />
          </div>
          <div className="h-11 w-full overflow-hidden rounded-2xl bg-[#EFE7D8] p-1">
            <motion.div
              initial={reducedMotion ? { width: '11.2%' } : { width: '0%' }}
              animate={{ width: '11.2%' }}
              transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="flex h-full items-center justify-end rounded-xl bg-[#15805D] px-3 text-sm font-extrabold text-white"
            >
              11,2%
            </motion.div>
          </div>
        </div>
      </div>

      <div className="rounded-2xl border border-[#EAE0CF] bg-[#FAF6EE] px-5 py-3.5 text-[18px] font-semibold leading-snug text-[#2C2722]">
        Chênh lệch <strong className="text-[#1A1714]">42,5% vs 11,2%</strong> cho thấy nỗ lực tự tính toán là điều kiện quyết định hiệu quả học cờ.
      </div>
    </div>
  );
}

export function ExperimentRatioChart({ reducedMotion = false }: { reducedMotion?: boolean }) {
  return (
    <div className="p-3.5 text-[#171411]">
      <div className="mb-2.5 flex flex-wrap items-center justify-between gap-2">
        <span className="font-mono-tech text-xs font-bold uppercase tracking-wider text-[#15805D]">
          Thống kê đối chiếu · Depth 22 · Eval +6.26
        </span>
        <span className="font-mono-tech text-xs font-bold text-[#B92B27]">X9-5: Thống nhất 100%</span>
      </div>

      <div className="mb-3 flex h-8 w-full overflow-hidden rounded-xl bg-[#EFE7D8] p-0.5">
        <motion.div
          initial={reducedMotion ? { width: '80%' } : { width: '0%' }}
          animate={{ width: '80%' }}
          transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
          className="flex h-full items-center justify-center rounded-l-lg bg-[#15805D] text-xs font-bold text-white"
        >
          80% Tương đồng định hướng khai cuộc
        </motion.div>
        <motion.div
          initial={reducedMotion ? { width: '20%' } : { width: '0%' }}
          animate={{ width: '20%' }}
          transition={{ duration: 0.85, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="flex h-full items-center justify-center rounded-r-lg bg-[#D97706] text-xs font-bold text-white"
        >
          20% Tối ưu riêng
        </motion.div>
      </div>

      <div className="grid grid-cols-3 gap-2 text-center">
        <div className="rounded-xl border border-[#EAE0CF] bg-[#FAF6EE] px-2 py-2">
          <div className="font-mono-tech text-lg font-extrabold text-[#15805D]">
            <AnimatedCounter target={6.26} decimals={2} prefix="+" reducedMotion={reducedMotion} />
          </div>
          <div className="text-[11px] font-medium text-[#5C5349]">Điểm đánh giá</div>
        </div>
        <div className="rounded-xl border border-[#EAE0CF] bg-[#FAF6EE] px-2 py-2">
          <div className="font-mono-tech text-lg font-extrabold text-[#1D4ED8]">
            Depth <AnimatedCounter target={22} reducedMotion={reducedMotion} />
          </div>
          <div className="text-[11px] font-medium text-[#5C5349]">Độ sâu tìm kiếm</div>
        </div>
        <div className="rounded-xl border border-[#EAE0CF] bg-[#FAF6EE] px-2 py-2">
          <div className="font-mono-tech text-lg font-extrabold text-[#B45309]">
            <AnimatedCounter target={80} suffix="%" reducedMotion={reducedMotion} /> /{' '}
            <AnimatedCounter target={20} suffix="%" reducedMotion={reducedMotion} />
          </div>
          <div className="text-[11px] font-medium text-[#5C5349]">Đồng nhất / Cải tiến</div>
        </div>
      </div>
    </div>
  );
}

export function AdvantageTimelineVisual({ reducedMotion = false }: { reducedMotion?: boolean }) {
  return (
    <div className="flex flex-col p-3.5">
      <div className="mb-2 flex items-center justify-between">
        <span className="font-mono-tech text-xs font-bold uppercase tracking-wider text-[#B92B27]">
          Biểu đồ lợi thế & Phát hiện sai lầm (Blunders)
        </span>
        <span className="text-[11px] font-medium text-[#6E655A]">Minh họa hình thức trực quan hóa</span>
      </div>
      <svg viewBox="0 0 460 140" className="w-full">
        <line x1="25" y1="70" x2="440" y2="70" stroke="#CBD5E1" strokeDasharray="4 4" strokeWidth="1.2" />
        <text x="8" y="25" fill="#B92B27" fontSize="10" className="font-mono-tech font-bold">+Đỏ</text>
        <text x="8" y="125" fill="#334155" fontSize="10" className="font-mono-tech font-bold">-Đen</text>

        <motion.path
          d="M 30 68 L 85 62 L 140 54 L 195 58 L 235 96 L 290 88 L 350 42 L 425 22"
          fill="none"
          stroke="#B92B27"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={reducedMotion ? { pathLength: 1 } : { pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
        />

        <circle cx="235" cy="96" r="6" fill="#D97706" stroke="#FFF" strokeWidth="2" />
        <rect x="195" y="106" width="128" height="22" rx="4" fill="#FEF3C7" stroke="#D97706" />
        <text x="259" y="121" textAnchor="middle" fill="#92400E" fontSize="10.5" fontWeight="700">
          ?? Sai lầm đảo chiều
        </text>

        <circle cx="350" cy="42" r="6" fill="#15805D" stroke="#FFF" strokeWidth="2" />
        <rect x="295" y="10" width="132" height="22" rx="4" fill="#D1FAE5" stroke="#15805D" />
        <text x="361" y="25" textAnchor="middle" fill="#065F46" fontSize="10.5" fontWeight="700">
          ! Thời điểm then chốt
        </text>
      </svg>
    </div>
  );
}
