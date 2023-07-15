// import the quotes.json file from the data folder 
import quotes from '../../data/quotes.json' assert { type: "json" };

/**
 * @function random
 * @returns a random quote from the quotes.json file
 * @example random()
 */
const random = () => {
  const index = Math.floor(Math.random() * quotes.length);
  return quotes[index];
}

/**
 * @function specificCategory
 * @param {String} category 
 * @returns a random quote from the quotes.json file that matches the category
 * @example specificCategory('inspirational')
 */
const specificCategory = (category) => {
  const filteredQuotes = quotes.filter(quote => quote.Category === category);
  const index = Math.floor(Math.random() * filteredQuotes.length);
  return filteredQuotes[index];
}

/**
 * @function specificAuthor
 * @param {String} author 
 * @returns a random quote from the quotes.json file that matches the author
 * @example specificAuthor('Albert Einstein')
 */
const specificAuthor = (author) => {
  const filteredQuotes = quotes.filter(quote => quote.Author.includes(author));
  const index = Math.floor(Math.random() * filteredQuotes.length);
  return filteredQuotes[index];
}


export const Quote = {
  random: random,
  specificCategory: specificCategory,
  specificAuthor: specificAuthor
}