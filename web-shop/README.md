# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.


src/
├── assets/             # Chứa tài nguyên tĩnh (Images, Icons, Fonts, Videos)
│   ├── images/         # Logo, Banner, Background
│   └── icons/          # SVG icons (nếu không dùng thư viện icon)
│
├── components/         # Các thành phần UI có thể tái sử dụng (Atoms/Molecules)
│   ├── common/         # Button, Input, Badge, LoadingSpinner
│   ├── product/        # ProductCard, ProductList, CategoryIcon
│   └── forms/          # LoginForm, SearchBar
│
├── layout/             # Các thành phần khung của trang web
│   ├── MainLayout.jsx  # Wrapper bao gồm Header + Footer + Content
│   ├── Header.jsx
│   └── Footer.jsx
│
├── pages/              # Mỗi file đại diện cho một trang (Routes)
│   ├── Home.jsx        # Trang chủ (chứa Hero, FlashSale...)
│   ├── ProductDetail.jsx
│   ├── Cart.jsx
│   └── Login.jsx
│
├── hooks/              # Các Custom Hooks (Xử lý logic tách biệt UI)
│   ├── useCart.js      # Logic thêm/xóa giỏ hàng
│   └── useCountdown.js # Logic cho phần Flash Sale
│
├── services/           # Quản lý gọi API (Axios/Fetch)
│   ├── api.js          # Cấu hình Axios chung
│   └── productService.js # Các hàm lấy dữ liệu sản phẩm
│
├── store/              # Quản lý State (Zustand, Redux hoặc Context API)
│   └── useUserStore.js # Lưu thông tin đăng nhập
│
├── utils/              # Các hàm bổ trợ (Helper functions)
│   ├── formatPrice.js  # Hàm format tiền tệ (VND/USD)
│   └── constants.js    # Lưu các biến cố định (Màu sắc, API URL)
│
├── App.jsx             # File tổng quản lý Routing
├── main.jsx            # Điểm đầu vào của React (Render vào DOM)
└── index.css           # Tailwind directives và CSS toàn cục