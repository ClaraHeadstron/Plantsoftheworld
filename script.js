function factfile_Function(popup_id) {
	//Function to pop up the fact file on plant screen
	//https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementById
    var popup = document.getElementById("id_popup");
    popup.classList.toggle("show");
}
    
function factfile_Exit_Function(popup_id) {
    var popup = document.getElementById("id_popup");
    popup.classList.toggle("hide");
}

function filter_Function() {
	//Function to search zone dropdown
	//https://www.w3schools.com/howto/howto_js_filter_lists.asp

	var input, a, i;
	input = document.getElementById("zone_search");
	big_case = input.value.toUpperCase();
	div = document.getElementById("dropDownSearch");
	a = div.getElementsByTagName("a");

	for (i = 0; i < a.length; i++) {
		txtValue = a[i].textContent || a[i].innerText;
		if (txtValue.toUpperCase().indexOf(big_case) > -1) {
			a[i].style.display = "";
		} else {
			a[i].style.display = "none";
		}
	}
}

function submit_Function(){
	//Fake submission window 
	window.alert("Contact form Submitted")
}

function fetch_trefle(){
	//This code is not fully working. See report under Challenges for more information
	//https://docs.trefle.io/docs/advanced/plants-fields
	//https://www.youtube.com/watch?v=zUcc4vW-jsI
	//https://developer.mozilla.org/en-US/docs/Web/API/Element/insertAdjacentHTML

	fetch('https://trefle.io/api/v1/plants?token=hsRxrASt2vEaQy1fNu6CXWdpqMydTfEn0NV0DU87EoA&order[year]=asc');
  	
	const json = response.json();
	data.forEach(plant => {
		const markup = `${plant.location}<br>${plant.growth_form}<br>${plant.ph_minimum} to ${plant.ph_maximum}<br>
						${plant.flower.color}<br>`;
		document.querySelector('ul').insertAdjacentHTML('beforeend', markup);
	}) 
  	console.log(json);
}

/*
//This code is working, however is not needed URI for the website. It was a test for integrating the trefle API
function fetcher(){ 

	fetch('https://jsonplaceholder.typicode.com/users')
		.then(res =>{
			return res.json();
		})
		.then(data =>{
			data.forEach(user => {
				const markup = `Name is ${user.name}</br> Email is ${user.email}`;
				document.querySelector('ul').insertAdjacentHTML('beforeend', markup);
			}) 
		})
		.catch(error => console.log(error));

}*/