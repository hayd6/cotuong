import { motion } from 'motion/react';
import {
  Brain,
  AlertTriangle,
  Shield,
  CheckCircle2,
  XCircle,
  Monitor,
  Layers,
  Award,
  Sparkles,
  ArrowRight,
  Cpu,
  MessageSquare,
} from 'lucide-react';
import type { SlideDefinition } from '../data/types';
import { CH4_CONTENT, CLOSING_CONTENT } from '../data/verbatimContent';
import type { SlideRenderHandlers } from './Chapter1Slides';
import {
  SlideHeader,
  FullBleedBackdrop,
  EditorialPhotoPlate,
  ContentCard,
} from '../components/SlideChrome';
import { SurveyComparisonChart } from '../components/AnimatedChart';
import { KineticHeadline } from '../components/cinematic/KineticHeadline';
import { TiltPlate } from '../components/cinematic/TiltPlate';
import { staggerContainer, staggerItem } from '../animations/motionPresets';

export function Slide30Ch4HumanAi({
  slide,
  reducedMotion,
  ambientPaused = false,
  onZoom,
}: SlideRenderHandlers & { slide: SlideDefinition }) {
  const c = CH4_CONTENT.s30;
  return (
    <div className="relative flex h-full flex-col justify-between pl-24 pr-10 pt-6 pb-16">
      <FullBleedBackdrop
        src="images/photo-xiangqi-thinking.jpg"
        fadeDirection="left"
        ambientPaused={ambientPaused}
        imageOpacity={0.84}
      />

      <SlideHeader slide={slide} reducedMotion={reducedMotion} />

      <div className="relative z-10 grid min-h-0 flex-1 grid-cols-12 items-center gap-6">
        <div className="parallax-fg z-20 col-span-8 flex flex-col justify-center space-y-4">
          {c.items.map((it, idx) => (
            <ContentCard key={it.label} accent={['#1D4ED8', '#B92B27', '#15805D'][idx]}>
              <div className="text-[22px] font-extrabold text-[#171411]">{it.label}</div>
              <p className="mt-1 text-[20px] leading-relaxed text-[#2C2722]">{it.text}</p>
            </ContentCard>
          ))}

          <div className="liquid-glass-warm flex items-center justify-between rounded-[22px] px-6 py-3.5 text-[20px] font-extrabold">
            <span className="text-[#1D4ED8]">Thuật toán chuẩn xác</span>
            <span className="text-[#B6832C]">+</span>
            <span className="text-[#B92B27]">Tầm nhìn chiến lược & Phản biện</span>
            <span className="text-[#B6832C]">=</span>
            <span className="text-[#15805D]">Hiệu suất tiệm cận hoàn thiện</span>
          </div>
        </div>

        <div className="parallax-mid col-span-4 h-[430px]">
          <EditorialPhotoPlate
            src="images/vis-engine-reasoning.jpg"
            caption="Cỗ máy tính toán bổ trợ cho trực giác chiến lược của kỳ thủ"
            source="Mục 4.1.1 · Con người là chủ thể quyết định"
            onZoom={onZoom}
            disableTilt={reducedMotion}
            className="h-full"
          />
        </div>
      </div>
    </div>
  );
}

