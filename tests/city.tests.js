// test cases for city list component
// 1 - list the cities as per master data when starts with search key
// 2 - No cities as per master  data when city name ends with search key
// 3 - No city list when entered search city doesn't match with master data

const whenSearchCity = (data, searchCity) => {
	const filteredCityList = data.filter((item) => item.startsWith(searchCity));
	const outputCity = ["Pune", "punjab"];
	const isMatch = outputCity.map((item) => filteredCityList.includes(item));
	if (isMatch) {
		return "Pass";
	} else {
		return "Failed";
	}
};

export const unitTests = () => {
	const data = ["pUne", "patna", "punjab", "jaipur", "delhi", "West Bengal"];
	const test1 = whenSearchCity(data, "Pun");
	const test2 = whenSearchCity(data, "ur");
	const test3 = whenSearchCity(data, "mumbai");
	console.log({ test1, test2, test3 });
};
