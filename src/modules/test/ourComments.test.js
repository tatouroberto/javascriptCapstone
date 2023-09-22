const { counter } = require('../ourComments.js');

describe('counter', () => {
  test('returns the number of comments', () => {
    const commentData = [
      { creation_date: '2023-09-22', username: 'Roberto', comment: 'Must Watch' },
      { creation_date: '2023-09-20', username: 'Ivonne', comment: 'my favourites' },
      { creation_date: '2023-09-19', username: 'Tatou', comment: 'One of my Best' },
      { creation_date: '2023-09-18', username: 'Mary', comment: 'what a wonderful film' },
    ];
    expect(counter(commentData)).toEqual(4);
  });

  test('returns 0 when there is an error', () => {
    const errorData = { error: 'An error occurred' };
    expect(counter(errorData)).toEqual(0);
  });
});