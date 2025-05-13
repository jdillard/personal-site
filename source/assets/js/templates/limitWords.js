module.exports = function(text, limit) {
  if (typeof text !== 'string') return '';
  const words = text.split(/\s+/).slice(0, limit);
  return words.join(' ') + (words.length < text.split(/\s+/).length ? '…' : '');
}
