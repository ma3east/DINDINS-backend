db.dropDatabase();
// =========USERS==========
var sam =
	{
		username: "Sam the Silly ",
		email: "sammy@damanny.com",
		location: "LDN",
		password: "pwd"
	}
db.users.save(sam, function(err) {
	if(err) return handleError(err);
});
var dami =
	{
		username: "Dami the Wise",
		email: "dami@dapansy.com",
		location: "PUTNEY",
		password: "pwd4"
	}
db.users.save(dami, function(err) {
	if(err) return handleError(err);
});
var andrea =
	{
		username: "Andrea the Radiant",
		email: "andy@roddick.com",
		location: "EAST",
		password: "pwd8"
	}
db.users.save(andrea, function(err) {
	if(err) return handleError(err);
});
var fran =
	{
		username: "Fran the Fabulous",
		email: "fran@dawoman.com",
		location: "GER",
		password: "pwd10"
	}
db.users.save(fran, function(err) {
	if(err) return handleError(err);
});
// ==========PRODUCTS============
var fish = {
	addedBy: sam._id,
	name: "Fish",
	image: "https://images.duckduckgo.com/iu/?u=http%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2F7%2F77%2FPuffer_Fish_DSC01257.JPG&f=1",
	quantity: "4",
	bestBefore: "2016-1-1",
	available: true
}
db.products.save(fish);
var cheese = {
	addedBy: fran._id,
	name: "Cheese",
	image: "https://images.duckduckgo.com/iu/?u=http%3A%2F%2Fstatic.neatorama.com%2Fimages%2F2009-06%2Fslice-cheese.jpg&f=1",
	quantity: "400g",
	bestBefore: "2035-10-10",
	available: true
}
db.products.save(cheese);
var hami = {
	addedBy: dami._id,
	name: "Ham",
	image: "https://images.duckduckgo.com/iu/?u=http%3A%2F%2Fgraphics8.nytimes.com%2Fimages%2F2013%2F03%2F20%2Fdining%2F20HAM_SPAN%2F20HAM_SPAN-articleLarge.jpg&f=1",
	quantity: "200kg",
	bestBefore: "2077-11-11",
	available: true
}
db.products.save(hami);
var apples = {
	addedBy: andrea._id,
	name: "Apples",
	image: "https://images.duckduckgo.com/iu/?u=http%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.M0ec96fe04679138ca24d2964074f8232H0%26pid%3D15.1&f=1",
	quantity: "8",
	bestBefore: "2015-7-4",
	available: true
}
db.products.save(apples);
// ==========TRANSACTIONS==============
var fish4Fran = 
	{
		giverId:sam._id,
		takerId:fran._id,
		products:fish._id,
		availableTime: "3pm",
		meetingTime:"2012-1-8",
		location:sam.location,
		status:"open",
		rating:0
	}
db.transactions.save(fish4Fran);
var ham4Sam = 
	{
		giverId:dami._id,
		takerId:sam._id,
		products:hami._id,
		availableTime: "7pm",
		meetingTime:"2016-10-18",
		location:sam.location,
		status:"open",
		rating:0
	}
db.transactions.save(ham4Sam);
var cheese4Andrea = 
	{
		giverId:fran._id,
		takerId:andrea._id,
		products:cheese._id,
		availableTime: "1am",
		meetingTime:"2015-10-8",
		location:"Sweden",
		status:"failed",
		rating:0
	}
db.transactions.save(cheese4Andrea);
var apples4Dami = 
	{
		giverId:andrea._id,
		takerId:dami._id,
		products:apples._id,
		availableTime: "11pm",
		meetingTime:"2044-6-3",
		location:"Brick Pain",
		status:"waiting for reviews",
		rating:0
	}
db.transactions.save(apples4Dami);				

