const greet = require('./app');

const result = greet('World');
if (result === 'Hello, World!') {
  console.log('✅ Test passed');
  process.exit(0);
} else {
  console.error('❌ Test failed');
  process.exit(1);
}
