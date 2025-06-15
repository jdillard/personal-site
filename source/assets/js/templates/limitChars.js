module.exports = function(text, limit) {
  if (typeof text !== 'string') return '';

  let words = text.split(/\s+/);
  let result = '';
  let totalChars = 0;

  for (let i = 0; i < words.length; i++) {
    const word = words[i];
    const space = result.length === 0 ? '' : ' ';
    const wordWithSpace = space + word;
    
    if (totalChars + wordWithSpace.length > limit) break;

    result += wordWithSpace;
    totalChars += wordWithSpace.length;
  }

  return result + (totalChars < text.length ? '…' : '');
}
