const apiKey = 'm4ss_wIcU9iqOwtjSIULVCwe-ipAJi87MaDUc1oPy7o';

export const fetchAPI = (query, page) => {
  let url = `https://api.unsplash.com/search/photos?page=${page}&query=${query}&client_id=${apiKey}`;

  return fetch(url)
    .then(resp => resp.json())
    .then(data => {
      let results = [];
      let totalPages = data.total_pages;
      data.results.forEach(element => {
        results.push(element);
      });
      return [results, totalPages];
    })
    .catch(err => {
      return err;
    });
};
