import { useEffect, useState } from 'react';
import { motion } from 'motion/react';

const MCTS_STAGES = [
  {
    id: 0,
    title: '1. Chọn nhánh (Selection)',
    desc: 'Đi từ gốc xuống các nút hứa hẹn nhất dựa trên thống kê đã tích lũy.',
    color: '#1D4ED8',
    tint: '#EFF6FF',
  },
  {
    id: 1,
    title: '2. Mở rộng (Expansion)',
    desc: 'Mở thêm nút trạng thái bàn cờ mới chưa từng được khảo sát.',
    color: '#B92B27',
    tint: '#FEF2F2',
  },
  {
    id: 2,
    title: '3. Mô phỏng / Đánh giá',
    desc: 'Chạy thử diễn biến hoặc dùng mạng nơ-ron ước lượng kết quả thắng/hòa/thua.',
    color: '#B45309',
    tint: '#FFFBEB',
  },
  {
    id: 3,
    title: '4. Cập nhật (Backpropagation)',
    desc: 'Truyền kết quả ngược lên các nút tổ tiên để điều chỉnh xác suất chọn.',
    color: '#15805D',
    tint: '#ECFDF5',
  },
];

export function MctsCycleVisual({ reducedMotion = false }: { reducedMotion?: boolean }) {
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (reducedMotion) return;
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % 4);
    }, 2200);
    return () => clearInterval(timer);
  }, [reducedMotion]);

  return (
    <div className="flex h-full flex-col justify-between p-3 text-[#171411]">
      <div className="flex items-center justify-between">
        <span className="font-mono-tech text-xs font-bold uppercase tracking-wider text-[#1D4ED8]">
          Chu trình 4 bước Monte Carlo Tree Search
        </span>
        <span className="rounded-full bg-[#EFE7D8] px-2.5 py-0.5 font-mono-tech text-[11px] font-bold text-[#4B433B]">
          Self-Play Loop
        </span>
      </div>

      <div className="my-2 grid grid-cols-2 gap-3.5">
        {MCTS_STAGES.map((stage) => {
          const isCurrent = active === stage.id;
          return (
            <motion.button
              key={stage.id}
              type="button"
              onClick={() => setActive(stage.id)}
              animate={
                reducedMotion
                  ? {}
                  : {
                      scale: isCurrent ? 1.02 : 1,
                      borderColor: isCurrent ? stage.color : '#DFD4C1',
                    }
              }
              style={{
                backgroundColor: isCurrent ? stage.tint : '#FAF6EE',
              }}
              className="flex flex-col rounded-xl border p-4 text-left transition shadow-xs"
            >
              <div className="mb-2 flex items-center justify-between">
                <span className="text-[19px] font-extrabold text-[#1A1714]">{stage.title}</span>
                <span
                  className="h-3.5 w-3.5 rounded-full"
                  style={{
                    backgroundColor: stage.color,
                    boxShadow: isCurrent ? `0 0 10px ${stage.color}` : 'none',
                  }}
                />
              </div>
              <p className="text-[18px] leading-relaxed text-[#3F3831]">{stage.desc}</p>
            </motion.button>
          );
        })}
      </div>

      {/* Animated pulse flow connecting steps 1->2->3->4 */}
      <div className="mt-1 flex items-center justify-between rounded-xl border border-[#EAE0CF] bg-[#FAF6EE] px-4 py-2.5">
        {MCTS_STAGES.map((st, idx) => (
          <div key={st.id} className="flex items-center gap-2">
            <span
              className={`flex h-6 w-6 items-center justify-center rounded-full font-mono-tech text-xs font-bold transition ${
                active === idx ? 'text-white' : 'bg-[#E5DAC8] text-[#4B433B]'
              }`}
              style={active === idx ? { backgroundColor: st.color } : undefined}
            >
              {idx + 1}
            </span>
            {idx < 3 && (
              <div className="h-1 w-8 overflow-hidden rounded bg-[#DFD4C1] sm:w-14">
                <div
                  className="h-full transition-all duration-500"
                  style={{
                    width: active > idx ? '100%' : active === idx ? '60%' : '0%',
                    backgroundColor: st.color,
                  }}
                />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
