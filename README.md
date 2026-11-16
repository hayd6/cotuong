# Các ứng dụng Trí tuệ nhân tạo trong Cờ tướng — Hệ thống Trình chiếu HTML Tương tác

Hệ thống trình chiếu chuyên đề học thuật **“Các ứng dụng Trí tuệ nhân tạo trong Cờ tướng”**, xây dựng bằng **React + TypeScript + Vite + Tailwind CSS + Motion + GSAP**, tối ưu cho màn hình trình chiếu 16:9 (`1920×1080`, `1366×768`) theo phong cách Apple Liquid Glass và triển khai tĩnh trên **GitHub Pages**.

---

## 1. Hướng dẫn chạy Local

Yêu cầu môi trường: **Node.js >= 20** và **npm >= 10**.

```bash
# 1. Cài đặt thư viện
npm install

# 2. Chạy môi trường phát triển (Hot Reload)
npm run dev

# 3. Kiểm tra TypeScript & build bản production
npm run build

# 4. Xem trước bản production vừa build
npm run preview
```

---

## 2. Triển khai lên GitHub Pages

Dự án không sử dụng backend và hỗ trợ đầy đủ đường dẫn repository con (subpath) qua biến môi trường `VITE_BASE_PATH` trong [vite.config.ts](vite.config.ts) và helper `assetUrl()` trong [src/utils/assets.ts](src/utils/assets.ts).

### Cách 1: Tự động bằng GitHub Actions (Khuyến nghị)
Workflow đã được cấu hình sẵn tại [.github/workflows/deploy.yml](.github/workflows/deploy.yml) (gồm `actions/configure-pages@v5`, `upload-pages-artifact@v3`, `deploy-pages@v4`):
1. Trong repository GitHub, vào **Settings → Pages → Build and deployment → Source** và chọn **GitHub Actions** trước lần chạy đầu tiên (tránh lỗi *Get Pages site failed*).
2. Đẩy mã nguồn lên nhánh `main` (hoặc chạy thủ công **Actions → workflow_dispatch**).
3. Workflow tự lấy `base_path` từ `configure-pages`, build thư mục `dist/` và phát hành lên GitHub Pages.

### Cách 2: Build thủ công theo tên repository
```bash
# Ví dụ repository tên là "cotuong" (chữ thường đúng với URL repo)
VITE_BASE_PATH=/cotuong/ npm run build
```
*(Nếu không đặt `VITE_BASE_PATH`, hệ thống mặc định dùng `'./'` để hoạt động tương đối trên mọi đường dẫn).*

---

## 3. Điều khiển & Chế độ Trình chiếu

### Phím tắt bàn phím
| Phím | Chức năng |
|---|---|
| `→` / `Space` / `PageDown` | Chuyển slide tiếp theo |
| `←` / `PageUp` | Quay lại slide trước |
| `Home` / `End` | Nhảy tới slide đầu / slide cuối |
| `O` hoặc `G` | Mở / đóng **Tổng quan tất cả 40 slide** |
| `P` | Mở cửa sổ **Presenter Mode** |
| `F` | Bật / tắt **Fullscreen** |
| `Esc` | Đóng modal (video / ảnh / tổng quan) hoặc thoát Fullscreen |

- Hỗ trợ **vuốt ngang (touch/swipe)** trên thiết bị cảm ứng và điều hướng bằng **URL hash** (`#/slide-1` … `#/slide-40`).
- **Presenter Mode** (`?mode=presenter`): Hiển thị slide đang chiếu, slide tiếp theo, đồng hồ đếm thời gian và kịch bản lời thuyết trình (từ `FILE-2.docx` và bổ sung Chương 4 từ `FILE-1.docx`), đồng bộ hai chiều với cửa sổ khán giả qua `BroadcastChannel` + `localStorage`.

---

## 4. Cấu trúc Nội dung & Đối chiếu Tài liệu Nguồn

Tổng số slide: **40 slide**.

| Phạm vi | Chương / Phần | Nguồn nội dung Slide | Nguồn kịch bản Presenter Mode |
|---|---|---|---|
| Slide 01 | Mở đầu & Bối cảnh đề tài | `FILE-1.docx` (Phần Mở đầu) | Biên soạn từ `FILE-1.docx` |
| Slide 02 – 11 | Chương 1: Cơ sở lý thuyết và công nghệ AI | **Soạn từ `FILE-2.docx` (Slide 01–10)** | Nguyên văn `FILE-2.docx` |
| Slide 12 – 24 | Chương 2: Ứng dụng AI trong các giai đoạn ván cờ | Nguyên văn `FILE-3.docx` | Nguyên văn `FILE-2.docx` |
| Slide 25 – 29 | Chương 3: Công cụ AI hiện đại & Thực nghiệm | Nguyên văn `FILE-3.docx` | Nguyên văn `FILE-2.docx` |
| Slide 30 – 39 | Chương 4: Đánh giá, Hạn chế & Định hướng | Nguyên văn `FILE-3.docx` | **Chắt lọc từ `FILE-1.docx` (Chương 4)** |
| Slide 40 | Tổng kết đề tài | `FILE-1.docx` (Phần Kết luận) | Biên soạn từ `FILE-1.docx` |

---

## 5. Thư viện & Công nghệ sử dụng

- **React 19 + TypeScript** (`react`, `react-dom`, `typescript`)
- **Vite 8** (`vite`, `@vitejs/plugin-react`)
- **Tailwind CSS v4** (`tailwindcss`, `@tailwindcss/vite`)
- **Motion for React** (`motion`) & **GSAP** (`gsap`) cho chuyển cảnh Keynote, stagger và morphing
- **Lucide React** (`lucide-react`) cho hệ thống biểu tượng giao diện & **Vector Xiangqi SVG Engine** cho sơ đồ thế cờ sắc nét
