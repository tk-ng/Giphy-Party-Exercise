const form = document.querySelector("#gifForm");
const inputValue = document.querySelector("input");
const imgContainer = document.querySelector("#imgContainer");
const removeBtn = document.querySelector("#removeGIFs");

async function searchAndAddGiphy(term) {
	const res = await axios.get("http://api.giphy.com/v1/gifs/search", {
		params: {
			q: term,
			api_key: "MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym",
		},
	});
	const randomGIF = getRandom(res.data);
	let imgURL = randomGIF.images.downsized.url;
	createAndAppendImg(imgURL);
}

function getRandom(list) {
	let random1 = Math.floor(Math.random() * list.data.length);
	return list.data[random1];
}

function createAndAppendImg(url) {
	let img = document.createElement("img");
	img.src = url;
	img.classList.add("m-1");
	imgContainer.append(img);
}

form.addEventListener("submit", (e) => {
	e.preventDefault();
	searchAndAddGiphy(inputValue.value);
	inputValue.value = "";
});

removeBtn.addEventListener("click", (e) => {
	e.preventDefault();
	imgContainer.innerHTML = "";
});
