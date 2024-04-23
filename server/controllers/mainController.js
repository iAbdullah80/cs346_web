// GET / homepage

exports.homepage=async(req,res)=>{
    const locals={
        title:'Homepage',
        description:'test'
    }
    res.render('index', {
        locals,
        layout: '../views/layouts/front-page'
    })
}

// GET / About
exports.about=async(req,res)=>{
    const locals={
        title:'About',
        description:'test 2'
    }
    res.render('about', locals)
}