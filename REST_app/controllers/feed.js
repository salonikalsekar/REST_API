exports.getPosts = (req,res,next)=>{
    res.status(200).json({_id: "1",  title: "new", content: "hehe", imgUrl: "https://lorempixel.com/420/320/abstract/1/Sample", creator:  {name: "xyz"}, createdAt: new Date()})
}


exports.addPost = (req, res, next) => {
    title = req.body.title;
    //create the post in db
    res.status(201).json({
        messages: "created succ",
        post: { id: new Date().toISOString(), title:title}

    }) 
}



