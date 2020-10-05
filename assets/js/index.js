
function sendMail(){
    var a = document.getElementById("mailMessage").value
    Email.send({ 
        Host: "smtp.gmail.com", 
        Username: "testmailsendjs@gmail.com", 
        Password: "testmailsendjs123", 
        To: "akashmane101b@gmail.com", 
        From: "testmailsendjs@gmail.com", 
        Subject: "Email sent by portfolio", 
        Body: "Name: "+ document.getElementById("senderName").value +" from:"+document.getElementById("senderEmail").value+"  message:"+a , 
      }) 
        .then(function (message) { 
          if(message=="OK"){
            location.reload();
          }else{

          }
        }); 
}