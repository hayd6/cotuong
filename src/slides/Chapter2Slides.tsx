import { motion } from 'motion/react';
import {
  Swords,
  GraduationCap,
  ShieldAlert,
  Target,
  BookOpen,
  Scale,
  ArrowRight,
  Compass,
} from 'lucide-react';
import type { SlideDefinition } from '../data/types';
import { CH2_CONTENT } from '../data/verbatimContent';
import type { SlideRenderHandlers } from './Chapter1Slides';
import {
  SlideHeader,
  FullBleedBackdrop,
  EditorialPhotoPlate,
  DeviceMockupPlate,
  VideoPreviewPlate,
  ContentCard,
} from '../components/SlideChrome';
import { XiangqiBoardSVG } from '../components/XiangqiBoardSVG';
import { AdvantageTimelineVisual } from '../components/AnimatedChart';
import { FlowingPaths } from '../components/FlowingPaths';
import {
  OpeningTaxonomyDiagram,
  MidgameTacticsDiagram,
  XiangqiArenaMatchCard,
} from '../components/TechnicalDiagrams';
import { staggerContainer, staggerItem } from '../animations/motionPresets';

export function Slide12Ch2Training({
  slide,
  reducedMotion,
  onZoom,
  onOpenVideo,
}: SlideRenderHandlers & { slide: SlideDefinition }) {
  const c = CH2_CONTENT.s12;
  return (
    <div className="flex h-full flex-col pl-24 pr-10 pt-6 pb-16">
      <SlideHeader slide={slide} reducedMotion={reducedMotion} />

      <div className="grid min-h-0 flex-1 grid-cols-12 items-center gap-6">
        <motion.div
          variants={staggerContainer(reducedMotion)}
          initial="hidden"
          animate="visible"
          className="z-20 col-span-8 grid grid-cols-2 gap-5"
        >
          <motion.div
            variants={staggerItem(reducedMotion)}
            className="liquid-glass flex flex-col rounded-[26px] p-6"
          >
            <div className="mb-3.5 flex items-center gap-3 text-[#B92B27]">
              <Swords className="h-6 w-6" />
              <h2 className="text-[22px] font-extrabold leading-snug text-[#171411]">
                {c.b1Title}
              </h2>
            </div>
            <ul className="space-y-3 text-[20px] leading-relaxed text-[#2C2722]">
              {c.b1Items.map((it) => (
                <li
                  key={it}
                  className="flex items-start gap-3 rounded-2xl border border-white/85 bg-white/75 p-3.5"
                >
                  <span className="mt-2.5 h-2.5 w-2.5 shrink-0 rounded-full bg-[#B92B27]" />
                  <span>{it}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            variants={staggerItem(reducedMotion)}
            className="liquid-glass flex flex-col rounded-[26px] p-6"
          >
            <div className="mb-3.5 flex items-center gap-3 text-[#15805D]">
              <GraduationCap className="h-6 w-6" />
              <h2 className="text-[22px] font-extrabold leading-snug text-[#171411]">
                {c.b2Title}
              </h2>
            </div>
            <div className="space-y-3.5 text-[20px] leading-relaxed text-[#2C2722]">
              {c.b2Items.map((it) => (
                <div
                  key={it.label}
                  className="rounded-2xl border border-white/85 bg-white/75 p-4"
                >
                  <div className="text-[21px] font-extrabold text-[#15805D]">{it.label}</div>
                  <p className="mt-1.5">{it.text}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>

        <div className="col-span-4 flex h-full min-h-0 flex-col justify-between gap-3 py-1">
          <div className="min-h-0 flex-1">
            <EditorialPhotoPlate
              src="images/photo-xiangqi-students.jpg"
              caption="Hoạt động học tập và đối luyện Cờ tướng tại câu lạc bộ học đường"
              source="He JiaWei · Wikimedia Commons (CC BY-SA 2.0)"
              onZoom={onZoom}
              className="h-full"
            />
          </div>
          {slide.video && (
            <VideoPreviewPlate video={slide.video} onOpenVideo={onOpenVideo} compact />
          )}
        </div>
      </div>
    </div>
  );
}

export function Slide13Ch2ExampleOpening({
  slide,
  reducedMotion,
  onZoom,
}: SlideRenderHandlers & { slide: SlideDefinition }) {
  const c = CH2_CONTENT.s13;

  return (
    <div className="flex h-full flex-col pl-24 pr-10 pt-6 pb-16">
      <SlideHeader slide={slide} reducedMotion={reducedMotion} />

      <div className="grid min-h-0 flex-1 grid-cols-12 items-center gap-6">
        <div className="z-20 col-span-4 flex flex-col justify-center space-y-4">
          {c.items.map((it, idx) => (
            <ContentCard
              key={it.label}
              accent={['#1D4ED8', '#B45309', '#15805D'][idx]}
            >
              <div className="text-[21px] font-extrabold text-[#171411]">{it.label}</div>
              <p className="mt-1 text-[19px] leading-relaxed text-[#2C2722]">{it.text}</p>
            </ContentCard>
          ))}

          <div className="liquid-glass-warm rounded-[18px] p-4 font-mono-tech text-xs font-extrabold text-[#5C5349]">
            {c.figuresNote} · Tất cả hình được vẽ lại vector sắc nét + bấm “Ảnh gốc” để phóng to ảnh tài liệu.
          </div>
        </div>

        <div className="col-span-8 grid h-full min-h-0 grid-cols-12 items-center gap-4">
          <div className="col-span-5 flex h-full min-h-0 flex-col justify-between gap-4">
            <div className="liquid-glass min-h-0 flex-1 rounded-[22px] p-3">
              <XiangqiBoardSVG presetId="hinh-2-1" compact onZoom={onZoom} />
            </div>
            <div className="liquid-glass min-h-0 flex-1 rounded-[22px] p-3">
              <XiangqiBoardSVG presetId="hinh-2-2" compact onZoom={onZoom} />
            </div>
          </div>

          <div className="col-span-7 h-full min-h-0">
            <div className="liquid-glass h-full rounded-[26px] p-4">
              <XiangqiBoardSVG presetId="hinh-2-3" onZoom={onZoom} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function Slide14Ch2OpeningSystems({
  slide,
  reducedMotion,
}: SlideRenderHandlers & { slide: SlideDefinition }) {
  const c = CH2_CONTENT.s14;
  return (
    <div className="relative flex h-full flex-col justify-between pl-24 pr-10 pt-6 pb-16">
      <SlideHeader slide={slide} reducedMotion={reducedMotion} />

      <div className="relative z-10 grid min-h-0 flex-1 grid-cols-12 items-center gap-7">
        {/* Accurate Visual Taxonomy Tree illustrating exact 23 opening variations */}
        <div className="col-span-4 h-full min-h-0">
          <OpeningTaxonomyDiagram />
        </div>

        <div className="z-20 col-span-8 flex flex-col justify-center space-y-4">
          <div className="liquid-glass flex items-center gap-3.5 rounded-[20px] px-5 py-3.5">
            <Compass className="h-6 w-6 shrink-0 text-[#B92B27]" />
            <p className="text-[21px] font-bold text-[#171411]">{c.lead}</p>
          </div>

          <div className="liquid-glass overflow-hidden rounded-[26px]">
            <table className="w-full border-collapse text-left">
              <thead>
                <tr className="bg-white/65 text-[18px] font-extrabold text-[#171411]">
                  {c.tableHeaders.map((h) => (
                    <th key={h} className="border-b border-white/80 px-5 py-3.5">
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-white/60 text-[19px]">
                {c.tableRows.map((row, rIdx) => (
                  <tr key={row[0]}>
                    <td
                      className="px-5 py-4 font-extrabold"
                      style={{ color: ['#B92B27', '#1D4ED8', '#15805D'][rIdx] }}
                    >
                      {row[0]}
                    </td>
                    <td className="px-5 py-4 leading-snug text-[#2C2722]">{row[1]}</td>
                    <td className="px-5 py-4 font-bold text-[#171411]">{row[2]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="liquid-glass-warm rounded-[20px] border border-[#15805D]/35 bg-[#EFFCF6]/85 px-5 py-3.5 text-[20px] font-bold leading-snug text-[#15805D]">
            {c.outro}
          </div>
        </div>
      </div>
    </div>
  );
}

export function Slide15Ch2OpeningOptimize({
  slide,
  reducedMotion,
  onZoom,
}: SlideRenderHandlers & { slide: SlideDefinition }) {
  const c = CH2_CONTENT.s15;
  const icons = [Target, ShieldAlert, BookOpen];
  const accents = ['#15805D', '#B92B27', '#1D4ED8'];

  return (
    <div className="relative flex h-full flex-col justify-between pl-24 pr-10 pt-6 pb-16">
      <SlideHeader slide={slide} reducedMotion={reducedMotion} />

      <div className="relative z-10 grid min-h-0 flex-1 grid-cols-12 items-center gap-7">
        <div className="col-span-7 flex flex-col justify-center space-y-4">
          {c.items.map((it, idx) => {
            const Icon = icons[idx];
            return (
              <motion.div
                key={it.label}
                initial={reducedMotion ? undefined : { opacity: 0, x: -16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.08 }}
                className="liquid-glass rounded-[24px] p-5"
                style={{
                  boxShadow: `inset 5px 0 0 ${accents[idx]}, inset 0 1.5px 1px #fff, 0 20px 50px -12px rgba(26,23,20,0.12)`,
                }}
              >
                <div className="mb-2 flex items-center gap-3">
                  <span
                    className="flex h-10 w-10 items-center justify-center rounded-xl"
                    style={{ backgroundColor: `${accents[idx]}16`, color: accents[idx] }}
                  >
                    <Icon className="h-5 w-5" />
                  </span>
                  <h2 className="text-[22px] font-extrabold text-[#171411]">{it.label}</h2>
                </div>
                <p className="text-[20px] leading-relaxed text-[#2C2722]">{it.text}</p>
              </motion.div>
            );
          })}
        </div>

        {/* Real HD Xiangqi.com Depth 30 screenshot showing best move arrow & opening variations */}
        <div className="col-span-5 h-full min-h-0 py-1">
          <DeviceMockupPlate
            src="images/hinh-2-3-xiangqicom-xe1-binh2.png"
            domain="xiangqi.com · Depth 30 Analysis"
            caption="Ví dụ phân tích khai cuộc trên Xiangqi.com: hiển thị biến tối ưu, điểm số và lịch sử nước đi"
            source="Ảnh chụp thực nghiệm (FILE-1)"
            badge="Depth 30"
            onZoom={onZoom}
            className="h-full"
          />
        </div>
      </div>
    </div>
  );
}

export function Slide16Ch2ExampleTienNhan({
  slide,
  reducedMotion,
  onZoom,
  onOpenVideo,
}: SlideRenderHandlers & { slide: SlideDefinition }) {
  const c = CH2_CONTENT.s16;

  return (
    <div className="flex h-full flex-col pl-24 pr-10 pt-6 pb-16">
      <SlideHeader slide={slide} reducedMotion={reducedMotion} />

      <div className="grid min-h-0 flex-1 grid-cols-12 items-center gap-6">
        <div className="z-20 col-span-5 flex flex-col justify-center space-y-3.5">
          {c.items.map((it, idx) => (
            <ContentCard
              key={it.label}
              accent={['#B45309', '#15805D', '#B92B27'][idx]}
            >
              <div className="text-[20px] font-extrabold text-[#171411]">{it.label}</div>
              <p className="mt-1 text-[19px] leading-snug text-[#2C2722]">{it.text}</p>
            </ContentCard>
          ))}

          {slide.video && (
            <VideoPreviewPlate video={slide.video} onOpenVideo={onOpenVideo} compact />
          )}
        </div>

        <div className="col-span-7 grid h-full min-h-0 grid-cols-2 gap-4">
          <div className="liquid-glass h-full min-h-0 rounded-[24px] p-4">
            <XiangqiBoardSVG presetId="hinh-2-4" onZoom={onZoom} />
          </div>
          <div className="liquid-glass h-full min-h-0 rounded-[24px] p-4">
            <XiangqiBoardSVG presetId="hinh-2-5" onZoom={onZoom} />
          </div>
        </div>
      </div>
    </div>
  );
}

export function Slide17Ch2MidgameAttackDefense({
  slide,
  reducedMotion,
  onZoom,
}: SlideRenderHandlers & { slide: SlideDefinition }) {
  const c = CH2_CONTENT.s17;
  const accents = ['#B92B27', '#B45309', '#1D4ED8', '#15805D'];
  return (
    <div className="flex h-full flex-col pl-24 pr-10 pt-6 pb-16">
      <SlideHeader slide={slide} reducedMotion={reducedMotion} />

      <div className="grid min-h-0 flex-1 grid-cols-12 items-center gap-6">
        <div className="col-span-4 h-full min-h-0 py-1">
          <EditorialPhotoPlate
            src="images/photo-xiangqi-sunlight.jpg"
            caption="Cục diện trung cuộc đòi hỏi tính toán chính xác mối liên kết Xe – Pháo – Mã"
            source="Jacob Ehnmark · Wikimedia Commons (CC BY 2.0)"
            onZoom={onZoom}
            className="h-full"
          />
        </div>

        <motion.div
          variants={staggerContainer(reducedMotion)}
          initial="hidden"
          animate="visible"
          className="z-20 col-span-8 grid grid-cols-2 gap-5"
        >
          {c.items.map((it, idx) => (
            <motion.div key={it.label} variants={staggerItem(reducedMotion)}>
              <ContentCard accent={accents[idx]} className="h-full">
                <div className="mb-1.5 font-mono-tech text-xs font-extrabold uppercase text-[#9A6E21]">
                  Phân tích 0{idx + 1}
                </div>
                <h2 className="text-[22px] font-extrabold text-[#171411]">{it.label}</h2>
                <p className="mt-2 text-[20px] leading-relaxed text-[#2C2722]">{it.text}</p>
              </ContentCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

export function Slide18Ch2MidgameTactics({
  slide,
  reducedMotion,
}: SlideRenderHandlers & { slide: SlideDefinition }) {
  const c = CH2_CONTENT.s18;
  return (
    <div className="flex h-full flex-col pl-24 pr-10 pt-6 pb-16">
      <SlideHeader slide={slide} reducedMotion={reducedMotion} />

      <div className="grid min-h-0 flex-1 grid-cols-12 items-center gap-7">
        <div className="z-20 col-span-8">
          <div className="liquid-glass overflow-hidden rounded-[28px]">
            <table className="w-full border-collapse text-left">
              <thead>
                <tr className="bg-white/65 text-[19px] font-extrabold text-[#171411]">
                  {c.tableHeaders.map((h) => (
                    <th key={h} className="border-b border-white/80 px-5 py-4">
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-white/65 text-[19px]">
                {c.tableRows.map((row, idx) => (
                  <tr key={row[0]}>
                    <td
                      className="px-5 py-4.5 font-extrabold"
                      style={{ color: ['#B92B27', '#B45309', '#1D4ED8', '#15805D'][idx] }}
                    >
                      {row[0]}
                    </td>
                    <td className="px-5 py-4.5 leading-snug text-[#2C2722]">{row[1]}</td>
                    <td className="px-5 py-4.5 font-semibold leading-snug text-[#171411]">
                      {row[2]}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="col-span-4 h-full min-h-0">
          <MidgameTacticsDiagram />
        </div>
      </div>
    </div>
  );
}

export function Slide19Ch2ExampleTranhTien({
  slide,
  reducedMotion,
  onZoom,
}: SlideRenderHandlers & { slide: SlideDefinition }) {
  const c = CH2_CONTENT.s19;
  return (
    <div className="flex h-full flex-col pl-24 pr-10 pt-6 pb-16">
      <SlideHeader slide={slide} reducedMotion={reducedMotion} />

      <div className="grid min-h-0 flex-1 grid-cols-12 items-center gap-6">
        <div className="z-20 col-span-5 flex flex-col justify-center space-y-3.5">
          {c.items.map((it, idx) => (
            <ContentCard
              key={it.label}
              accent={['#1D4ED8', '#15805D', '#B92B27'][idx]}
            >
              <div className="text-[20px] font-extrabold text-[#171411]">{it.label}</div>
              <p className="mt-1 text-[19px] leading-snug text-[#2C2722]">{it.text}</p>
            </ContentCard>
          ))}

          <div className="liquid-glass rounded-[22px] p-1">
            <AdvantageTimelineVisual reducedMotion={reducedMotion} />
          </div>
        </div>

        {/* BOTH Hình 2.6 and Hình 2.7 redrawn crisp side-by-side in vector SVG! */}
        <div className="col-span-7 grid h-full min-h-0 grid-cols-2 gap-4">
          <div className="liquid-glass h-full min-h-0 rounded-[24px] p-4">
            <XiangqiBoardSVG presetId="hinh-2-6" onZoom={onZoom} />
          </div>
          <div className="liquid-glass h-full min-h-0 rounded-[24px] p-4">
            <XiangqiBoardSVG presetId="hinh-2-7" onZoom={onZoom} />
          </div>
        </div>
      </div>
    </div>
  );
}

export function Slide20Ch2Endgame({
  slide,
  reducedMotion,
  onZoom,
}: SlideRenderHandlers & { slide: SlideDefinition }) {
  const c = CH2_CONTENT.s20;
  return (
    <div className="relative flex h-full flex-col pl-24 pr-10 pt-6 pb-16">
      <SlideHeader slide={slide} reducedMotion={reducedMotion} />

      <div className="relative z-10 grid min-h-0 flex-1 grid-cols-12 items-center gap-7">
        <div className="z-20 col-span-5 flex flex-col justify-center space-y-4">
          {c.items.map((it, idx) => (
            <ContentCard
              key={it.label}
              accent={['#1D4ED8', '#15805D', '#B92B27'][idx]}
            >
              <div className="mb-1 flex items-center gap-2.5 text-[21px] font-extrabold text-[#171411]">
                <Scale className="h-5 w-5 text-[#B6832C]" />
                <span>{it.label}</span>
              </div>
              <p className="text-[19px] leading-relaxed text-[#2C2722]">{it.text}</p>
            </ContentCard>
          ))}
        </div>

        <div className="col-span-7 grid h-full min-h-0 grid-cols-12 items-center gap-4">
          <div className="liquid-glass col-span-6 h-full min-h-0 rounded-[26px] p-4">
            <XiangqiBoardSVG presetId="tan-cuoc-xe-phao" onZoom={onZoom} />
          </div>
          <div className="col-span-6 h-[74%]">
            <DeviceMockupPlate
              src="images/tan-cuoc-xe-phao-pikafish-chessdb.png"
              domain="pikafish.org · Endgame ChessDB"
              caption="Pikafish & ChessDB xác nhận Xe 9 bình 5 — Đỏ chiếu bí sau 27 nước"
              source="Thực nghiệm Pikafish Web"
              badge="Chiếu bí 27 nước"
              onZoom={onZoom}
              className="h-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export function Slide21Ch2Puzzles({
  slide,
  reducedMotion,
  onZoom,
}: SlideRenderHandlers & { slide: SlideDefinition }) {
  const c = CH2_CONTENT.s21;

  return (
    <div className="flex h-full flex-col pl-24 pr-10 pt-6 pb-16">
      <SlideHeader slide={slide} reducedMotion={reducedMotion} />

      <div className="grid min-h-0 flex-1 grid-cols-12 items-center gap-6">
        <motion.div
          variants={staggerContainer(reducedMotion)}
          initial="hidden"
          animate="visible"
          className="z-20 col-span-5 flex flex-col justify-center space-y-4"
        >
          {c.items.map((it, idx) => (
            <motion.div key={it.label} variants={staggerItem(reducedMotion)}>
              <ContentCard accent={['#1D4ED8', '#15805D', '#B92B27'][idx]}>
                <div className="text-[22px] font-extrabold text-[#171411]">{it.label}</div>
                <p className="mt-1.5 text-[20px] leading-relaxed text-[#2C2722]">{it.text}</p>
              </ContentCard>
            </motion.div>
          ))}
        </motion.div>

        <div className="col-span-7 grid h-full min-h-0 grid-cols-12 items-center gap-4">
          <div className="liquid-glass col-span-6 h-full min-h-0 rounded-[26px] p-4">
            <XiangqiBoardSVG presetId="tieu-xa-ma" onZoom={onZoom} />
          </div>

          <div className="col-span-6 h-[78%]">
            <DeviceMockupPlate
              src="images/co-the-tieu-xa-ma-pikafish.png"
              domain="pikafish.org · ChessDB Solver"
              caption="Pikafish & ChessDB: Tiểu Xa Mã — Đỏ chiếu bí sau 27 nước"
              source="Thực nghiệm Pikafish Web"
              badge="ChessDB"
              onZoom={onZoom}
              className="h-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export function Slide22Ch2GameReview({
  slide,
  reducedMotion,
  onZoom,
}: SlideRenderHandlers & { slide: SlideDefinition }) {
  const c = CH2_CONTENT.s22;
  return (
    <div className="flex h-full flex-col pl-24 pr-10 pt-6 pb-16">
      <SlideHeader slide={slide} reducedMotion={reducedMotion} />

      <div className="grid min-h-0 flex-1 grid-cols-12 items-center gap-7">
        <div className="z-20 col-span-6 flex flex-col justify-center space-y-4">
          {c.items.map((it, idx) => (
            <ContentCard
              key={it.label}
              accent={['#1D4ED8', '#B92B27', '#15805D'][idx]}
            >
              <div className="text-[22px] font-extrabold text-[#171411]">{it.label}</div>
              <p className="mt-1.5 text-[20px] leading-relaxed text-[#2C2722]">{it.text}</p>
            </ContentCard>
          ))}
        </div>

        <div className="col-span-6 flex h-full min-h-0 flex-col justify-center space-y-4">
          <div className="liquid-glass rounded-[26px] p-5">
            <div className="mb-2 flex items-center justify-between">
              <span className="font-mono-tech text-xs font-extrabold uppercase text-[#1D4ED8]">
                Nghiên cứu Xiangqi-R1 · Học tăng cường & Biên bản PGN
              </span>
              <button
                type="button"
                onClick={() =>
                  onZoom({
                    src: 'images/xiangqi-r1-github.png',
                    caption: 'Kho mã nguồn Xiangqi-R1 (5 triệu cặp nước đi, mô hình 7B)',
                    source: 'FILE-1.docx / GitHub Xiangqi-R1',
                  })
                }
                className="rounded-full border border-[#DFD4C1] bg-white px-3 py-1 text-xs font-extrabold text-[#171411] hover:border-[#B92B27]"
              >
                Ảnh GitHub gốc
              </button>
            </div>

            <div className="grid grid-cols-3 gap-3 text-center">
              <div className="rounded-2xl border border-[#DFD4C1] bg-white/85 p-3">
                <div className="font-mono-tech text-[26px] font-extrabold text-[#1D4ED8]">5M</div>
                <div className="text-xs font-bold text-[#433C35]">Cặp nước đi huấn luyện</div>
              </div>
              <div className="rounded-2xl border border-[#DFD4C1] bg-white/85 p-3">
                <div className="font-mono-tech text-[26px] font-extrabold text-[#B92B27]">7B</div>
                <div className="text-xs font-bold text-[#433C35]">Tham số mô hình LLM</div>
              </div>
              <div className="rounded-2xl border border-[#DFD4C1] bg-white/85 p-3">
                <div className="font-mono-tech text-[26px] font-extrabold text-[#15805D]">+22%</div>
                <div className="text-xs font-bold text-[#433C35]">Chính xác không gian</div>
              </div>
            </div>
          </div>

          <div className="liquid-glass rounded-[26px] p-2">
            <AdvantageTimelineVisual reducedMotion={reducedMotion} />
          </div>
        </div>
      </div>
    </div>
  );
}

export function Slide23Ch2TournamentPrep({
  slide,
  reducedMotion,
  onZoom,
}: SlideRenderHandlers & { slide: SlideDefinition }) {
  const c = CH2_CONTENT.s23;
  return (
    <div className="flex h-full flex-col pl-24 pr-10 pt-6 pb-16">
      <SlideHeader slide={slide} reducedMotion={reducedMotion} />

      <div className="flex flex-1 flex-col justify-center space-y-4">
        <div className="grid grid-cols-12 items-center gap-6">
          <div className="z-20 col-span-5 flex flex-col space-y-3.5">
            {c.items.slice(0, 2).map((it, idx) => (
              <ContentCard
                key={it.label}
                accent={idx === 0 ? '#1D4ED8' : '#B92B27'}
              >
                <div className="text-[21px] font-extrabold text-[#171411]">{it.label}</div>
                <p className="mt-1 text-[19px] leading-snug text-[#2C2722]">{it.text}</p>
              </ContentCard>
            ))}

            <ContentCard accent="#15805D" variant="tinted">
              <div className="text-[20px] font-extrabold text-[#15805D]">{c.items[2].label}</div>
              <p className="mt-1 text-[18px] font-semibold leading-snug text-[#171411]">
                {c.items[2].text}
              </p>
            </ContentCard>
          </div>

          {/* Crisp Vector Match Card replacing blurry 539x409 screenshot, keeping zoom to original */}
          <div className="col-span-7 h-[355px]">
            <XiangqiArenaMatchCard
              onZoomOriginal={() =>
                onZoom({
                  src: 'images/xiangqi-arena-lu-kham-trieu-ham-ham.png',
                  caption: 'CSDL kỳ phổ Xiangqi Arena: Lữ Khâm vs Triệu Hâm Hâm',
                  source: 'FILE-1.docx (Xiangqi Arena)',
                })
              }
            />
          </div>
        </div>

        <FlowingPaths
          title="Quy trình chuẩn bị thi đấu chuyên nghiệp"
          nodes={[
            { id: 'prep-1', label: '01 · Thu thập ván đấu', sublabel: 'Từ Xiangqi Arena', accent: '#1D4ED8' },
            { id: 'prep-2', label: '02 · Phân tích đối thủ', sublabel: 'Nhận diện khai cuộc', accent: '#B45309' },
            { id: 'prep-3', label: '03 · Thử nghiệm bằng AI', sublabel: 'Kiểm chứng biến đối phó', accent: '#B92B27' },
            { id: 'prep-4', label: '04 · Chốt chiến thuật', sublabel: 'Tối ưu thi đấu', accent: '#15805D' },
          ]}
          reducedMotion={reducedMotion}
        />
      </div>
    </div>
  );
}

export function Slide24Ch2Conclusion({
  slide,
  reducedMotion,
  ambientPaused = false,
}: SlideRenderHandlers & { slide: SlideDefinition }) {
  const c = CH2_CONTENT.s24;
  return (
    <div className="relative flex h-full flex-col justify-between pl-24 pr-10 pt-6 pb-16">
      <FullBleedBackdrop
        src="images/photo-xiangqi-thinking.jpg"
        fadeDirection="left"
        ambientPaused={ambientPaused}
        imageOpacity={0.9}
      />

      <SlideHeader slide={slide} reducedMotion={reducedMotion} />

      <div className="relative z-10 flex flex-1 items-center">
        <div className="z-20 flex max-w-4xl flex-col justify-center space-y-4">
          {c.items.map((it, idx) => (
            <motion.div
              key={it.label}
              initial={reducedMotion ? undefined : { opacity: 0, x: -18 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.12 }}
            >
              <ContentCard accent={['#15805D', '#B92B27', '#1D4ED8'][idx]}>
                <div className="flex items-center gap-3 text-[23px] font-extrabold text-[#171411]">
                  <ArrowRight className="h-6 w-6 text-[#B6832C]" />
                  <span>{it.label}</span>
                </div>
                <p className="mt-1.5 text-[21px] leading-relaxed text-[#2C2722]">{it.text}</p>
              </ContentCard>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
