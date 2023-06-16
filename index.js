function callback(){
    return "called back"
};

function  receivesAFunction(callback){
    callback()

};

function returnsANamedFunction(){
    return callback
};

function returnsAnAnonymousFunction(){
    return function(){
        return 'say hello'

    }
};
