let mongoose = require ('mongoose');
let bcrypt = require ('bcrypt-nodejs');
// import bcrypt from 'bcrypt-nodejs';
mongoose.set('debug',true);

/*=======================  Defining the schema  =============================================*/
let UserSchema=new mongoose.Schema({
/*=======================  schema for register user =============================================*/
	fullName:{type:String,required:true},
	email:{type:String,unique:true,required:true},
	password:{type:String,required:true},
	contact:{type:Number,required:true},
	dob:{type: Date,required:true},
	gender:{type:String,required:true},
	profilePhoto:{type:String},
	status:{type:String},
	isActive:{type:Boolean},
/*=======================  schema for chats =============================================*/
	chats:[{
		from:{type:String},
		to:{type:String},
		time:{type:Date},
		message:{type:String},
		flag:{type:Boolean}
	}],
	uploads:[]
},{collection:"chat", versionKey:false});


UserSchema.pre('save', function (next) {  
	let user = this;
	if (this.isModified('password') || this.isNew) {
		bcrypt.genSalt(10, function (err, salt) {
			if (err) {
				return next(err);
			}
			bcrypt.hash(user.password, salt,null, function(err, hash) {
				if (err) {
					return next(err);
				}
				user.password = hash;
				next();
			});
		});
	} else {
		return next();
	}
});

module.exports=mongoose.model('chat',UserSchema);
