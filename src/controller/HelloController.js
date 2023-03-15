exports.Hello = (req,res)=>{

	res.status(200).json({status: "0k", data: "This is hello api"});
}
