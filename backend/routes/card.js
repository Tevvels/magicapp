const router = require('express').router();
let card = require("../models/card.model");

router.route('/').get((req,res)=>{
	Card.find()
		.then(card => res.json(card))
		.catch(err => res.status(400).json("Error: " + err));
})

router.route('/add').post((req,res)=>{
	const cardName = req.body.cardName;
	const cardType = req.body.cardType;
	const cardAttribute = req.body.cardAttribute;
	const cardSet = req.body.cardSet;
	const cardDesc = req.body.cardDesc;
	const newCard = new Card({
		cardName,
		cardType,
		cardAttribute,
		cardSet,
		cardDesc,
	});
	newCard.save()
		.then(()=>res.json('Card Added'))
		.catch(err => res.status(400).json("Error: " + err));

});

router.route('/:id').get((req,res)=>{
	card.findById(req.params.id)
		.then(card => res.json(card))
		.catch(err => res.status(400).json("Error:" + err));

});

router.route('/:id').delete((req,res) =>{
	card.findByIdAndDelete(req.params.id)
		.then(cared => res.json("Card Removed"))
		.catch(err => res.status(400).json("Error:" + err));		
});


router.route('/update/:id').post((req,res)=>{
	card.findById(req.params.id)
		.then(card =>{
			card.cardName = req.body.cardName;
			card.cardType = req.body.cardType;
			card.cardAttribute = req.body.cardAttribute;
			card.cardSet = req.body.cardSet;
			card.cardDesc = req.body.cardDesc;
			card.save()
				
		})
		.catch(err => res.status(400).json("Error:" + err));		

});

module.exports = router;