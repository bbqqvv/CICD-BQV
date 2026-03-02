const request = require('supertest');
const app = require('./index');

describe('GET /', () => {
    // Thiết lập biến môi trường giả lập cho việc test local
    process.env.APP_SECRET = "test-secret";

    it('nên trả về thông báo chào mừng và trạng thái bảo mật', async () => {
        const res = await request(app).get('/');
        expect(res.statusCode).toEqual(200);
        expect(res.body).toHaveProperty('message');
        expect(res.body.security).toBe('Active');
    });

    it('nên lỗi nếu thiếu APP_SECRET', async () => {
        // Lưu lại giá trị cũ
        const oldSecret = process.env.APP_SECRET;
        delete process.env.APP_SECRET;

        const res = await request(app).get('/');
        expect(res.statusCode).toEqual(500);
        expect(res.body.error).toContain('APP_SECRET is missing');

        // Khôi phục lại cho các bài test khác (nếu có)
        process.env.APP_SECRET = oldSecret;
    });
});
