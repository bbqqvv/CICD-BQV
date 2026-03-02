const { greet } = require("./index");

// Giả lập secret cho mục đích test local (nếu không chạy qua CLI)
if (!process.env.APP_SECRET) {
    process.env.APP_SECRET = "local-secret-for-testing";
}

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
