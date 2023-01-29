var nodemailer = require ("nodemailer");

router.post('/',async(req,res,next) => {
     var nombre = req.ody.nombre;
     var email = req.body.email;
     var tel = req.body.mensaje;
     var obj = {
        to: 'oscarns@gmail.com',
        subject: 'CONTACTO WEB',
        html: nombre + "se contacto a través de la web y quiere mas información a este correo : " + email + ".<br> Además, hizo el comentario : " + mensaje + ". <br> Su tel es : " + tel
}
var transport = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    auth:{
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS
    }
});


var info = await transport.sendMail(obj);
res.render('contacto',{
    message: "Mensaje enviado correctamente"
});
});



