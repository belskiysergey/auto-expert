<?php 

/* Осмотр с выездом мастера */
if( (isset($_POST['name']) && $_POST['name']!="") && 
    (isset($_POST['number']) && $_POST['number']!="") &&    
    (isset($_POST['date']) && $_POST['date']!="") && 
    (isset($_POST['time']) && $_POST['time']!="") && 
    (isset($_POST['address']) && $_POST['address']!="") && 
    (isset($_POST['message']) && $_POST['message']!="") ) { 

        $to = 'autoexpertindnepr@gmail.com'; 
        $subject = 'Авто-эксперт'; 
        $message = '
                <html>
                    <head>
                        <title>'.$subject.'</title>
                    </head>
                    <body>
                        <h3>Заявка на услугу "Осмотр с выездом мастера"</h3>
                        <p>Имя: '.$_POST['name'].'</p>   
                        <p>Номер телефона: '.$_POST['number'].'</p>
                        <p>Дата: '.$_POST['date'].'</p>
                        <p>Время: '.$_POST['time'].'</p>
                        <p>Адрес встречи: '.$_POST['address'].'</p>
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