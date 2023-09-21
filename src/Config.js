const API_BASE_URL = 'https://hacker-news.firebaseio.com/v0';

export const HACKER_NEWS_API = {
  LATEST_NEWS: `${API_BASE_URL}/newstories.json`,
  ITEM: (itemId) => `${API_BASE_URL}/item/${itemId}.json`,
};
  