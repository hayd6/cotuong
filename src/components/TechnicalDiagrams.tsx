import { Shield, Cpu, MessageSquare, Database, Layers, CheckCircle2, AlertTriangle, ArrowRight } from 'lucide-react';
import { AnimatedCounter } from './AnimatedCounter';

/**
 * Crisp light-mode vector architectural diagrams replacing blurry or off-topic generated images.
 * Every diagram maps directly 1:1 to facts, figures, and pipelines in FILE-1 / FILE-2 / FILE-3.
 */

export function EngineVsLlmDiagram() {
  return (
    <div className="liquid-glass flex h-full flex-col justify-between rounded-[26px] p-5 text-[#171411]">
      <div className="flex items-center justify-between">
        <span className="font-mono-tech text-xs font-extrabold uppercase tracking-wider text-[#9A6E21]">
          Kiến trúc phối hợp Engine – LLM
        </span>
        <span className="rounded-full bg-[#15805D]/12 px-2.5 py-0.5 font-mono-tech text-[11px] font-extrabold text-[#15805D]">
          Đúng nước & Dễ hiểu
        </span>
      </div>

      <svg viewBox="0 0 360 250" className="my-2 w-full flex-1">
        {/* Step 1: Engine box */}
        <rect x="16" y="18" width="328" height="68" rx="16" fill="#F2FBF7" stroke="#15805D" strokeWidth="2" />
        <text x="34" y="45" fill="#15805D" fontSize="13" fontWeight="800">1. ENGINE CHUYÊN DỤNG (Pikafish / NNUE)</text>
        <text x="34" y="68" fill="#171411" fontSize="12" fontWeight="600">Kiểm tra luật 90 điểm → Tìm sâu α–β → Chấm Eval chuẩn</text>

        {/* Connector arrow */}
        <line x1="180" y1="88" x2="180" y2="112" stroke="#B6832C" strokeWidth="3" />
        <polygon points="173,108 187,108 180,118" fill="#B6832C" />

        {/* Verification filter */}
        <rect x="70" y="118" width="220" height="32" rx="16" fill="#FFF9ED" stroke="#B6832C" strokeWidth="1.8" />
        <text x="180" y="138" textAnchor="middle" fill="#9A6E21" fontSize="11.5" fontWeight="800">
          Chuỗi biến tối ưu đã kiểm chứng
        </text>

        {/* Connector arrow */}
        <line x1="180" y1="150" x2="180" y2="170" stroke="#1D4ED8" strokeWidth="3" />
        <polygon points="173,166 187,166 180,176" fill="#1D4ED8" />

        {/* Step 2: LLM box */}
        <rect x="16" y="176" width="328" height="62" rx="16" fill="#EFF6FF" stroke="#1D4ED8" strokeWidth="2" />
        <text x="34" y="201" fill="#1D4ED8" fontSize="13" fontWeight="800">2. MÔ HÌNH NGÔN NGỮ LỚN (LLM)</text>
        <text x="34" y="222" fill="#171411" fontSize="12" fontWeight="600">Diễn giải bằng tiếng Việt: Vì sao nguy hiểm? Nên thủ thế nào?</text>
      </svg>

      <div className="rounded-2xl border border-[#DFD4C1] bg-white/80 px-4 py-2.5 text-center text-xs font-bold text-[#433C35]">
        Loại bỏ nguy cơ LLM tự bịa nước đi sai luật trên bàn cờ
      </div>
    </div>
  );
}

