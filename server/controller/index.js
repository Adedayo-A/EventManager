const centers = [
	{
		"id": "1",
		"name": "Grace hall",
		"capacity": "2000",
		"rating": "* * * * *",
		"Upcoming events": "Award ceremony",
		"descriptions": "Beside the popular red ocean mall"
	},

	 {
	 	"id": "2",
		"name": "Ballerina hall",
		"capacity": "2500",
		"rating": "* * * * *",
		"Upcoming events": "Wedding ceremony",
		"descriptions":"20 mins drive from the mainland exit"
	},	


	{
		"id": "3",
		"name": "Friends hall",
		"capacity": "1500",
		"rating": "* * * * *",
		"Upcoming events": "Music show",
		"descriptions": "From the airport, take the lane 3 down"
	},


	{
		"id": "4",
		"name": "Diamond's hall",
		"capacity": "2500",
		"rating": "* * * * * *",
		"Upcoming events": "Blue governor's conference",
		"descriptions": "Behind the Government's square buildings"
	}
]


const events = [
	{
		"id": "event1",
		"name of event": "race party",
		"Date of event": "12/12/2017",
		"location": "Diamond's hall",
		"descriptions": "Behind the Government's square buildings",
		"Host": "Fola Ajayi"
		
	},

	 {
		"id": "event2",
		"name of event": "Entrepreneurship meet-up",
		"Date of event": "15/12/2017",
		"location": "Grace hall",
		"descriptions": "Beside the popular red ocean mall",
		"Host": "Mary swiss"
	},


	{
		"id": "event3",
		"name of event": "Merit Award ceremony",
		"Date of event": "17/12/2017",
		"location": "Friend's hall",
		"descriptions": "From the airport, take the lane 3 down",
		"Host": "Ankers",
	},


	{
		"id": "event4",
		"name of event": "Karaoke night",
		"Date of event": "13/12/2017",
		"location": "Ballerina hall",
		"descriptions": "20 mins drive from the mainland exit",
		"Host": "Paul Thomas"
	}
]



 module.exports = (app) => {
   app.get('/api', (req, res) => res.status(200).send({
     message: 'Welcome to the BOOK Events API!',
   }));
 
   // list all centers
   app.get('/api/centers', (req, res) => {
		var recipesList = [];
		// convert recipes object to list
		Object.keys(recipes).forEach((key) => {
			recipesList.push(recipes[key])
		})

		if (req.query.sort === 'upvotes') {
			// sort recipes by ascending order of upvotes
			recipesList.sort((a, b) => {
				return a.upvotes - b.upvotes
			});
		}
		res.status(200).send({
			message: recipesList
		});
 	})
 

    // Add a center
 	app.post('/api/recipes', (req, res) => {
 		recipes[req.body.id] = req.body
	   	res.status(200).send({
	     	message: ['center added successfully', recipes]
	   	});
 	})
 	// create an event
 	app.post('/api/recipes', (req, res) => {
 		recipes[req.body.name] = req.body
	   	res.status(200).send({
	     	message: ['event added successfully', recipes]
	   	});
 	})

 	// get a center
 	app.get('/api/recipes/id', (req, res) => {
	   	res.status(200).send({
	     	message: recipes[req.params.recipeId]
	   	});
 	})

 	// get an event
 	app.get('/api/recipes/id', (req, res) => {
	   	res.status(200).send({
	     	message: recipes[req.params.recipeId]
	   	});
 	})
 
 	// Modify the details of center
 	app.put('/api/recipes/:id', (req, res) => {
 		recipes[req.params.recipeId] = req.body
	   	res.status(200).send({
	     	message: ['center updated successfully', recipes]
	   	});
 	})

 	// Modify the details of events
 	app.put('/api/recipes/:id', (req, res) => {
 		recipes[req.params.recipeId] = req.body
	   	res.status(200).send({
	     	message: ['event updated successfully', recipes]
	   	});
 	})

 	// delete an event
 	app.delete('/api/recipes/:id', (req, res) => {
 		delete recipes[req.params.recipeId]
 		res.status(200).send([{message:'recipe deleted successfully'}, recipes])
 	})
 }
