const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

class MongoManager{
    constructor(config){
        this._config = config;
    }
    getMongoUrl(){
        return this._config.MONGODB_URL;
    }
    connect(){
        return mongoose.connect(this.getMongoUrl(),{ useNewUrlParser: true })
            
        
    }
}


module.exports= { MongoManager };