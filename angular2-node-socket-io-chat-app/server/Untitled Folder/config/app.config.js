   /* ============================  Config file of routes  =================================*/
export const conf={
	login:
	{
		error:"error occured",
		notFound:"user not found",
		authentication:"Authentication failed. Passwords did not match.",
		Bearer:"Bearer ",
		serverError:"Server Error"
	},
	addAccount:
	{
		alreadyExist:"account already exists",
		serverError:"Server Error"
	},
	deleteAccount:{
		serverError:"Server Error"
	},
	getAccount:{
		serverError:"Server Error"
	},
	addCategory:{
		nameExists:"category Name already exist",
		serverError:"Server Error"
	},
	deleteCategory:{
		serverError:"Server Error"
	},
	getCategory:{
		serverError:"Server Error"
	},
	updateCategory:{
		serverError:"Server Error"
	},
	delete:{
		serverError:"Server Error"
	},
	change:{
		bcrptGetSalt:"bcrypt genSalt error ",
		error:"bcrypt hash error ",
		badRequest:"Bad Request ",
		serverError:"Server Error"
	},
	forget:
	{
		invalidEmail:"Invalid Email id",
		serverError:"Server Error"
	},
	mailSend:
	{ 
		expenseManager:"Expense Manager",
		invalidEmail:"Invalid email address",
		budgetOvershoot:"Budget Overshootmail sent"
	},
	plaidAccessToken:{
		serverError:"Server Error"
	},
	plaidAccount:{
		serverError:"Server Error",
		message:"Unable to pull accounts from the Plaid API."
	},
	plaidItem:{
		serverError:"Server Error",
		message:"Unable to pull institution information from the Plaid API."
	},
	register:
	{
		userExist:"user already exists",
		exist:"already exist",
		new:"new user",
		newUser:"new user registered",
		serverError:"Server Error"
	},
	resetPassword:{	serverError:"Server Error",
		notExist:"does not exist",
		bcryptGen:"bcrypt genSalt error ",
		bcryptHash:"bcrypt hash error "
	},
	addTransaction:
	{
		notExist:"Category and the Account Doesn't exists",
		serverError:"Server Error"
	},
	deleteTransaction:
	{
		notExistCategory:"Category Doesnot exists",
		serverError:"Server Error"
	},
	updateTransaction:{
		serverError:"Server Error"
	},
	getTransaction:{
		serverError:"Server Error"
	},
	uploadTransaction:{
		serverError:"Server Error"
	},
	upload:
	{
		internalError:"Some internal problem in data upload",
		dataUploaded:"Data uploaded successfully",
		somethingWrong:"Something went wrong. Please Try Again",
		wrongExtension: 'Wrong extension type'
	},
	forgetChange:{
		afterHashPasswordMessage:"bcrypt genSalt error ",
		bcryptHashMessage:"bcrypt hash error ",
		badRequest:"Bad Request "
	},
	mailer:{
		user:"expensemanager1295@gmail.com",
		pass:"Expense@12",
		from:"expensemanager1295@gmail.com",
		serverError:"Server Error"
	}
}
