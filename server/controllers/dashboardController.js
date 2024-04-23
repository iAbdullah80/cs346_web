// GET / dashboard

exports.dashboard=async(req,res)=>{
    const locals={
        title:'Dashboard',
        description:'test'
    }
    res.render('dashboard/index', {
        locals,
        layout: '../views/layouts/dashboard'
    })
}
