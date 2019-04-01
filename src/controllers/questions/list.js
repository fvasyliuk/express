const list = ({ Question }, { config }) => async(req, res, next)=>{    
    try {
        const question = await Question.find({});
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        res.status(200).send({ question });
    } catch (err) {
        next(err);
    }
    
};

module.exports = { list };