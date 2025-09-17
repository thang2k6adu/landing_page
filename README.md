## Landing Page (React + Vite + Tailwind)

Một landing page được xây dựng với React 19, Vite 7 và Tailwind CSS 3.

### Yêu cầu hệ thống (engines)
- Node.js >= 22.0.0
- npm >= 9.0.0

Kiểm tra nhanh phiên bản:

```bash
node -v
npm -v
```

### Clone và cài đặt
```bash
git clone https://github.com/thang2k6adu/landing_page.git
cd landing_page

# Cài đặt phụ thuộc (ưu tiên dùng lockfile hiện có)
npm ci
# hoặc nếu npm ci báo lỗi, dùng:
# npm install
```

### Chạy dự án
- Dev server (HMR):
```bash
npm run dev
```
Vite mặc định chạy tại `http://localhost:5173`.

- Build production:
```bash
npm run build
```
Kết quả build ở thư mục `dist/`.

- Preview bản build:
```bash
npm run preview
```

- Kiểm tra lint:
```bash
npm run lint
```

### Cấu trúc thư mục & chức năng chính

```text
landing_page/
├─ index.html                 # HTML gốc cho Vite mount ứng dụng
├─ package.json               # Scripts, engines (Node >=22, npm >=9), deps
├─ postcss.config.js          # Cấu hình PostCSS
├─ tailwind.config.js         # Cấu hình Tailwind CSS
├─ vite.config.js             # Cấu hình Vite
├─ eslint.config.js           # Cấu hình ESLint
├─ public/                    # Tài nguyên tĩnh public (copy nguyên vẹn khi build)
│  └─ vite.svg
└─ src/
   ├─ main.jsx               # Điểm vào ứng dụng React, mount vào #root
   ├─ index.css              # Import Tailwind và style toàn cục
   ├─ App.jsx                # App wrapper cấp cao
   ├─ app/
   │  ├─ MainApp.jsx        # Thành phần chính của app
   │  └─ OS.jsx             # Thành phần/tiện ích liên quan hệ điều hành (tùy chỉnh)
   ├─ layout/
   │  └─ MainLayout/
   │     └─ index.jsx       # Layout chính bao bọc trang/nội dung
   ├─ components/
   │  ├─ Header/            # Header và điều hướng
   │  │  └─ index.jsx
   │  ├─ Logo/
   │  │  └─ index.jsx
   │  ├─ MobileMenu/
   │  │  └─ index.jsx       # Menu di động (off-canvas/overlay)
   │  ├─ MobileMenuButton/
   │  │  └─ index.jsx       # Nút toggle menu di động
+   │  ├─ NavItems/
   │  │  └─ index.jsx       # Danh sách mục điều hướng
   │  └─ PageLoader/
   │     └─ index.jsx       # Loader/hiệu ứng tải trang
   ├─ pages/
   │  ├─ HomePage/
   │  │  └─ index.jsx       # Trang chủ
   │  └─ About/             # (placeholder)
   ├─ hooks/                # (placeholder cho custom hooks)
   ├─ redux/                # (placeholder cho state management Redux)
   ├─ routes/               # (placeholder định tuyến nếu cần)
   ├─ styles/               # (placeholder style bổ sung)
   └─ utils/                # (placeholder tiện ích dùng chung)
```

Ghi chú:
- Thư mục `components/` chứa các thành phần UI tái sử dụng (Header, Logo, Menu di động...).
- `layout/MainLayout` định nghĩa khung giao diện chung cho các trang.
- `pages/` chứa các trang cấp route (ví dụ: `HomePage`).
- Các thư mục `hooks/`, `redux/`, `routes/`, `styles/`, `utils/` đang là placeholders và có thể mở rộng theo nhu cầu thực tế.

### Công nghệ chính
- React 19 (`react`, `react-dom`)
- Vite 7 (dev server, build nhanh)
- Tailwind CSS 3 + PostCSS (utility-first CSS)
- ESLint 9 (chất lượng mã, plugin React Hooks, React Refresh)

### Liên kết
- Mã nguồn: [thang2k6adu/landing_page](https://github.com/thang2k6adu/landing_page.git)

---
Nếu bạn gặp vấn đề khi cài đặt/chạy, vui lòng kiểm tra phiên bản Node/npm theo yêu cầu hoặc xóa `node_modules` và chạy lại `npm ci`.


