
const config = {
  // port
  port: process.env.PORT || 5000,
  // db
  db: 'mongodb://localhost/blog-api',
  // test 환경
  test_env: 'test',
  test_port: 5001,
  test_db: 'mongodb://localhost/blog-api-test'
};

module.exports = config;