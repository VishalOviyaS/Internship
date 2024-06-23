const mysql=require('mysql2')
const express=require('express');
var app=express();
const bodyparser=require('body-parser');
app.use(bodyparser.json());
var mysqlconnection=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'3107oviya',
    database:'form_db',
});

mysqlconnection.connect((err)=> {
    if(!err)
        console.log('DB connection succeded');
    else
        console.log('DB connection failed \n Error:' +JSON.stringify(err,undefined,2));
});
app.listen(3000,()=>console.log('express server is running at 3000'));
app.get('/form',(res,req)=>{
    mysqlconnection.query('SELECT * FROM form',(err,rows,fields)=>{
        if(!err)
            console.log(rows);
        else
         console.log(err);
        
    })
})
