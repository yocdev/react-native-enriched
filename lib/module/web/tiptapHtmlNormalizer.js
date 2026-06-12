"use strict";

export function prepareHtmlForTiptap(html) {
  return html.replace(/<br\s*\/?>/gi, '<p></p>');
}
export function normalizeHtmlFromTiptap(html) {
  const content = html.replace(/<p><\/p>/g, '<br>');
  return `<html>${content}</html>`;
}
//# sourceMappingURL=tiptapHtmlNormalizer.js.map