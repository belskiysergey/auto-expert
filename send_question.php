<?php 

/* Отправка формы с вопросом */
if( (isset($_POST['name']) && $_POST['name']!="") &&
    (isset($_POST['email']) && $_POST['email']!="") &&
    (isset($_POST['number']) && $_POST['number']!="") &&
    (isset($_POST['message']) && $_POST['message']!="") ) { 

        $to = 'autoexpertindnepr@gmail.com'; 
        $subject = 'Авто-эксперт'; 
        $message = '
                <html>
                    <head>
                        <title>'.$subject.'</title>
                    </head>
                    <body>
                        <h3>Вам задали вопрос</h3>
                        <p>Имя: '.$_POST['name'].'</p>   
                        <p>Почтовый ящик: '.$_POST['email'].'</p>
                        <p>Номер телефона: '.$_POST['number'].'</p>
                        <p>Сообщение: '.$_POST['message'].'</p>                    
                    </body>
                </html>'; 
        $headers  = "Content-type: text/html; charset=utf-8 \r\n"; 
        $headers .= "From: Отправитель <". $_POST['email']. ">\r\n"; 
        mail($to, $subject, $message, $headers); 

} else {
    echo "При отправки сообщения возникли ошибки";
}

?>