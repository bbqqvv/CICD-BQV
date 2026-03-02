console.log("Chào mừng bạn đến với thế giới CI/CD!");

function greet(name) {
  const secret = process.env.APP_SECRET;
  if (!secret) {
    throw new Error("❌ Bảo mật: Không tìm thấy APP_SECRET!");
  }
  return `Hello, ${name}! (Security: Active)`;
}

module.exports = { greet };
