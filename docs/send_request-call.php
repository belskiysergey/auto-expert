<?php 

/* Заказать звонок */
if( (isset($_POST['name']) && $_POST['name']!="") && 
    (isset($_POST['number']) && $_POST['number']!="") ) { 

        $to = 'autoexpertindnepr@gmail.com';  
        $subject = 'Авто-эксперт'; 
        $message = '
                <html>
                    <head>
                        <title>'.$subject.'</title>
                    </head>
                    <body>
                        <h3>Перезвоните на указаный номер</h3>
                        <p>Имя: '.$_POST['name'].'</p>   
                        <p>Номер телефона: '.$_POST['number'].'</p>
                    </body>
                </html>'; 
        $headers  = "Content-type: text/html; charset=utf-8 \r\n"; 
        $headers .= "From: Отправитель <". $_POST['email']. ">\r\n"; 
        mail($to, $subject, $message, $headers); 

} else {
    echo "При отправки сообщения возникли ошибки";
}

?>