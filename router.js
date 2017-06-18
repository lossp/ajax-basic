router.get('/loadMore', function(req, res){
	var curIndex = req.query.index;
	var length = req.query.length;
	var data = [];

	for(var i = 0; i < length; i++){
		data.push('News' + (parseInt(curIndex)+i))
	};

    setTimeout(function(){
    	res.send(data);
    }, 3000)

});