exports.getPosts = (req,res,next)=>{
    res.status(200).json({title: "new", post: "hehe"})
}


exports.addPost = (req, res, next) => {
    title = req.body.title;
    //create the post in db
    res.status(201).json({
        messages: "created succ",
        post: { id: new Date().toISOString(), title:title}

    }) 
}



