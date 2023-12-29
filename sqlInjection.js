//  1. User input =>        username-admin  passsword-1234
function sqlQueryExecution(username , password){
    //  connect to sql 
    const query = 'SELECT * FROM users WHERE name ='+ username+'AND password ='+password
    // Execute query
    const dataFromDB = query // sql.query(query)

    return dataFromDB ;
}

sqlQueryExecution('admin',1234)           //if data present auth true
// admin 1234 are from query params from frontend through input form and the data present in db

sqlQueryExecution('admin --',1000)      // -- acts as a command line in sql which implies only if the username is known it is enough to get auth

sqlQueryExecution(' "unknown user" OR "a"="a" ',1000)       // returns all the username and password of all users though the user's username and password are not in DB   

sqlQueryExecution('unknown user ;"TRUNCATE users" --',1000)      //delete all the datas  from db

sqlQueryExecution('unknown user ;"Drop table users"',1000)           //delete the table 
