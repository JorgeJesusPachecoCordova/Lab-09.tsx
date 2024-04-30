const fetchData = async (url) => {
  const response = await fetch(url);
  const data = await response.json();
  console.log(data);
};

(async () => {
  for (let i = 1; i <= 100; i++) {
    const url = `https://dummyjson.com/products/${i}`;
    await fetchData(url);
  }
})();