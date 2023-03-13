//  variables
const hambugerMenuBtn = document.querySelector(".hambuger-menu");
const menuContainer = document.querySelector(".menu-container");

console.log(hambugerMenuBtn);
console.log("rock and roll");
// console.log(menuContainer);

// event listners
hambugerMenuBtn.addEventListener("click", toggleMobileNavlinks);

// functions
function toggleMobileNavlinks() {
  menuContainer.classList.toggle("visible");
}

// const encodedParams = new URLSearchParams();
// encodedParams.append(
//   "url",
//   "https://www.google.com/search?q=long+url+example&sxsrf=AJOqlzXk343WXE2vYJ181nH08DI4cQp1Rg%3A1677144062024&ei=_i_3Y-uMAcSFxc8Py-aUoAs&oq=long+url+&gs_lcp=Cgxnd3Mtd2l6LXNlcnAQARgCMgoIABCABBAUEIcCMgUIABCRAjIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQyBQgAEIAEOgoIABBHENYEELADOgcIABCwAxBDSgQIQRgAUOABWOABYKgTaAFwAXgAgAGnAogBpwKSAQMyLTGYAQCgAQHIAQrAAQE&sclient=gws-wiz-serp"
// );

// const options = {
//   method: "POST",
//   headers: {
//     "content-type": "application/x-www-form-urlencoded",
//     "X-RapidAPI-Key": "61df90924fmshc7de4462364a6e5p15cf77jsncfd1a31b65ba",
//     "X-RapidAPI-Host": "url-shortener-service.p.rapidapi.com",
//   },
//   body: encodedParams,
// };

// fetch("https://url-shortener-service.p.rapidapi.com/shorten", options)
//   .then((response) => response.json())
//   .then((response) => console.log(response))
//   .catch((err) => console.error(err));
