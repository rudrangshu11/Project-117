var date = new Date()
let display_date= "Date:" + date.toLocaleDateString()

//Load HTML DOM
$(document).ready(function () {
    $("#date").html(display_date)


    let predicted_emotion;

    $(function () {
        $("#button").click(function () {

            let input_data = {
                "text": $("#text").val()
            }
            console.log(input_data)

            $.ajax({
                type: 'POST',
                data: JSON.stringify(input_data),
                dataType: "json",
                contentType: 'application/json',
                success: function (result) {
                    
                    // Result Received From Flask ----->JavaScript
                    predicted_emotion = result.data.predicted_emotion
                    emo_url = result.data.predicted_emotion_img_url

                    
                    // Display Result Using JavaScript----->HTML
                    $("#sentiment").html(predicted_emotion)
                    $('#sentiment').css("display", "block");

                    $("#emoji").attr('src', emo_url);
                    $('#emoji').css("display", "block");
                },
                error: function (result) {
                    alert(result.responseJSON.message)
                }
            });
        });

        $('#text').val("")
    })

})