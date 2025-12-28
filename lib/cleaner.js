import DOMPurify from 'isomorphic-dompurify';

/**
 * Cleans the HTML content by removing unwanted tags, attributes, and styles while preserving semantic structure.
 * 
 * Logic Implementation:
 * 1. Remove <style> tags: Forbidden in FORBID_TAGS.
 * 2. Remove inline style attributes: Forbidden in FORBID_ATTR.
 * 3. Remove unnecessary CSS classes: 'class' attribute is forbidden to strip all external/inline styling references.
 * 4. Preserve meaningful HTML: Standard semantic tags (h1-h6, p, ul, img, etc.) are allowed by default in DOMPurify.
 * 
 * @param {string} content - The raw HTML content.
 * @returns {string} The cleaned HTML string.
 */
export function cleanContent(content) {
    if (!content) return '';

    const clean = DOMPurify.sanitize(content, {
        FORBID_TAGS: ['style', 'script', 'iframe', 'link', 'meta'],
        FORBID_ATTR: ['style', 'class', 'id', 'width', 'height'],
    });

    return clean;
}

export function extractText(html, length = 160) {
    if (!html) return '';
    const clean = DOMPurify.sanitize(html, { ALLOWED_TAGS: [] });
    return clean.substring(0, length).trim() + (clean.length > length ? '...' : '');
}
