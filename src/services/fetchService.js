const apiKey = 'm4ss_wIcU9iqOwtjSIULVCwe-ipAJi87MaDUc1oPy7o';

export const fetchAPI = (query, page) => {
  let url = `https://api.unsplash.com/search/photos?page=${page}&query=${query}&client_id=${apiKey}`;

  fetch(url)
    .then(resp => resp.json())
    .then(function (data) {
      console.log(data);
    });
};