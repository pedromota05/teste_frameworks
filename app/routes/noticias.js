module.exports=(app)=>{
	app.get('/noticia', (req,res)=>{
		const dbConnection=require('../../config/dbConnection');
		const connection=dbConnection();
			connection.query('select * from noticias',(error,result)=>{
				if(error){
					console.log(error);
				}
				res.render('noticias/noticia.ejs',{noticias:result}); //Renderização da tela noticia.ejs juntamente com o envio da variavel result
			});
	});
}