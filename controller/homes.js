exports.getaddhome = (req,res,next)=>{
    res.render('addhome');
};


const homes = [];

exports.getthankyou = (req,res,next)=>{
    homes.push(req.body);
    res.render('thankyou');
}

exports.homepost = (req,res,next)=>{
    res.render('home',{homes});
};

exports.default = (req,res,next)=>{
    res.render('home');
};