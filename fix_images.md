# Nguyên nhân lỗi trùng ảnh
Các bài viết bị trùng lặp ảnh (featured_image) do file `scripts/update-featured-images-v2.mjs` và các file kịch bản tạo bài viết gán **cố định 1 photo ID của Unsplash cho mỗi danh mục**.
Ví dụ:
```javascript
const categoryImages = {
    '31d10229-9735-...': 'photo-1460925895917-afdab827c52f', // Gán cứng 1 ảnh cho Kiến thức
    '96d5c106-653b-...': 'photo-1611974714656-718fb361668f', // Gán cứng 1 ảnh cho Chứng khoán
};
```
Vì vậy, bất kỳ bài viết nào thêm vào danh mục đó đều nhận một url ảnh i hệt nhau.
