export const API_URL = 'https://campusify.io/wp-json/wp/v2/pages';

export async function getAllPages() {
  try {
    const res = await fetch(API_URL);
    if (!res.ok) {
      throw new Error('Failed to fetch pages');
    }
    return res.json();
  } catch (error) {
    console.error('Error fetching pages:', error);
    return [];
  }
}

export async function getPageBySlug(slug) {
  try {
    const res = await fetch(`${API_URL}?slug=${slug}`);
    if (!res.ok) {
      throw new Error('Failed to fetch page');
    }
    const posts = await res.json();
    return posts.length > 0 ? posts[0] : null;
  } catch (error) {
    console.error(`Error fetching page with slug ${slug}:`, error);
    return null;
  }
}
