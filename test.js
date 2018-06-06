import test from 'ava';
import poputeRandomImg from '.';

test('fetch', async t => {
	const img = await poputeRandomImg();
	t.true(Buffer.isBuffer(img));
});
