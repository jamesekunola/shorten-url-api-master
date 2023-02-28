//  variables
const hambugerMenuBtn = document.querySelector(".hambuger-menu");
const menuContainerEl = document.querySelector(".menu-container");
const userInputURL = document.querySelector('input[type="text"]');
const submitBtn = document.querySelector('input[type="submit"]');
const shortenLinkEl = document.querySelector(".url-shorten-container");
let urlOutComeDiv = document.querySelector(".url-result__outcome");
const errorMsg = document.querySelector(".url-shorten-container p");
const encodedParams = new URLSearchParams();

// event listners
hambugerMenuBtn.addEventListener("click", toggleMobileNavlinks);
submitBtn.addEventListener("click", shortenURLlink);
userInputURL.addEventListener("keyup", (e) => {
  if (e.key === "Enter") {
    shortenURLlink();
  }
});

// functions
function toggleMobileNavlinks() {
  menuContainerEl.classList.toggle("visible");

  //  disable scroll when mobile nav is active
  const overflow = menuContainerEl.classList.contains("visible")
    ? "hidden"
    : "visible";

  document.body.style.overflowY = overflow;
}

function shortenURLlink() {
  // shorten url if user input isn't an empty string
  if (userInputURL.value) {
    encodedParams.append("url", `${userInputURL.value}`);

    const options = {
      method: "POST",
      headers: {
        "content-type": "application/x-www-form-urlencoded",
        "X-RapidAPI-Key": "61df90924fmshc7de4462364a6e5p15cf77jsncfd1a31b65ba",
        "X-RapidAPI-Host": "url-shortener-service.p.rapidapi.com",
      },
      body: encodedParams,
    };

    fetch("https://url-shortener-service.p.rapidapi.com/shorten", options)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          displayErrorMsg("url is incorrect");
        }
      })
      .then((response) => {
        urlOutComeDiv.innerHTML += `
        <div class="url-outcome">
          <div>
            <p class="initial-url">${userInputURL.value}</p>  
          </div>
          <div class="shorten-url">
            <p>${response.result_url}</p>
            <button class="hero-btn copy" onclick = 'copyLink(this)'>Copy</button>
          </div>
        </div>`;

        userInputURL.value = "";
      })
      .catch(() => displayErrorMsg("No internet connection"));
  } else {
    displayErrorMsg("incorrect url");
  }
}

function copyLink(btn) {
  const textToCopy = btn.parentElement.querySelector("p");
  let testArea = document.createElement("textarea");

  testArea.setAttribute("readonly", "");
  testArea.style.position = "absolute";
  testArea.value = textToCopy.textContent;
  document.body.appendChild(testArea);
  testArea.select();
  document.execCommand("copy");
  document.body.removeChild(testArea);

  // add bg to copied text
  btn.classList.add("copied");
  btn.textContent = "copied";
}

function displayErrorMsg(msg) {
  errorMsg.innerHTML = msg;
  errorMsg.setAttribute("aria-hidden", "false");
  shortenLinkEl.classList.add("error");

  setTimeout(() => {
    errorMsg.setAttribute("aria-hidden", "true");
    shortenLinkEl.classList.remove("error");
  }, 1000);
}
