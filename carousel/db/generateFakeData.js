const faker = require('faker');
const { random } = require('faker');

const categories = {
  1: 'weapons',
  2: 'armor',
  3: 'food',
  4: 'power',
};

getRandomCategory = () => {
  const randomKey = Math.floor(Math.random() * (5 - 1)) + 1;
  return categories[randomKey];
};

const getRandomRating = () => {
  return Math.floor(Math.random() * (6 - 1)) + 1;
};

const generateFakeItem = () => ({
  name: faker.lorem.words(),
  image: faker.random.image(),
  rating: getRandomRating(),
  category: getRandomCategory(),
});

const printSchemaQueries = () => {
  let QueryString = '';

  for (let i = 0; i < 100; i++) {
    let { name, image, rating, category } = generateFakeItem();
    QueryString += `insert into items (name, image, rating, category) values ('${name}', '${image}', '${rating}', '${category}');
    `;
  }
  return QueryString;
};

console.log(printSchemaQueries());
