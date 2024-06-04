const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '3246980676msh38cf4245a75f218p174200jsn8be091dd705b',
		'X-RapidAPI-Host': 'imdb188.p.rapidapi.com'
	}
};
       
	   
	   const mov = (movie) => {
	      
		  
		  
		  fetch('https://imdb188.p.rapidapi.com/api/v1/searchIMDB?query=' + movie, options)
		  .then( (response) => {return response.json()})
		  .then( (data) => {console.log(data)

			mov_1.innerHTML = mov_1.innerHTML + "<img src= \"" + data.data[0].image + "\">" + "<br>" + "Id :" + data.data[0].qid + "<br>" + "Title :" + data.data[0].title +
			"<br>" + "Stars :" + data.data[0].stars + "<br>" + "Released on :" + data.data[0].year

			mov_2.innerHTML = mov_2.innerHTML + "<img src= \"" + data.data[1].image + "\">" + "<br>" + "Id :" + data.data[1].qid + "<br>" + "Title :" + data.data[1].title +
			"<br>" + "Stars :" + data.data[1].stars + "<br>" + "Released on :" + data.data[1].year

			mov_3.innerHTML = mov_3.innerHTML + "<img src= \"" + data.data[2].image + "\">" + "<br>" + "Id :" + data.data[2].qid + "<br>" + "Title :" + data.data[2].title +
			"<br>" + "Stars :" + data.data[2].stars + "<br>" + "Released on :" + data.data[2].year

			mov_4.innerHTML = mov_4.innerHTML + "<img src= \"" + data.data[3].image + "\">" + "<br>" + "Id :" + data.data[3].qid + "<br>" + "Title :" + data.data[3].title +
			"<br>" + "Stars :" + data.data[3].stars + "<br>" + "Released on :" + data.data[3].year

			mov_5.innerHTML = mov_5.innerHTML + "<img src= \"" + data.data[4].image + "\">" + "<br>" + "Id :" + data.data[4].qid + "<br>" + "Title :" + data.data[4].title +
			"<br>" + "Stars :" + data.data[4].stars + "<br>" + "Released on :" + data.data[4].year

			mov_6.innerHTML = mov_6.innerHTML + "<img src= \"" + data.data[5].image + "\">" + "<br>" + "Id :" + data.data[5].qid + "<br>" + "Title :" + data.data[5].title +
			"<br>" + "Stars :" + data.data[5].stars + "<br>" + "Released on :" + data.data[5].year

			mov_7.innerHTML = mov_7.innerHTML + "<img src= \"" + data.data[6].image + "\">" + "<br>" + "Id :" + data.data[6].qid + "<br>" + "Title :" + data.data[6].title +
			"<br>" + "Stars :" + data.data[6].stars + "<br>" + "Released on :" + data.data[6].year

			mov_8.innerHTML = mov_8.innerHTML + "<img src= \"" + data.data[7].image + "\">" + "<br>" + "Id :" + data.data[7].qid + "<br>" + "Title :" + data.data[7].title +
			"<br>" + "Stars :" + data.data[7].stars + "<br>" + "Released on :" + data.data[7].year


		  


		     
			  
		   
		  })	
	    
	   }
	   
	   
	   submit.addEventListener( "click", (event) => {
	     event.preventDefault()
		 mov(movie.value)
		 none.innerHTML = ""
	   })