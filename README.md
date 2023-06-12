# VRILLAR VIETNAM TEST PROJECT

## Các bước chạy project

-B1: Truy cập thư mục project

#### `cd vrillarVNTest-NguyenKhanhDuy`

- B2: Install các package, chạy lệnh:

#### `yarn`

hoặc

#### `npm install`

- B3: Start json server:

#### `yarn start`

hoặc

#### `npm start`

- B4: Start project:

#### `yarn dev`

hoặc

#### `npm run dev`

## Giới thiệu

- Project show các kết quả đua xe F! của trang [formula1.com](https://www.formula1.com/) dựa trên các năm và địa điểm đua theo bảng và biểu đồ.
- Lọc kết quả theo năm, địa điểm, đội đua, cá nhân

## Công nghệ sử dụng

- **react/tyescript**
- Cấu hình router với **react-router-dom**
- Quản lí global state: **useContext**
- Style UI: **tailwindCSS**
- Quản lí asynchronous state: **react-query**
- Fake API Server: **json-server**
- Biểu đồ: **chart-js**

## Các bước thực hiện project

- Cấu trúc thư mục,config git, prettier, eslint
- Cấu trúc router và chia components layout
- Crawl data với nodejs và lưu data vào file **data.json**
- Thêm type(team,year, location,driver,...) từ data đã crawl
- Gọi và quản lí asynchronous state với axios và react-query
- Tạo context để lưu trữ global state. Lưu race result vào context. Truyển state raceResult cho các component con filter và render dữ liệu
