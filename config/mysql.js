const mysql=require('mysql')
const db=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'Bittu@2019',
    database:'movies'
})

db.connect((error)=>{
    if(error){
        console.log('error in connecting to db \n',error)
        return
    }
    console.log('------------  connected to database -------------')

})

module.exports=db;
