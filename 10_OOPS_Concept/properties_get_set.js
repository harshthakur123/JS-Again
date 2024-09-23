function User(email,password){
    this._email=email
    this._password=password


    Object.defineProperty(this,'email',{
        get : function(){
            return this._email.toUpperCase();
        },
        set : function(value){
            this._email=value;
        }
    });
}

const harsh = new User("harsh123",'123')
console.log(harsh.email);
 