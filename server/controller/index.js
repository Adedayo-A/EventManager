const centers = require('../db/centers')
const events = require('../db/events')

const validateId = (id, data) => {
	return data.length > id;
}

class Controllers {

	static getAll(req,res){
   res.status(200).send({
    message: 'Welcome to the BOOK Events API!',
  })
}

	static addCenter(req, res) {
	  req.body.id = centers.length;
      centers.push(req.body);
      res.status(200).send(centers);
	}

	static addEvent(req, res) {
	  req.body.id = events.length;
      events.push(req.body)
      res.status(200).send(events);
	}

	static listEvent(req,res) {
		res.status(200).send(centers)
	}

	static getEvent(req,res){
		res.status(200).send(centers)
   }

	static getCenter(req,res){
		res.status(200).send(centers)
	}

	static getACenter(req,res){
		let aCenter;
       let isUndefined = false
       for (let i = 0;i < centers.length; i++) {
         if ( centers[i].id === parseFloat(req.params.id)) {
           aCenter = centers[i];
           break;
         } else {
           isUndefined = true
         }
       }
       if (aCenter) {
         return res.status(200).send({ message: 'Success', aCenter})
       } else {
         return res.status(400).send({ error: 'no center found'})
       }
   }

	static modifyEvent(req,res){
		const id = req.param.id - 1; // zero index
		console.log(id);
       if (validateId(id, events)) {
           events[id] = req.body;
           return res.status(200).send(events[id]);
       } else {
           return res.sendStatus(404);
       }
   }

	static modifyCenter(req,res){
		 const id = req.param.id - 1; // zero index
       if (validateId(id, events)) {
           events[id] = req.body;
           return res.status(200).send(events[id]);
       } else {
           return res.sendStatus(404);
       }
      }

    static deleteEvent(req,res){
       	const id = req.param.id - 1; // zero index
       if (validateId(id, events)) {
           events.splice(id, 1);
           return res.status(200).send(events);
       } else {
           return res.sendStatus(404);
       }

     }
   }



module.exports = Controllers
  
