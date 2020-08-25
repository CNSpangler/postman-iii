export const getData = async(url) => {
  await fetch(url)
    .then(res => res.json())
    .catch(err => console.log(err));
}