// Ajax-запрос
$(document).ready(function(){
    $('form').submit(function(e) {  //устанавливаем событие отправки формы с id=form
        var form = $(this);
        var form_data = form.serialize();  //собераем все данные из формы
        e.preventDefault();
        $.ajax({
            type: "POST", // Метод отправки
            url: form.attr('action'), // путь до php фаила отправителя
            data: form_data,
            success: function() {
               //код в этом блоке выполняется при успешной отправке сообщения
               alert("Ваше сообщение отпралено!");
            }
        });
    });
});



