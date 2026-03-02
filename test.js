const { greet } = require("./index");

// Đã xóa phần giả lập secret local để test bảo mật Pipeline thực tế

function testGreet() {
    const result = greet("Học viên");
    const expected = "Hello, Học viên! (Security: Active)";

    if (result === expected) {
        console.log("✅ Test định dạng lời chào: THÀNH CÔNG");
    } else {
        console.log(`❌ Test định dạng lời chào: THẤT BẠI (Mong đợi: "${expected}", Nhận được: "${result}")`);
        process.exit(1);
    }
}

console.log("Đang chạy các bài kiểm tra...");
testGreet();
console.log("Tất cả các bài kiểm tra đã hoàn tất thành công!");
