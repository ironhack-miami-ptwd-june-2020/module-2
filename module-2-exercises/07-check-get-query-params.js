// How would you get the value of queries and params in the following examples?

// PARAMS:
// 1:
// https://dummyexample.com/albums/123cool4lbum
app.get('/albums/:albumId', (req, res) => {
  console.log(req.params.albumId); // 123cool4lbum
  const { albumId } = req.params;
});

// 2:
// https://dummyexample.com/students/sandra
app.get('/students/:name', (req, res) => {
  console.log(req.params.name); // sandra
  const { name } = req.params;
});

// 3:
// https://dummyexample.com/nature/large/1
app.get('/:imageType/:imageSize/:id', (req, res) => {
  console.log(req.params.imageType); // nature
  console.log(req.params.imageSize); // large
  console.log(req.params.id); // 1
  const { imageType, imageSize, id } = req.params;
});

// 4:
// https://dummyexample.com/stefan/123
app.get('/:user/:albumId', (req, res) => {
  console.log(req.params.user); // stefan
  console.log(req.params.albumId); // 123
  const { user, albumId } = req.params;
});

// QUERIES:

// 5:
// URL: https://localhost:3000/?category=coffee
app.get('/', (req, res) => {
  console.log(req.query.category); // coffee
  const { category } = req.query;
});

// 6:
// URL: https://localhost:3000/marketplace?category=code-review&type=apps
app.get('/marketplace', (req, res) => {
  console.log(req.query.category); // code-review
  console.log(req.query.type); // apps

  const { category, type } = req.query;
});

// 7:
// URL: https://localhost:3000/search?city=barcelona&accommodation=hotel&transport=public
app.get('/search', (req, res) => {
  console.log(req.query.city); // barcelona
  console.log(req.query.accommodation); // hotel
  console.log(req.query.transport); // public

  const { city, accommodation, transport } = req.query;
});

// 8: mix
// URL: https://localhost:3000/products/toys?prodID=123
app.get('/products/:category', (req, res) => {
  console.log(req.params.category); // toys
  console.log(req.query.prodID); // 123
});
