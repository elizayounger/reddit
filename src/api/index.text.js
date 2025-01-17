import { fetchPopularRedditFeed } from ".";
// -------------------- fetchPopularRedditFeed --------------------
test('fetches popular reddit feed object', async () => {
    // setup
    // input not required
    const expected = typeof {};

    // verify
    const response = fetchPopularRedditFeed();

    // assert
    expect(response).toBe
  });