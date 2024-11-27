const Database= require('better-sqlite3')
const path = require('path')
const db = new Database(path.join(__dirname,'../assets/database/data.sqlite'))

exports.query = (sql) =>{
    
   return db.prepare(sql).all()

}

process.on('SIGINT', () => {
    db.close();
    console.log('SQLite database connection closed.');
    process.exit(0);
});