export function XiangqiBenchDiagram({ reducedMotion = false }: { reducedMotion?: boolean }) {
  return (
    <div className="liquid-glass flex h-full flex-col justify-between rounded-[26px] p-5 text-[#171411]">
      <div className="flex items-center justify-between">
        <span className="font-mono-tech text-xs font-extrabold uppercase tracking-wider text-[#1D4ED8]">
          Thiết kế thực nghiệm XiangqiBench (2026)
        </span>
        <span className="rounded-full bg-[#1D4ED8]/12 px-3 py-0.5 font-mono-tech text-xs font-extrabold text-[#1D4ED8]">
          119 thế cờ tàn
        </span>
      </div>

      <div className="my-3 grid grid-cols-2 gap-4">
        <div className="rounded-2xl border border-[#DFD4C1] bg-white/85 p-4">
          <div className="font-mono-tech text-xs font-extrabold uppercase text-[#685F54]">
            Quy mô khảo sát
          </div>
          <div className="mt-1 font-mono-tech text-[34px] font-extrabold text-[#171411]">
            <AnimatedCounter target={8568} reducedMotion={reducedMotion} />
          </div>
          <div className="text-sm font-bold text-[#433C35]">Tổng số lượt đi đánh giá đa bước</div>
        </div>

        <div className="rounded-2xl border border-[#15805D]/30 bg-[#F2FBF7]/90 p-4">
          <div className="font-mono-tech text-xs font-extrabold uppercase text-[#15805D]">
            Xiangqi-R1 (5M cặp · 7B)
          </div>
          <div className="mt-1 font-mono-tech text-[28px] font-extrabold text-[#15805D]">
            +18% / +22%
          </div>
          <div className="text-sm font-bold text-[#171411]">Tăng tính hợp lệ & độ chính xác</div>
        </div>
      </div>

      {/* Clear SVG comparison bars for 26.1% vs 13.9% drop-off */}
      <div className="space-y-3 rounded-2xl border border-[#E5DAC8] bg-white/80 p-4">
        <div className="text-sm font-extrabold text-[#171411]">
          Khoảng cách giữa “đúng 1 nước” và “thắng cả thế tàn cuộc”
        </div>
        <div>
          <div className="mb-1 flex justify-between text-xs font-bold text-[#433C35]">
            <span>Tìm đúng nước mở đầu tốt nhất</span>
            <span className="font-mono-tech text-[#B6832C]">26,1%</span>
          </div>
          <div className="h-4 w-full overflow-hidden rounded-full bg-[#EFE7D8]">
            <div className="h-full w-[52%] rounded-full bg-[#B6832C]" />
          </div>
        </div>
        <div>
          <div className="mb-1 flex justify-between text-xs font-bold text-[#9E231F]">
            <span>Duy trì trọn chuỗi chiến thuật đến khi thắng</span>
            <span className="font-mono-tech text-[#B92B27]">13,9%</span>
          </div>
          <div className="h-4 w-full overflow-hidden rounded-full bg-[#EFE7D8]">
            <div className="h-full w-[28%] rounded-full bg-[#B92B27]" />
          </div>
        </div>
      </div>
    </div>
  );
}