export function Slide31Ch4TrainingValue({
  slide,
  reducedMotion,
  ambientPaused = false,
  onZoom,
}: SlideRenderHandlers & { slide: SlideDefinition }) {
  const c = CH4_CONTENT.s31;
  const accents = ['#15805D', '#1D4ED8', '#B45309', '#B92B27'];

  return (
    <div className="relative flex h-full flex-col justify-between pl-24 pr-10 pt-6 pb-16">
      <FullBleedBackdrop
        src="images/hero-ch4-future.jpg"
        fadeDirection="right"
        ambientPaused={ambientPaused}
        imageOpacity={0.28}
      />

      <SlideHeader slide={slide} reducedMotion={reducedMotion} />

      <div className="relative z-10 grid min-h-0 flex-1 grid-cols-12 items-center gap-6">
        <div className="parallax-mid col-span-4 h-full min-h-0 py-1">
          <EditorialPhotoPlate
            src="images/hero-ch4-future.jpg"
            caption="Quy trình tự học định lượng hiện đại trong môi trường học đường"
            source="Mục 4.1.2 · Giá trị ứng dụng"
            onZoom={onZoom}
            disableTilt={reducedMotion}
            className="h-full"
          />
        </div>

        <motion.div
          variants={staggerContainer(reducedMotion)}
          initial="hidden"
          animate="visible"
          className="parallax-fg z-20 col-span-8 grid grid-cols-2 gap-4"
        >
          {c.items.map((it, idx) => (
            <motion.div key={it.label} variants={staggerItem(reducedMotion)}>
              <ContentCard accent={accents[idx]} className="h-full">
                <div className="mb-1.5 flex items-center justify-between">
                  <span className="font-mono-tech text-xs font-extrabold uppercase text-[#9A6E21]">
                    Giá trị 0{idx + 1}
                  </span>
                  <Brain className="h-5 w-5" style={{ color: accents[idx] }} />
                </div>
                <h2 className="text-[21px] font-extrabold leading-snug text-[#171411]">
                  {it.label}
                </h2>
                <p className="mt-2 text-[19px] leading-relaxed text-[#2C2722]">{it.text}</p>
              </ContentCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

export function Slide32Ch4BlackBox({
  slide,
  reducedMotion,
  onZoom,
}: SlideRenderHandlers & { slide: SlideDefinition }) {
  const c = CH4_CONTENT.s32;
  return (
    <div className="flex h-full flex-col justify-between pl-24 pr-10 pt-6 pb-16">
      <SlideHeader slide={slide} reducedMotion={reducedMotion} />

      <div className="flex flex-1 flex-col justify-center space-y-4">
        <div className="grid grid-cols-12 items-center gap-6">
          <div className="parallax-fg z-20 col-span-7 grid grid-cols-1 gap-4">
            {c.items.slice(0, 2).map((it, idx) => (
              <ContentCard
                key={it.label}
                accent={idx === 0 ? '#B45309' : '#1D4ED8'}
              >
                <div className="mb-1 font-mono-tech text-xs font-extrabold uppercase text-[#9A6E21]">
                  Rào cản 0{idx + 1}
                </div>
                <h2 className="text-[22px] font-extrabold text-[#171411]">{it.label}</h2>
                <p className="mt-1.5 text-[19px] leading-relaxed text-[#2C2722]">{it.text}</p>
              </ContentCard>
            ))}
          </div>

          <div className="parallax-mid col-span-5 h-[325px]">
            <EditorialPhotoPlate
              src="images/vis-blackbox-xai.jpg"
              caption="Khối hộp đen tính toán vs Lăng kính giải thích logic bàn cờ"
              source="Minh họa Mục 4.2.1"
              onZoom={onZoom}
              disableTilt={reducedMotion}
              className="h-full"
            />
          </div>
        </div>

        <div className="liquid-glass rounded-[24px] border border-[#B92B27]/45 bg-[#FFF2F0]/85 p-5">
          <div className="mb-1.5 flex items-center gap-3 text-[#B92B27]">
            <AlertTriangle className="h-6 w-6 shrink-0" />
            <h2 className="text-[22px] font-extrabold text-[#9E231F]">{c.items[2].label}</h2>
          </div>
          <p className="text-[20px] font-semibold leading-relaxed text-[#2C2722]">
            {c.items[2].text}
          </p>
        </div>
      </div>
    </div>
  );
}

export function Slide33Ch4Dependency({
  slide,
  reducedMotion,
  ambientPaused = false,
}: SlideRenderHandlers & { slide: SlideDefinition }) {
  const c = CH4_CONTENT.s33;
  return (
    <div className="relative flex h-full flex-col pl-24 pr-10 pt-6 pb-16">
      <FullBleedBackdrop
        src="images/vis-blackbox-xai.jpg"
        fadeDirection="right"
        ambientPaused={ambientPaused}
        imageOpacity={0.22}
      />

      <SlideHeader slide={slide} reducedMotion={reducedMotion} />

      <div className="relative z-10 grid min-h-0 flex-1 grid-cols-12 items-center gap-7">
        <div className="parallax-fg z-20 col-span-6 flex flex-col justify-center space-y-4">
          {c.items.map((it, idx) => (
            <ContentCard
              key={it.label}
              accent={idx === 0 ? '#B92B27' : '#B45309'}
            >
              <div className="text-[22px] font-extrabold text-[#171411]">{it.label}</div>
              <p className="mt-1.5 text-[19px] leading-relaxed text-[#2C2722]">{it.text}</p>
            </ContentCard>
          ))}

          <div className="liquid-glass-warm space-y-2.5 rounded-[22px] p-4.5">
            <div className="font-mono-tech text-xs font-extrabold uppercase text-[#9A6E21]">
              {c.experimentTitle}
            </div>
            <div className="rounded-xl border border-[#B92B27]/35 bg-[#FFF2F0]/90 p-3.5 text-[18px] font-bold text-[#9E231F]">
              {c.groupA}
            </div>
            <div className="rounded-xl border border-[#15805D]/35 bg-[#EFFCF6]/90 p-3.5 text-[18px] font-bold text-[#15805D]">
              {c.groupB}
            </div>
          </div>
        </div>

        <div className="parallax-mid liquid-glass col-span-6 rounded-[28px] p-2">
          <SurveyComparisonChart reducedMotion={reducedMotion} />
        </div>
      </div>
    </div>
  );
}

export function Slide34Ch4Cheating({
  slide,
  reducedMotion,
  onZoom,
}: SlideRenderHandlers & { slide: SlideDefinition }) {
  const c = CH4_CONTENT.s34;
  return (
    <div className="flex h-full flex-col pl-24 pr-10 pt-6 pb-16">
      <SlideHeader slide={slide} reducedMotion={reducedMotion} />

      <div className="grid min-h-0 flex-1 grid-cols-12 items-center gap-6">
        {/* Dual layered photography collage */}
        <div className="parallax-mid relative col-span-4 h-full min-h-0">
          <div className="h-[68%] w-[92%]">
            <EditorialPhotoPlate
              src="images/photo-xiangqi-evening.jpg"
              caption="Thi đấu trực tiếp đòi hỏi sự trung thực trí tuệ"
              source="Saimmx · Wikimedia Commons (CC0)"
              captionPosition="top"
              onZoom={onZoom}
              disableTilt={reducedMotion}
              className="h-full"
            />
          </div>
          <div className="parallax-fg absolute right-0 bottom-0 z-20 h-[44%] w-[86%]">
            <EditorialPhotoPlate
              src="images/vis-fairplay-dome.jpg"
              caption="Bảo vệ liêm chính bàn cờ trước gian lận công nghệ"
              source="Đạo đức thi đấu"
              onZoom={onZoom}
              disableTilt={reducedMotion}
              className="h-full"
            />
          </div>
        </div>

        <div className="parallax-fg z-20 col-span-8 flex flex-col justify-center space-y-3">
          {c.items.map((it, idx) => (
            <ContentCard
              key={it.label}
              accent={['#B92B27', '#B45309', '#1D4ED8', '#15805D'][idx]}
              variant={idx === 3 ? 'tinted' : 'card'}
            >
              <div className="flex items-center gap-2.5 text-[21px] font-extrabold text-[#171411]">
                {idx === 3 ? (
                  <CheckCircle2 className="h-5 w-5 text-[#15805D]" />
                ) : (
                  <XCircle className="h-5 w-5 text-[#B92B27]" />
                )}
                <span>{it.label}</span>
              </div>
              <p className="mt-1 text-[19px] leading-snug text-[#2C2722]">{it.text}</p>
            </ContentCard>
          ))}
        </div>
      </div>
    </div>
  );
}

export function Slide35Ch4FairnessSolutions({
  slide,
  reducedMotion,
  onZoom,
}: SlideRenderHandlers & { slide: SlideDefinition }) {
  const c = CH4_CONTENT.s35;
  const icons = [Shield, Award, Monitor, CheckCircle2];
  const accents = ['#B92B27', '#B45309', '#1D4ED8', '#15805D'];

  return (
    <div className="flex h-full flex-col justify-between pl-24 pr-10 pt-6 pb-16">
      <SlideHeader slide={slide} reducedMotion={reducedMotion} />

      <div className="grid min-h-0 flex-1 grid-cols-12 items-center gap-6">
        <div className="parallax-mid col-span-4 h-full min-h-0 py-1">
          <EditorialPhotoPlate
            src="images/vis-fairplay-dome.jpg"
            caption="4 lớp bảo vệ minh bạch từ thể chế, kỹ thuật đến văn hóa thể thao"
            source="Mục 4.3.2 · Giải pháp bảo đảm công bằng"
            onZoom={onZoom}
            disableTilt={reducedMotion}
            className="h-full"
          />
        </div>

        <div className="parallax-fg z-20 col-span-8 grid grid-cols-2 gap-4">
          {c.items.map((it, idx) => {
            const Icon = icons[idx];
            return (
              <ContentCard key={it.label} accent={accents[idx]} className="h-full">
                <div className="mb-2 flex items-center gap-3">
                  <span
                    className="flex h-10 w-10 items-center justify-center rounded-xl"
                    style={{ backgroundColor: `${accents[idx]}16`, color: accents[idx] }}
                  >
                    <Icon className="h-5 w-5" />
                  </span>
                  <h2 className="text-[21px] font-extrabold leading-tight text-[#171411]">
                    {it.label}
                  </h2>
                </div>
                <p className="text-[19px] leading-relaxed text-[#2C2722]">{it.text}</p>
              </ContentCard>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export function Slide36Ch4FourStepLoop({
  slide,
  reducedMotion,
  onZoom,
}: SlideRenderHandlers & { slide: SlideDefinition }) {
  const c = CH4_CONTENT.s36;
  const accents = ['#1D4ED8', '#B45309', '#B92B27', '#15805D'];

  return (
    <div className="flex h-full flex-col justify-between pl-24 pr-10 pt-6 pb-16">
      <SlideHeader slide={slide} reducedMotion={reducedMotion} />

      <div className="flex flex-1 flex-col justify-center space-y-4">
        <div className="liquid-glass-warm rounded-[20px] border border-[#B6832C]/50 px-5 py-3 text-[20px] font-extrabold text-[#171411]">
          {c.principle}
        </div>

        <div className="grid grid-cols-12 items-center gap-6">
          <div className="parallax-mid col-span-4 h-[430px]">
            <EditorialPhotoPlate
              src="images/vis-training-loop.jpg"
              caption="4 giai đoạn rèn luyện: Đấu độc lập → Phục bàn → Thẩm định AI → Hồ sơ sai số"
              source="Mục 4.4.1 · Quy trình tập luyện 4 bước"
              onZoom={onZoom}
              disableTilt={reducedMotion}
              className="h-full"
            />
          </div>

          <div className="parallax-fg z-20 col-span-8 grid grid-cols-2 gap-4">
            {c.steps.map((st, idx) => (
              <TiltPlate key={st.label} disabled={reducedMotion} maxTiltDeg={3} className="h-full">
                <div
                  className="liquid-glass flex h-full flex-col justify-center rounded-[24px] p-5"
                  style={{
                    boxShadow: `inset 0 5px 0 ${accents[idx]}, inset 0 1.5px 1px #fff, 0 20px 50px -12px rgba(26,23,20,0.12)`,
                  }}
                >
                  <span
                    className="mb-1.5 font-mono-tech text-xs font-extrabold uppercase tracking-wider"
                    style={{ color: accents[idx] }}
                  >
                    Bước 0{idx + 1} / 04
                  </span>
                  <h2 className="text-[21px] font-extrabold leading-snug text-[#171411]">
                    {st.label}
                  </h2>
                  <p className="mt-2 text-[19px] leading-snug text-[#2C2722]">{st.text}</p>
                </div>
              </TiltPlate>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export function Slide37Ch4UniversityTeaching({
  slide,
  reducedMotion,
  onZoom,
}: SlideRenderHandlers & { slide: SlideDefinition }) {
  const c = CH4_CONTENT.s37;
  const accents = ['#1D4ED8', '#B92B27', '#15805D', '#B45309'];
  return (
    <div className="flex h-full flex-col pl-24 pr-10 pt-6 pb-16">
      <SlideHeader slide={slide} reducedMotion={reducedMotion} />

      <div className="grid min-h-0 flex-1 grid-cols-12 items-center gap-6">
        <div className="parallax-fg z-20 col-span-8 grid grid-cols-2 gap-4">
          {c.items.map((it, idx) => (
            <ContentCard key={it.label} accent={accents[idx]} className="h-full">
              <div className="mb-1.5 font-mono-tech text-xs font-extrabold uppercase text-[#9A6E21]">
                Giải pháp 0{idx + 1}
              </div>
              <h2 className="text-[21px] font-extrabold leading-snug text-[#171411]">
                {it.label}
              </h2>
              <p className="mt-1.5 text-[19px] leading-relaxed text-[#2C2722]">{it.text}</p>
            </ContentCard>
          ))}
        </div>

        {/* Multi-layer campus & study room collage */}
        <div className="parallax-mid relative col-span-4 h-full min-h-0">
          <div className="h-[68%] w-[94%]">
            <EditorialPhotoPlate
              src="images/photo-xiangqi-students.jpg"
              caption="Ứng dụng phần mềm & màn hình tương tác tại CLB/đại học"
              source="He JiaWei · Wikimedia Commons (CC BY-SA 2.0)"
              captionPosition="top"
              onZoom={onZoom}
              disableTilt={reducedMotion}
              className="h-full"
            />
          </div>
          <div className="parallax-fg absolute right-0 bottom-0 z-20 h-[44%] w-[86%]">
            <EditorialPhotoPlate
              src="images/vis-training-loop.jpg"
              caption="Học liệu số PGN / XQF bản địa hóa tiếng Việt"
              source="Mô hình giảng đường hiện đại"
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

export function Slide38Ch4LanguageDatabase({
  slide,
  reducedMotion,
  onZoom,
}: SlideRenderHandlers & { slide: SlideDefinition }) {
  const c = CH4_CONTENT.s38;
  return (
    <div className="flex h-full flex-col pl-24 pr-10 pt-6 pb-16">
      <SlideHeader slide={slide} reducedMotion={reducedMotion} />

      <div className="grid min-h-0 flex-1 grid-cols-12 items-center gap-7">
        <div className="parallax-fg z-20 col-span-7 flex flex-col justify-center space-y-5">
          {c.topItems.map((it, idx) => (
            <ContentCard
              key={it.label}
              accent={idx === 0 ? '#B92B27' : '#1D4ED8'}
            >
              <div className="mb-1.5 font-mono-tech text-xs font-extrabold uppercase text-[#9A6E21]">
                Định hướng 0{idx + 1}
              </div>
              <h2 className="text-[25px] font-extrabold text-[#171411]">{it.label}</h2>
              <p className="mt-2 text-[21px] leading-relaxed text-[#2C2722]">{it.text}</p>
            </ContentCard>
          ))}

          <div className="liquid-glass-warm rounded-[20px] px-5 py-4 font-mono-tech text-sm font-extrabold text-[#5C5349]">
            Chuẩn hóa di sản kỳ thủ Việt Nam → Mở đường cho kiến trúc lai RAG tiếng Việt ở slide tiếp theo.
          </div>
        </div>

        <div className="parallax-mid col-span-5 h-full min-h-0 py-1">
          <EditorialPhotoPlate
            src="images/photo-nguyen-hoang-yen.jpg"
            caption="Kỳ thủ Việt Nam Nguyễn Hoàng Yến tại Giải Vô địch châu Á 2016"
            source="Phùng Đức Anh · Wikimedia Commons (CC BY-SA 4.0)"
            badge="Di sản Việt Nam"
            objectPosition="center 20%"
            onZoom={onZoom}
            disableTilt={reducedMotion}
            className="h-full"
          />
        </div>
      </div>
    </div>
  );
}

export function Slide39Ch4VietnameseRag({
  slide,
  reducedMotion,
  onZoom,
}: SlideRenderHandlers & { slide: SlideDefinition }) {
  const c = CH4_CONTENT.s38;
  return (
    <div className="flex h-full flex-col justify-between pl-24 pr-10 pt-6 pb-16">
      <SlideHeader slide={slide} reducedMotion={reducedMotion} />

      <div className="grid min-h-0 flex-1 grid-cols-12 items-center gap-6">
        <div className="parallax-mid col-span-4 h-full min-h-0 py-1">
          <EditorialPhotoPlate
            src="images/vis-vietnam-rag.jpg"
            caption="Cầu lăng kính RAG chuyển hóa tham số Pikafish thành bình giảng tiếng Việt"
            source="Mục 4.4.3 · Kiến trúc lai RAG"
            onZoom={onZoom}
            disableTilt={reducedMotion}
            className="h-full"
          />
        </div>

        <div className="parallax-fg z-20 col-span-8 flex flex-col justify-center space-y-4">
          <div className="flex items-center gap-3 text-[22px] font-extrabold text-[#15805D]">
            <Layers className="h-6 w-6 shrink-0" />
            <span>{c.ragTitle}</span>
          </div>

          <div className="grid grid-cols-11 items-stretch gap-3">
            <div
              className="liquid-glass col-span-5 rounded-[26px] p-5"
              style={{ boxShadow: 'inset 0 5px 0 #1D4ED8, inset 0 1.5px 1px #fff, 0 20px 50px -12px rgba(26,23,20,0.12)' }}
            >
              <div className="mb-2 flex items-center gap-2.5 text-[#1D4ED8]">
                <Cpu className="h-6 w-6" />
                <span className="text-[22px] font-extrabold">{c.ragStages[0].label}</span>
              </div>
              <p className="text-[20px] leading-relaxed text-[#171411]">{c.ragStages[0].text}</p>
              <div className="mt-3 inline-flex items-center rounded-xl border border-[#1D4ED8]/25 bg-[#EFF6FF] px-3 py-1.5 font-mono-tech text-xs font-extrabold text-[#1D4ED8]">
                Xe 2 tiến 6 (+150 điểm)
              </div>
            </div>

            <div className="col-span-1 flex items-center justify-center">
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#B92B27] text-white shadow-md">
                <ArrowRight className="h-6 w-6" />
              </span>
            </div>

            <div
              className="liquid-glass col-span-5 rounded-[26px] p-5"
              style={{ boxShadow: 'inset 0 5px 0 #15805D, inset 0 1.5px 1px #fff, 0 20px 50px -12px rgba(26,23,20,0.12)' }}
            >
              <div className="mb-2 flex items-center gap-2.5 text-[#15805D]">
                <MessageSquare className="h-6 w-6" />
                <span className="text-[22px] font-extrabold">{c.ragStages[1].label}</span>
              </div>
              <p className="text-[19px] leading-snug text-[#171411]">{c.ragStages[1].text}</p>
            </div>
          </div>

          <div className="liquid-glass-warm rounded-[22px] p-5">
            <span className="text-[21px] font-extrabold text-[#B92B27]">{c.inheritance.label} </span>
            <span className="text-[20px] font-bold leading-relaxed text-[#171411]">
              {c.inheritance.text}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export function Slide40ClosingFinale({
  slide,
  reducedMotion,
  ambientPaused = false,
  onZoom,
}: SlideRenderHandlers & { slide: SlideDefinition }) {
  const c = CLOSING_CONTENT;

  return (
    <div className="relative flex h-full flex-col justify-between overflow-hidden pl-24 pr-10 pt-8 pb-16">
      <FullBleedBackdrop
        src="images/hero-ch4-future.jpg"
        fadeDirection="bottom"
        ambientPaused={ambientPaused}
        imageOpacity={0.55}
      />

      <div className="parallax-fg relative z-20 flex items-end justify-between gap-6">
        <div className="liquid-glass max-w-4xl rounded-[28px] p-6">
          <div className="mb-2 inline-flex items-center gap-2 rounded-full bg-[#B92B27]/12 px-4 py-1">
            <Sparkles className="h-4 w-4 text-[#B92B27]" />
            <span className="font-mono-tech text-xs font-extrabold tracking-widest text-[#9A6E21]">
              {c.eyebrow} · SLIDE {slide.id}
            </span>
          </div>

          <KineticHeadline
            text={c.title}
            as="h1"
            reducedMotion={reducedMotion}
            className="text-[52px] font-extrabold leading-tight text-[#171411]"
          />

          <p className="mt-2 text-[21px] font-medium leading-relaxed text-[#2C2722]">{c.lead}</p>
        </div>

        {/* Layered corner hero editorial plate replacing unneeded Three.js box */}
        <div className="parallax-mid hidden h-[185px] w-[340px] shrink-0 lg:block">
          <EditorialPhotoPlate
            src="images/hero-renaissance-xiangqi.jpg"
            caption="Hòa quyện truyền thống Cờ tướng & Trí tuệ nhân tạo"
            source="Kết luận chuyên đề"
            onZoom={onZoom}
            disableTilt={reducedMotion}
            className="h-full"
          />
        </div>
      </div>

      <div className="parallax-fg relative z-20 grid grid-cols-2 gap-6">
        {c.cards.map((card, idx) => (
          <TiltPlate key={card.title} disabled={reducedMotion} maxTiltDeg={3} className="h-full">
            <div
              className="liquid-glass flex h-full flex-col justify-center rounded-[28px] p-6"
              style={{
                boxShadow: `inset 0 5px 0 ${idx === 0 ? '#15805D' : '#B92B27'}, inset 0 1.5px 1px #fff, 0 24px 56px -12px rgba(26,23,20,0.12)`,
              }}
            >
              <h2 className="text-[25px] font-extrabold text-[#171411]">{card.title}</h2>
              <p className="mt-2.5 text-[20px] leading-relaxed text-[#2C2722]">{card.text}</p>
            </div>
          </TiltPlate>
        ))}
      </div>

      <div className="parallax-fg liquid-glass-warm relative z-20 rounded-[26px] py-4.5 text-center">
        <p className="font-serif-editorial text-[34px] font-bold text-[#171411]">{c.thanks}</p>
      </div>
    </div>
  );
}
