const delivery = ({ Question }, { config }) => async(req, res, next)=>{    
    try {
        const question = await Question.find({});
        console.log('MY POST ----- req',req.body);
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        res.status(200).send(req.body);
        
    } catch (err) {
        next(err);
    }
    
};

module.exports = { delivery };