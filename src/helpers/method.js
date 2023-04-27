export const updateUrlToHttps = (url) => {
  if (url.startsWith('http://')) {
    return url.replace('http://', 'https://');
  }
  return url;
};

export const subString = (text, limit) => {
  if (text?.length <= limit) {
    return text;
  }
  return text?.substring(0, limit) + '...';
};