export function OpeningTaxonomyDiagram() {
  const groups = [
    {
      name: 'Khai cuộc đối công',
      color: '#B92B27',
      bg: '#FFF5F4',
      examples: ['Thuận Pháo', 'Nghịch Pháo'],
      desc: 'Cùng dùng Pháo đầu, xung đột trực diện',
    },
    {
      name: 'Khai cuộc nửa đối công',
      color: '#1D4ED8',
      bg: '#EFF6FF',
      examples: ['Bình phong Mã', 'Phản cung Mã', 'Đơn đề Mã'],
      desc: 'Tiên Pháo đầu, Hậu phản công kiềm chế',
    },
    {
      name: 'Khai cuộc phòng thủ',
      color: '#15805D',
      bg: '#F2FBF7',
      examples: ['Tiên nhân chỉ lộ', 'Phi Tượng cuộc', 'Khởi Mã cuộc'],
      desc: 'Thăm dò nhịp độ, củng cố trận địa',
    },
  ];

  return (
    <div className="liquid-glass flex h-full flex-col justify-between rounded-[26px] p-5 text-[#171411]">
      <div>
        <div className="font-mono-tech text-xs font-extrabold uppercase tracking-wider text-[#B92B27]">
          Sơ đồ phân loại AI · 23 biến nước đầu
        </div>
        <div className="mt-1 text-lg font-extrabold text-[#171411]">
          3 Hệ thống Khai cuộc Chuẩn hóa
        </div>
      </div>

      <div className="my-2 space-y-3">
        {groups.map((g) => (
          <div
            key={g.name}
            className="rounded-2xl border p-3.5"
            style={{ backgroundColor: g.bg, borderColor: `${g.color}38` }}
          >
            <div className="text-base font-extrabold" style={{ color: g.color }}>
              {g.name}
            </div>
            <div className="mt-0.5 text-sm font-medium text-[#38312B]">{g.desc}</div>
            <div className="mt-2 flex flex-wrap gap-1.5">
              {g.examples.map((ex) => (
                <span
                  key={ex}
                  className="rounded-lg bg-white px-2.5 py-0.5 text-xs font-bold text-[#171411] ring-1 ring-black/8"
                >
                  {ex}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="rounded-xl border border-[#DFD4C1] bg-white/85 px-3.5 py-2 text-center font-mono-tech text-xs font-bold text-[#5C5349]">
        Eval (Đỏ / Đen) + Xác suất Thắng – Hòa – Thua
      </div>
    </div>
  );
}

export function MidgameTacticsDiagram() {
  const quads = [
    { label: 'Vây hãm & Phong tỏa', metric: 'Khóa nút tuyến hà / chân Mã', color: '#B92B27' },
    { label: 'Thí quân & Đổi quân', metric: 'Tính sâu hậu quả qua chỉ số Eval', color: '#B45309' },
    { label: 'Tranh tiên (Tempo)', metric: 'Ưu tiên đòn "một công đôi việc"', color: '#1D4ED8' },
    { label: 'Chuyển thủ sang công', metric: 'Chớp điểm đảo chiều trên biểu đồ', color: '#15805D' },
  ];

  return (
    <div className="liquid-glass flex h-full flex-col justify-between rounded-[26px] p-5 text-[#171411]">
      <div className="font-mono-tech text-xs font-extrabold uppercase tracking-wider text-[#9A6E21]">
        Ma trận phân tích Trung cuộc AI
      </div>

      <div className="my-2 grid grid-cols-1 gap-3">
        {quads.map((q, i) => (
          <div
            key={q.label}
            className="flex items-center gap-3 rounded-2xl border border-white/90 bg-white/82 p-3.5 shadow-2xs"
          >
            <span
              className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl font-mono-tech text-sm font-extrabold text-white"
              style={{ backgroundColor: q.color }}
            >
              0{i + 1}
            </span>
            <div>
              <div className="text-base font-extrabold text-[#171411]">{q.label}</div>
              <div className="text-sm font-medium text-[#433C35]">{q.metric}</div>
            </div>
          </div>
        ))}
      </div>

      <div className="rounded-xl border border-[#E5DAC8] bg-[#FAF6EE] px-4 py-2 text-xs font-bold text-[#171411]">
        Kết hợp 16 thủ pháp chiến thuật & nhịp độ (Tempo)
      </div>
    </div>
  );
}

export function TextbookEndgame201Diagram() {
  const moves = [
    ['1.', 'X9-5', 'X4/2'],
    ['2.', 'P4/4', 'B9-8'],
    ['3.', 'X5.6', 'Tg4.1'],
    ['4.', 'P4-8', 'B8-7'],
    ['5.', 'P8.6', 'B7-6'],
    ['6.', 'P8-6', 'X4-2'],
    ['7.', 'X5/5', 'B6-5'],
    ['8.', 'X5/1', '→ Đỏ thắng (1 - 0)'],
  ];

  return (
    <div className="liquid-glass flex h-full flex-col justify-between rounded-[26px] p-4 text-[#171411]">
      <div className="border-b border-[#DFD4C1] pb-2">
        <div className="font-mono-tech text-[11px] font-extrabold uppercase text-[#B92B27]">
          Vẽ lại rõ nét · Giáo trình Cờ tướng (tr. 201)
        </div>
        <div className="text-base font-extrabold text-[#171411]">
          Biên bản chuẩn sách: Xe Pháo chiếm trung thắng Xe Chốt
        </div>
      </div>

      <div className="my-2 grid grid-cols-2 gap-2">
        {moves.map(([num, redMove, blackMove]) => (
          <div
            key={num}
            className="flex items-center justify-between rounded-xl border border-white/85 bg-white/85 px-3 py-2 font-mono-tech text-sm"
          >
            <span className="font-extrabold text-[#B6832C]">{num}</span>
            <span className="font-extrabold text-[#B92B27]">{redMove}</span>
            <span className="font-bold text-[#171411]">{blackMove}</span>
          </div>
        ))}
      </div>

      <div className="rounded-xl border border-[#15805D]/30 bg-[#F2FBF7] px-3.5 py-2 text-xs font-bold text-[#15805D]">
        Nước 1 (X9-5): Trùng khớp 100% giữa Giáo trình và Engine Xiangqi One (+6.26)
      </div>
    </div>
  );
}

export function XiangqiOneExperimentDiagram({
  onZoomOriginal,
}: {
  onZoomOriginal: () => void;
}) {
  const variations = [
    { evalStr: '+6.26', line: 'X9-5 · X4.5 · Tg5.1 · X4/7 · P4.1 · Tg4.1 · P4.1', badge: 'Tốt nhất' },
    { evalStr: '+0.29', line: 'X9.6 · Tg4.1 · X9/1 · Tg4/1 · X9-5 · X4.5 · Tg5.1', badge: 'Hòa / Kém hơn' },
    { evalStr: '+0.23', line: 'X9-1 · X4-5 · Tg5-4 · Tg4-5 · X1-4 · X5/2 · P4.2', badge: 'Mất ưu' },
  ];

  return (
    <div className="liquid-glass flex h-full flex-col justify-between rounded-[26px] p-4 text-[#171411]">
      <div className="flex items-center justify-between border-b border-[#DFD4C1] pb-2">
        <div>
          <div className="font-mono-tech text-[11px] font-extrabold uppercase text-[#15805D]">
            Vẽ lại nền sáng · Kết quả Engine Xiangqi One
          </div>
          <div className="text-base font-extrabold text-[#171411]">
            Độ sâu Depth 22 · Tốc độ 470k n/s · Eval +6.26
          </div>
        </div>
        <button
          type="button"
          onClick={onZoomOriginal}
          className="rounded-full border border-[#DFD4C1] bg-white px-3 py-1 text-xs font-extrabold text-[#171411] hover:border-[#B92B27] hover:text-[#B92B27]"
        >
          Ảnh chụp gốc
        </button>
      </div>

      <div className="my-2 space-y-2.5">
        {variations.map((v, idx) => (
          <div
            key={v.evalStr}
            className={`rounded-2xl border p-3 ${
              idx === 0
                ? 'border-[#15805D]/40 bg-[#F2FBF7]'
                : 'border-white/90 bg-white/80'
            }`}
          >
            <div className="mb-1 flex items-center justify-between">
              <span
                className={`rounded-lg px-2.5 py-0.5 font-mono-tech text-sm font-extrabold text-white ${
                  idx === 0 ? 'bg-[#15805D]' : 'bg-[#685F54]'
                }`}
              >
                {v.evalStr}
              </span>
              <span className="font-mono-tech text-[11px] font-bold text-[#5C5349]">{v.badge}</span>
            </div>
            <div className="font-mono-tech text-xs font-bold leading-snug text-[#171411]">
              {v.line}
            </div>
          </div>
        ))}
      </div>

      <div className="rounded-xl border border-[#DFD4C1] bg-[#FAF6EE] px-3.5 py-2 text-xs font-semibold text-[#38312B]">
        Chỉ duy nhất phương án <strong className="text-[#15805D]">1. X9-5</strong> thắng tuyệt đối (+6.26); các biến khác rơi xuống +0.29 / +0.23.
      </div>
    </div>
  );
}

export function XiangqiArenaMatchCard({
  onZoomOriginal,
}: {
  onZoomOriginal: () => void;
}) {
  return (
    <div className="liquid-glass flex h-full flex-col justify-between rounded-[26px] p-5 text-[#171411]">
      <div className="flex items-center justify-between border-b border-[#DFD4C1] pb-2.5">
        <div>
          <div className="font-mono-tech text-xs font-extrabold uppercase text-[#B92B27]">
            Vẽ lại rõ nét · Cơ sở dữ liệu Xiangqi Arena
          </div>
          <div className="text-lg font-extrabold text-[#171411]">
            Lữ Khâm (Đỏ) vs Triệu Hâm Hâm (Đen) · Đen thắng
          </div>
        </div>
        <button
          type="button"
          onClick={onZoomOriginal}
          className="rounded-full border border-[#DFD4C1] bg-white px-3 py-1 text-xs font-extrabold text-[#171411] hover:border-[#B92B27]"
        >
          Ảnh gốc
        </button>
      </div>

      <div className="my-3 grid grid-cols-2 gap-4">
        <div className="rounded-2xl border border-[#B92B27]/30 bg-[#FFF5F4] p-4">
          <div className="text-xs font-bold uppercase text-[#B92B27]">Độ chính xác Đỏ (Lữ Khâm)</div>
          <div className="mt-1 font-mono-tech text-[34px] font-extrabold text-[#B92B27]">93.4%</div>
        </div>
        <div className="rounded-2xl border border-[#DFD4C1] bg-white p-4">
          <div className="text-xs font-bold uppercase text-[#171411]">Độ chính xác Đen (Triệu Hâm Hâm)</div>
          <div className="mt-1 font-mono-tech text-[34px] font-extrabold text-[#171411]">95.3%</div>
        </div>
      </div>

      {/* Recreated clear evaluation curve + opening move trace */}
      <svg viewBox="0 0 420 96" className="w-full rounded-2xl border border-[#E5DAC8] bg-white p-2">
        <line x1="15" y1="48" x2="405" y2="48" stroke="#CBD5E1" strokeDasharray="4 4" />
        <path
          d="M 18 46 L 80 48 L 150 52 L 220 45 L 285 49 L 330 43 L 352 46 L 368 85 L 402 88"
          fill="none"
          stroke="#B92B27"
          strokeWidth="3"
          strokeLinecap="round"
        />
        <text x="20" y="20" fill="#433C35" fontSize="11" fontWeight="700">
          Khai cuộc chuẩn sách: 1. C2=5 h8+7 · 2. H2+3 r9=8 · 3. R1=2 h2+3 · 4. P7+1
        </text>
        <text x="255" y="76" fill="#B92B27" fontSize="11" fontWeight="800">
          Sai lầm quyết định → Đen thắng
        </text>
      </svg>
    </div>
  );
}

export function BlackBoxVsXaiDiagram() {
  return (
    <div className="liquid-glass flex h-full flex-col justify-between rounded-[26px] p-5 text-[#171411]">
      <div className="font-mono-tech text-xs font-extrabold uppercase tracking-wider text-[#B92B27]">
        Sơ đồ hạn chế diễn giải & Rủi ro ảo giác (Mục 4.2.1)
      </div>

      <div className="my-2 space-y-3">
        <div className="flex items-start gap-3 rounded-2xl border border-[#DFD4C1] bg-white/85 p-3.5">
          <Cpu className="mt-0.5 h-6 w-6 shrink-0 text-[#B45309]" />
          <div>
            <div className="text-base font-extrabold text-[#171411]">Hộp đen Engine (Pikafish, Cyclone)</div>
            <div className="text-sm text-[#433C35]">Chỉ xuất điểm số (+250) & chuỗi biến → Không giải thích lý thuyết bằng lời.</div>
          </div>
        </div>

        <div className="flex items-start gap-3 rounded-2xl border border-[#B92B27]/35 bg-[#FFF5F4] p-3.5">
          <AlertTriangle className="mt-0.5 h-6 w-6 shrink-0 text-[#B92B27]" />
          <div>
            <div className="text-base font-extrabold text-[#9E231F]">Ảo giác LLM (ChatGPT, Gemini)</div>
            <div className="text-sm text-[#38312B]">Nhầm lẫn lộ 3 / lộ 7 hoặc sinh biến vô lý do thiếu ngữ liệu tiếng Việt.</div>
          </div>
        </div>

        <div className="flex items-start gap-3 rounded-2xl border border-[#15805D]/35 bg-[#F2FBF7] p-3.5">
          <CheckCircle2 className="mt-0.5 h-6 w-6 shrink-0 text-[#15805D]" />
          <div>
            <div className="text-base font-extrabold text-[#15805D]">Yêu cầu bắt buộc</div>
            <div className="text-sm text-[#171411]">Kiểm chứng chéo trên bàn cờ cùng engine chuẩn và huấn luyện viên.</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function FairPlayShieldDiagram() {
  const layers = [
    { layer: 'Lớp 1 · Thể chế', desc: 'Cấm tuyệt đối thiết bị thu phát, xử thua & đình chỉ ngay', color: '#B92B27' },
    { layer: 'Lớp 2 · Trực tiếp', desc: 'Cổng từ, máy quét RF, độ trễ phát sóng 15 – 30 phút', color: '#B45309' },
    { layer: 'Lớp 3 · Trực tuyến', desc: 'Đo trùng khớp máy, thời gian nghĩ & 2 góc camera độc lập', color: '#1D4ED8' },
    { layer: 'Lớp 4 · Văn hóa', desc: 'Chính trực thể thao: AI ở phòng tập, trí tuệ riêng khi thi đấu', color: '#15805D' },
  ];
  return (
    <div className="liquid-glass flex h-full flex-col justify-between rounded-[26px] p-5 text-[#171411]">
      <div className="flex items-center gap-2 font-mono-tech text-xs font-extrabold uppercase tracking-wider text-[#15805D]">
        <Shield className="h-4 w-4" /> Kiến trúc 4 lớp bảo vệ công bằng
      </div>

      <div className="my-2 space-y-2.5">
        {layers.map((l) => (
          <div
            key={l.layer}
            className="rounded-2xl border border-white/90 bg-white/85 p-3.5"
            style={{ borderLeftWidth: '5px', borderLeftColor: l.color }}
          >
            <div className="text-sm font-extrabold" style={{ color: l.color }}>{l.layer}</div>
            <div className="mt-0.5 text-sm font-semibold text-[#171411]">{l.desc}</div>
          </div>
        ))}
      </div>

      <div className="rounded-xl border border-[#DFD4C1] bg-[#FAF6EE] px-3.5 py-2 text-center text-xs font-bold text-[#433C35]">
        Kết hợp đồng bộ Quy chế – Kỹ thuật – Ý thức kỳ thủ
      </div>
    </div>
  );
}

export function TrainingLoopDiagram() {
  const steps = [
    { num: 'B1', title: 'Đấu độc lập', sub: 'Không máy, ghi biên bản', color: '#1D4ED8' },
    { num: 'B2', title: 'Tự phục bàn', sub: 'Tự tìm nước mất tiên', color: '#B45309' },
    { num: 'B3', title: 'Thẩm định AI', sub: 'Pikafish / Binh Hà Ngũ Tứ', color: '#B92B27' },
    { num: 'B4', title: 'Hồ sơ sai số', sub: 'Đo tỷ lệ tương đồng/tháng', color: '#15805D' },
  ];
  return (
    <div className="liquid-glass flex h-full flex-col justify-between rounded-[26px] p-5 text-[#171411]">
      <div className="font-mono-tech text-xs font-extrabold uppercase tracking-wider text-[#1D4ED8]">
        Chu trình rèn luyện khép kín 4 bước
      </div>

      <div className="my-3 grid grid-cols-2 gap-3">
        {steps.map((s) => (
          <div
            key={s.num}
            className="flex flex-col rounded-2xl border border-white/90 bg-white/85 p-4"
            style={{ borderTopWidth: '4px', borderTopColor: s.color }}
          >
            <span className="font-mono-tech text-xs font-extrabold" style={{ color: s.color }}>
              {s.num}
            </span>
            <span className="mt-1 text-base font-extrabold text-[#171411]">{s.title}</span>
            <span className="mt-1 text-sm font-medium text-[#433C35]">{s.sub}</span>
          </div>
        ))}
      </div>

      <div className="rounded-xl border border-[#B6832C]/40 bg-[#FFF9ED] px-4 py-2.5 text-center text-xs font-extrabold text-[#9A6E21]">
        Tư duy chủ quan trước (B1–B2) → Thẩm định khách quan sau (B3–B4)
      </div>
    </div>
  );
}

export function HybridRagDiagram() {
  return (
    <div className="liquid-glass flex h-full flex-col justify-between rounded-[26px] p-5 text-[#171411]">
      <div className="font-mono-tech text-xs font-extrabold uppercase tracking-wider text-[#15805D]">
        Luồng xử lý Kiến trúc lai RAG (Mục 4.4.3)
      </div>

      <div className="my-2 space-y-3">
        <div className="rounded-2xl border border-[#1D4ED8]/35 bg-[#EFF6FF] p-3.5">
          <div className="flex items-center gap-2 font-mono-tech text-xs font-extrabold text-[#1D4ED8]">
            <Cpu className="h-4 w-4" /> GIAI ĐOẠN 1 · ENGINE THẨM ĐỊNH
          </div>
          <div className="mt-1 text-sm font-bold text-[#171411]">
            Pikafish tính toán → Nước: Xe 2 tiến 6 (+150 điểm)
          </div>
        </div>

        <div className="flex justify-center">
          <ArrowRight className="h-5 w-5 rotate-90 text-[#B6832C]" />
        </div>

        <div className="rounded-2xl border border-[#B6832C]/40 bg-[#FFF9ED] p-3.5">
          <div className="flex items-center gap-2 font-mono-tech text-xs font-extrabold text-[#9A6E21]">
            <Database className="h-4 w-4" /> TRUY XUẤT NGỮ LIỆU VIỆT NAM
          </div>
          <div className="mt-1 text-sm font-bold text-[#171411]">
            Kho PGN danh thủ + Thuật ngữ sát cục & Khai cuộc Việt
          </div>
        </div>

        <div className="flex justify-center">
          <ArrowRight className="h-5 w-5 rotate-90 text-[#15805D]" />
        </div>

        <div className="rounded-2xl border border-[#15805D]/35 bg-[#F2FBF7] p-3.5">
          <div className="flex items-center gap-2 font-mono-tech text-xs font-extrabold text-[#15805D]">
            <MessageSquare className="h-4 w-4" /> GIAI ĐOẠN 2 · LLM BÌNH GIẢNG
          </div>
          <div className="mt-1 text-sm font-bold text-[#171411]">
            Phong tỏa tuyến tốt, chặn Mã Đen thoái → Tiền đề Thiết môn xuyên
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center gap-2 rounded-xl border border-[#DFD4C1] bg-white/85 px-3 py-2 text-xs font-bold text-[#433C35]">
        <Layers className="h-4 w-4 text-[#B92B27]" />
        <span>Chính xác toán học + Diễn giải tự nhiên tiếng Việt</span>
      </div>
    </div>
  );
}
