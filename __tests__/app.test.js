const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');

const { consoles } = require('../data/console');

describe('console routes', () => {
  beforeEach(() => {
    return setup(pool);
  });

  it('/consoles should show the list of consoles', async () => {
    const res = await request(app).get('/consoles');
    const expected = consoles.map((console) => {
      return { id: console.id, name: console.name };
    });
    expect(res.body).toEqual(expected);
  });

  it('/consoles/:id should show the details of a consoles', async () => {
    const res = await request(app).get('/consoles/1');
    const atari = {
      id: '1',
      name: 'Atari',
      description: 'Classically viewed as the original game console.',
      year: 1977,
    };
    expect(res.body).toEqual(atari);
  });

  afterAll(() => {
    pool.end();
  });
});
