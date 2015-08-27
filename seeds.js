db.dropDatabase();
// =========USERS==========
var sam =
	{
		username: "Sam the Silly ",
		email: "sammy@damanny.com",
		location: "LDN",
		password: "$2a$05$49N3TgHLZ/lVnn/cepOhsua.Fl.R8wnB9FqpFkR5y1kHQEh03gEA.",
		reputation: -5
	}
db.users.save(sam, function(err) {
	if(err) return handleError(err);
});
var dami =
	{
		username: "Dami the Wise",
		email: "dami@dapansy.com",
		location: "PUTNEY",
		password: "$2a$05$49N3TgHLZ/lVnn/cepOhsua.Fl.R8wnB9FqpFkR5y1kHQEh03gEA.",
		reputation: 10
	}
db.users.save(dami, function(err) {
	if(err) return handleError(err);
});
var andrea =
	{
		username: "Andrea the Radiant",
		email: "andy@roddick.com",
		location: "EAST",
		password: "$2a$05$49N3TgHLZ/lVnn/cepOhsua.Fl.R8wnB9FqpFkR5y1kHQEh03gEA.",
		reputation: 35
	}
db.users.save(andrea, function(err) {
	if(err) return handleError(err);
});
var fran =
	{
		username: "Fran the Fabulous",
		email: "fran@dawoman.com",
		location: "GER",
		password: "$2a$05$49N3TgHLZ/lVnn/cepOhsua.Fl.R8wnB9FqpFkR5y1kHQEh03gEA.",
		reputation: 2
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
	bestBefore: "2016-1-1"
}
db.products.save(fish);
var cheese = {
	addedBy: fran._id,
	name: "Cheese",
	image: "https://images.duckduckgo.com/iu/?u=http%3A%2F%2Fstatic.neatorama.com%2Fimages%2F2009-06%2Fslice-cheese.jpg&f=1",
	quantity: "400g",
	bestBefore: "2035-10-10"
}
db.products.save(cheese);
var hami = {
	addedBy: dami._id,
	name: "Ham",
	image: "https://images.duckduckgo.com/iu/?u=http%3A%2F%2Fgraphics8.nytimes.com%2Fimages%2F2013%2F03%2F20%2Fdining%2F20HAM_SPAN%2F20HAM_SPAN-articleLarge.jpg&f=1",
	quantity: "200kg",
	bestBefore: "2077-11-11"
}
db.products.save(hami);
var apples = {
	addedBy: andrea._id,
	name: "Apples",
	image: "https://images.duckduckgo.com/iu/?u=http%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.M0ec96fe04679138ca24d2964074f8232H0%26pid%3D15.1&f=1",
	quantity: "8",
	bestBefore: "2015-7-4"
}
db.products.save(apples);
// ==========TRANSACTIONS==============
var fish4Fran = 
	{
		giverId:sam._id,
		products:fish._id,
		availableTime: "3pm",
		location:"Oxford Circus London",
		status:"open",
		rating:0,
		lat:51.4898,
		lng:-0.04801
	}
db.transactions.save(fish4Fran);
var ham4Sam = 
	{
		giverId:dami._id,
		products:hami._id,
		availableTime: "7pm",
		location:"Peckham London",
		status:"open",
		rating:0,
		lat:51.49765,
		lng:-0.06937
	}
db.transactions.save(ham4Sam);
var cheese4Andrea = 
	{
		giverId:fran._id,
		products:cheese._id,
		availableTime: "1am",
		location:"Camden London",
		status:"open",
		rating:0,
		lat:51.49186,
		lng:-.073067
	}
db.transactions.save(cheese4Andrea);
var apples4Dami = 
	{
		giverId:andrea._id,
		products:apples._id,
		availableTime: "11pm",
		location:"Brick Lane London",
		status:"open",
		rating:0,
		lat:51.5220066,
		lng:-.084512
	}
db.transactions.save(apples4Dami);				

