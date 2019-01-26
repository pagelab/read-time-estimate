import imageReadTime from './utils/image-read-time';
import wordsReadTime from './utils/words-read-time';
import stripTags from './utils/strip-tags';
import stripWhitespace from './utils/strip-whitespace';
import humanizeTime from './utils/humanize-time';


function readTime(
  string,
  customWordTime,
  customImageTime,
  chineseKoreanReadTime,
  imageTags,
) {
  const { time: imageTime, count: imageCount } = imageReadTime(customImageTime, imageTags, string);
  const strippedString = stripTags(stripWhitespace(string));
  const {
    characterCount,
    otherLanguageTime,
    wordTime,
    wordCount,
  } = wordsReadTime(strippedString, customWordTime);
  return {
    humanizedDuration: humanizeTime(imageTime + wordTime),
    duration: imageTime + wordTime,
    totalImages: imageCount,
    totalWords: wordCount,
    otherLanguageTime,
    otherLanguageTimeCharacters: characterCount,
  };
}

export default readTime;
