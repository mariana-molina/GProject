import { createApi } from 'unsplash-js';

type State = {
	searchHistory: string[];
	currentSearch: string;
};

let state: State = {
	searchHistory: [''],
	currentSearch: 'cat',
};

const update = (newState: State) => {
	state = { ...state, ...newState };
	window.dispatchEvent(new Event('statechange'));
};

const unsplash = createApi({
	accessKey: 'O3jf0Le_tBem9sMo0Y2Nlis9VKNAVqEsTDPUzZWetb4',
});

const htmlSearch = document.getElementById('searchButton') as HTMLButtonElement;
htmlSearch.addEventListener('click', () => {
	const searchInput = document.getElementById('searchText') as HTMLInputElement;
	const textValue = searchInput.value;
	state.searchHistory.push(textValue);
	update({ searchHistory: state.searchHistory, currentSearch: textValue });
});

export const fetchingPhotos = async (keyword: string) => {
	const unsplashObj = await unsplash.search
		.getPhotos({ query: keyword, orientation: 'landscape' })
		.then(result => result);
	return unsplashObj;
};

const addtoDom = async () => {
	const unsplashObj = await fetchingPhotos(state.currentSearch);
	const imgsElement = document.querySelector('#app') as HTMLDivElement;
	imgsElement.innerHTML = '';
	unsplashObj.response?.results.forEach(item => {
		const flipCardDiv = document.createElement('div');
		flipCardDiv.setAttribute('class', 'flip-card');

		const flipCardInnerDiv = document.createElement('div');
		flipCardInnerDiv.setAttribute('class', 'flip-card-inner');

		const flipCardFrontDiv = document.createElement('div');
		flipCardFrontDiv.setAttribute('class', 'flip-card-front');

		const flipCardBackDiv = document.createElement('div');
		flipCardBackDiv.setAttribute('class', 'flip-card-back');

		const imgElement = document.createElement('img');
		imgElement.setAttribute('src', item.urls.small);
		imgElement.setAttribute('class', 'foundimages');
		imgElement.setAttribute(
			'alt',
			item.alt_description || 'no information for this image'
		);

		flipCardFrontDiv.append(imgElement);
		const textImg = document.createElement('p');
		textImg.setAttribute('class', 'text-alt-info');
		textImg.innerHTML = item.alt_description || 'no information for this image';

		flipCardBackDiv.append(textImg || 'no information for this image');

		flipCardInnerDiv.append(flipCardFrontDiv);
		flipCardInnerDiv.append(flipCardBackDiv);

		flipCardDiv.append(flipCardInnerDiv);

		document.querySelector<HTMLDivElement>('#app')!.append(flipCardDiv);
	});
};

const searchSuggestion = () => {
	const suggestionsElement = document.getElementById('searchText');
	suggestionsElement?.addEventListener('focus', () => {
		const ulElement = document.getElementById(
			'suggestionList'
		) as HTMLUListElement;
		ulElement.innerHTML = '';
		state.searchHistory.forEach(item => {
			const liElement = document.createElement('li');
			liElement.innerHTML = item;
			ulElement.append(liElement);
		});
	});
};
searchSuggestion();

window.addEventListener('statechange', () => {
	addtoDom();
});

export default {};
