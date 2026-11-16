import { motion } from 'motion/react';
import {
  Cpu,
  CheckCircle2,
  AlertCircle,
  Compass,
  Terminal,
  BookOpen,
} from 'lucide-react';
import type { SlideDefinition } from '../data/types';
import { CH3_CONTENT } from '../data/verbatimContent';
import type { SlideRenderHandlers } from './Chapter1Slides';
import {
  SlideHeader,
  FullBleedBackdrop,
  EditorialPhotoPlate,
  DeviceMockupPlate,
  ContentCard,
} from '../components/SlideChrome';
import { ExperimentRatioChart } from '../components/AnimatedChart';
import { TiltPlate } from '../components/cinematic/TiltPlate';
import { assetUrl } from '../utils/assets';
import { staggerContainer, staggerItem } from '../animations/motionPresets';

export function Slide25Ch3Cover({
  slide,
  reducedMotion,
  ambientPaused = false,
}: SlideRenderHandlers & { slide: SlideDefinition }) {
  const c = CH3_CONTENT.s25;
  const logos = [
    { name: 'Pikafish', role: 'Engine tính toán NNUE mã nguồn mở', src: 'images/logo-pikafish.png' },
    { name: 'Xiangqi One', role: 'Nền tảng phân tích trình duyệt tích hợp', src: 'images/logo-xiangqi-one.jpg' },
    { name: 'Xiangqi.com', role: 'Hệ sinh thái thi đấu & học tập trực tuyến', src: 'images/logo-xiangqi-com.png' },
  ];

  return (
    <div className="relative flex h-full flex-col justify-between pl-24 pr-10 pt-6 pb-16">
      <FullBleedBackdrop
        src="images/hero-ch3-endgame.jpg"
        fadeDirection="bottom"
        ambientPaused={ambientPaused}
        imageOpacity={0.55}
      />

      <SlideHeader slide={slide} titleOverride={c.heading} reducedMotion={reducedMotion} />

      <div className="relative z-10 flex flex-1 flex-col justify-center space-y-6">
        <div className="parallax-mid grid grid-cols-3 gap-6">
          {logos.map((logo, idx) => (
            <TiltPlate key={logo.name} disabled={reducedMotion} maxTiltDeg={5}>
              <motion.div
                initial={reducedMotion ? undefined : { opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="liquid-glass flex flex-col items-center rounded-[28px] p-6 text-center"
              >
                <div className="mb-3 flex h-24 w-48 items-center justify-center overflow-hidden rounded-2xl border border-white/90 bg-white/85 p-2 shadow-xs">
                  <img
                    src={assetUrl(logo.src)}
                    alt={`Logo ${logo.name}`}
                    className="h-full w-full object-contain"
                  />
                </div>
                <div className="text-[24px] font-extrabold text-[#171411]">{logo.name}</div>
                <div className="mt-1 text-[17px] font-semibold text-[#5C5349]">{logo.role}</div>
              </motion.div>
            </TiltPlate>
          ))}
        </div>

        <div className="parallax-fg grid grid-cols-3 gap-6">
          {c.items.map((item, idx) => (
            <motion.div
              key={item}
              initial={reducedMotion ? undefined : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.22 + idx * 0.08 }}
              className="liquid-glass rounded-[26px] p-6"
              style={{
                boxShadow: `inset 0 5px 0 ${['#B92B27', '#1D4ED8', '#15805D'][idx]}, inset 0 1.5px 1px #fff, 0 20px 50px -12px rgba(26,23,20,0.12)`,
              }}
            >
              <div className="mb-2 font-mono-tech text-xs font-extrabold uppercase text-[#B92B27]">
                Nội dung trọng tâm 0{idx + 1}
              </div>
              <p className="text-[21px] font-bold leading-relaxed text-[#171411]">{item}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function Slide26Ch3Pikafish({
  slide,
  reducedMotion,
  onZoom,
}: SlideRenderHandlers & { slide: SlideDefinition }) {
  const c = CH3_CONTENT.s26;
  return (
    <div className="flex h-full flex-col pl-24 pr-10 pt-6 pb-16">
      <SlideHeader slide={slide} reducedMotion={reducedMotion} />

      <div className="grid min-h-0 flex-1 grid-cols-12 items-center gap-7">
        <motion.div
          variants={staggerContainer(reducedMotion)}
          initial="hidden"
          animate="visible"
          className="parallax-fg z-20 col-span-5 flex flex-col justify-center space-y-4"
        >
          <motion.div
            variants={staggerItem(reducedMotion)}
            className="liquid-glass flex items-center gap-4 rounded-[26px] p-5"
          >
            <img
              src={assetUrl('images/logo-pikafish.png')}
              alt="Logo Pikafish"
              className="h-20 w-20 rounded-2xl border border-white/90 bg-white/85 p-1.5 object-contain shadow-xs"
            />
            <div>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-[#B92B27]/12 px-3 py-0.5 font-mono-tech text-xs font-bold text-[#B92B27]">
                <Cpu className="h-3.5 w-3.5" /> Engine chuyên dụng
              </span>
              <h2 className="mt-1.5 text-[23px] font-extrabold leading-tight text-[#171411]">
                {c.title}
              </h2>
            </div>
          </motion.div>

          {c.bullets.map((b, idx) => (
            <motion.div key={b} variants={staggerItem(reducedMotion)}>
              <ContentCard accent={idx === 0 ? '#15805D' : '#B45309'}>
                <p className="text-[22px] font-semibold leading-relaxed text-[#171411]">{b}</p>
              </ContentCard>
            </motion.div>
          ))}

          <div className="liquid-glass-warm flex items-start gap-3 rounded-[20px] p-4.5 text-[19px] font-bold text-[#433C35]">
            <Terminal className="mt-0.5 h-6 w-6 shrink-0 text-[#B6832C]" />
            <span>Hoạt động như lõi tính toán (UCI Engine), cần GUI để người chơi tương tác trực quan.</span>
          </div>
        </motion.div>

        <div className="parallax-mid col-span-7 h-full min-h-0 py-2">
          <DeviceMockupPlate
            src="images/ui-pikafish-web.png"
            domain="pikafish.org · Web Engine"
            caption="Minh họa engine Pikafish phân tích nước đi và giá trị đánh giá"
            source="Ảnh tư liệu FILE-3"
            badge="Stockfish + NNUE"
            onZoom={onZoom}
            disableTilt={reducedMotion}
            className="h-full"
          />
        </div>
      </div>
    </div>
  );
}

export function Slide27Ch3Platforms({
  slide,
  reducedMotion,
  onZoom,
}: SlideRenderHandlers & { slide: SlideDefinition }) {
  const c = CH3_CONTENT.s27;

  return (
    <div className="flex h-full flex-col pl-24 pr-10 pt-6 pb-16">
      <SlideHeader slide={slide} reducedMotion={reducedMotion} />

      <div className="grid min-h-0 flex-1 grid-cols-12 items-center gap-7">
        <div className="parallax-fg z-20 col-span-5 flex flex-col justify-center space-y-5">
          {c.bullets.map((b, idx) => (
            <ContentCard key={b} accent={idx === 0 ? '#1D4ED8' : '#15805D'}>
              <p className="text-[22px] font-semibold leading-relaxed text-[#171411]">{b}</p>
            </ContentCard>
          ))}

          <div className="grid grid-cols-2 gap-4">
            <div className="liquid-glass flex items-center gap-3 rounded-[22px] p-4">
              <img
                src={assetUrl('images/logo-xiangqi-one.jpg')}
                alt="Xiangqi One"
                className="h-12 w-12 rounded-xl object-contain"
              />
              <div>
                <div className="text-[18px] font-extrabold text-[#171411]">Xiangqi One</div>
                <div className="text-xs font-extrabold text-[#1D4ED8]">Phân tích trình duyệt</div>
              </div>
            </div>

            <div className="liquid-glass flex items-center gap-3 rounded-[22px] p-4">
              <img
                src={assetUrl('images/logo-xiangqi-com.png')}
                alt="Xiangqi.com"
                className="h-12 w-12 rounded-xl object-contain"
              />
              <div>
                <div className="text-[18px] font-extrabold text-[#171411]">Xiangqi.com</div>
                <div className="text-xs font-extrabold text-[#15805D]">Thi đấu & Biên bản</div>
              </div>
            </div>
          </div>
        </div>

        {/* BOTH platforms rendered cleanly side-by-side / staggered without blocking captions */}
        <div className="parallax-mid col-span-7 grid h-full min-h-0 grid-cols-2 items-center gap-4">
          <div className="h-[88%] self-start pt-1">
            <DeviceMockupPlate
              src="images/ui-xiangqi-one.png"
              domain="xiangqi.one · Phân tích sâu"
              caption="Xiangqi One: Tích hợp engine phân tích trực quan"
              source="Ảnh tư liệu FILE-3"
              badge="Xiangqi One"
              onZoom={onZoom}
              disableTilt={reducedMotion}
              className="h-full"
            />
          </div>

          <div className="parallax-fg h-[88%] self-end pb-1">
            <DeviceMockupPlate
              src="images/ui-xiangqi-com.png"
              domain="xiangqi.com · Học tập"
              caption="Xiangqi.com: Hiển thị thanh đánh giá & đa biến hóa"
              source="Ảnh tư liệu FILE-3"
              badge="Xiangqi.com"
              onZoom={onZoom}
              disableTilt={reducedMotion}
              className="h-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export function Slide28Ch3Experiment({
  slide,
  reducedMotion,
  onZoom,
}: SlideRenderHandlers & { slide: SlideDefinition }) {
  const c = CH3_CONTENT.s28;

  return (
    <div className="flex h-full flex-col pl-24 pr-10 pt-6 pb-16">
      <SlideHeader slide={slide} reducedMotion={reducedMotion} />

      <div className="grid min-h-0 flex-1 grid-cols-12 items-center gap-6">
        <div className="parallax-fg z-20 col-span-5 flex flex-col justify-center space-y-3.5">
          <ContentCard accent="#1D4ED8">
            <h2 className="mb-1.5 text-[21px] font-extrabold text-[#1D4ED8]">{c.setupTitle}</h2>
            <ul className="space-y-1.5 text-[19px] leading-snug text-[#171411]">
              {c.setupItems.map((it) => (
                <li key={it} className="flex items-start gap-2.5">
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#1D4ED8]" />
                  <span>{it}</span>
                </li>
              ))}
            </ul>
          </ContentCard>

          <ContentCard accent="#15805D">
            <h2 className="mb-1.5 text-[21px] font-extrabold text-[#15805D]">{c.compareTitle}</h2>
            <ul className="space-y-1.5 text-[19px] leading-snug text-[#171411]">
              {c.compareItems.map((it) => (
                <li key={it} className="flex items-start gap-2.5">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#15805D]" />
                  <span>{it}</span>
                </li>
              ))}
            </ul>
          </ContentCard>

          <div className="liquid-glass rounded-[22px] p-1">
            <ExperimentRatioChart reducedMotion={reducedMotion} />
          </div>
        </div>

        {/* Simultaneous non-clipping staggered proofs: Giáo trình tr.201 + Xiangqi One Depth 22 */}
        <div className="parallax-mid col-span-7 grid h-full min-h-0 grid-cols-12 items-center gap-4">
          <div className="col-span-5 h-[84%] self-start pt-1">
            <DeviceMockupPlate
              src="images/exp-giao-trinh-tr201.png"
              domain="Giáo trình · tr. 201"
              caption="Thế cờ gốc trong Giáo trình: Xe Pháo thắng Xe Chốt"
              source="Nguyễn Đức Thành & cs. (2026)"
              badge="Lý thuyết sách"
              onZoom={onZoom}
              disableTilt={reducedMotion}
              className="h-full"
            />
          </div>

          <div className="parallax-fg col-span-7 h-[88%] self-end pb-1">
            <DeviceMockupPlate
              src="images/exp-xiangqi-one-depth22.png"
              domain="Xiangqi One · Depth 22 | +6.26"
              caption="Thẩm định AI: Thống nhất X9-5, tối ưu X4.5, Tg5.1, P4.1"
              source="Thực nghiệm nhóm nghiên cứu (FILE-3)"
              badge="AI Engine +6.26"
              onZoom={onZoom}
              disableTilt={reducedMotion}
              className="h-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export function Slide29Ch3Conclusion({
  slide,
  reducedMotion,
  ambientPaused = false,
  onZoom,
}: SlideRenderHandlers & { slide: SlideDefinition }) {
  const c = CH3_CONTENT.s29;
  return (
    <div className="relative flex h-full flex-col justify-between pl-24 pr-10 pt-6 pb-16">
      <FullBleedBackdrop
        src="images/hero-ch3-endgame.jpg"
        fadeDirection="bottom"
        ambientPaused={ambientPaused}
        imageOpacity={0.32}
      />

      <SlideHeader slide={slide} reducedMotion={reducedMotion} />

      <div className="relative z-10 grid min-h-0 flex-1 grid-cols-12 items-center gap-6 py-1">
        <TiltPlate disabled={reducedMotion} maxTiltDeg={3} className="col-span-4 h-full">
          <div
            className="liquid-glass flex h-full flex-col justify-center rounded-[28px] p-6"
            style={{ boxShadow: 'inset 0 5px 0 #15805D, inset 0 1.5px 1px #fff, 0 24px 56px -12px rgba(26,23,20,0.12)' }}
          >
            <div className="mb-3 flex items-center gap-3 text-[#15805D]">
              <CheckCircle2 className="h-7 w-7" />
              <h2 className="text-[24px] font-extrabold text-[#171411]">{c.prosTitle}</h2>
            </div>
            <ul className="space-y-3.5">
              {c.prosItems.map((it) => (
                <li
                  key={it}
                  className="rounded-2xl border border-[#15805D]/20 bg-[#F2FBF7]/85 p-4.5 text-[20px] font-semibold leading-relaxed text-[#171411]"
                >
                  {it}
                </li>
              ))}
            </ul>
          </div>
        </TiltPlate>

        {/* Central relevant visual proof */}
        <div className="parallax-mid col-span-4 h-full min-h-0">
          <EditorialPhotoPlate
            src="images/vis-blackbox-xai.jpg"
            caption="Cân bằng công cụ đối chiếu số liệu & lý thuyết sư phạm"
            source="Kết luận Chương 3"
            onZoom={onZoom}
            disableTilt={reducedMotion}
            className="h-full"
          />
        </div>

        <TiltPlate disabled={reducedMotion} maxTiltDeg={3} className="col-span-4 h-full">
          <div
            className="liquid-glass flex h-full flex-col justify-center rounded-[28px] p-6"
            style={{ boxShadow: 'inset 0 5px 0 #B92B27, inset 0 1.5px 1px #fff, 0 24px 56px -12px rgba(26,23,20,0.12)' }}
          >
            <div className="mb-3 flex items-center gap-3 text-[#B92B27]">
              <AlertCircle className="h-7 w-7" />
              <h2 className="text-[24px] font-extrabold text-[#171411]">{c.consTitle}</h2>
            </div>
            <div className="rounded-2xl border border-[#B92B27]/30 bg-[#FFF2F0]/90 p-5 text-[21px] font-bold leading-relaxed text-[#9E231F]">
              {c.consItem}
            </div>
            <p className="mt-4 flex items-center gap-2 text-[19px] font-semibold text-[#433C35]">
              <BookOpen className="h-5 w-5 shrink-0 text-[#B6832C]" />
              <span>Cần lý thuyết làm nền tảng để hiểu ý đồ chiến lược sau điểm số.</span>
            </p>
          </div>
        </TiltPlate>
      </div>

      <div className="liquid-glass-warm relative z-10 mt-3 flex items-center gap-4 rounded-[24px] p-5">
        <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#B92B27] text-white shadow-sm">
          <Compass className="h-6 w-6" />
        </span>
        <div>
          <div className="font-mono-tech text-xs font-extrabold uppercase tracking-wider text-[#B92B27]">
            {c.solutionTitle}
          </div>
          <p className="mt-0.5 text-[22px] font-extrabold leading-snug text-[#171411]">
            {c.solutionText}
          </p>
        </div>
      </div>
    </div>
  );
}
