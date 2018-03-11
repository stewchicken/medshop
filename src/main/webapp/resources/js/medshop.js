/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */



function addURL(element)
{
    $(element).attr('href', function () {
        return this.href
                + '&shopName=' + $('#shopName').val()
                + '&tourGuideName=' + $('#tourGuideName').val()
                + '&tourGuideID=' + $('#tourGuideID').val()
                + '&touristName=' + $('#touristName').val()
                + '&pickupDate=' + $('#pickupDate').val()
                + '&pickupTime=' + $('#pickupTime').val();

        ;
    });
}

$(function () {
    $("#pickupDate").datepicker({dateFormat: 'yy-mm-dd'});
});


$("#submit").click(function (event) {
    if (!confirm("confirm  order"))
        event.preventDefault();
});

$(document).ready(function () {


    $(document).keyup(function (e) {
        console.log("key up ##############")
        if ($("#tourGuideID:focus") && (e.keyCode === 13)) {

            e.stopPropagation()
            e.preventDefault();

            // var pathname = window.location.pathname; // Returns path only
            var url = window.location.href;     // Returns full URL
            //var context = url.replace(pathname, '');
            var lastIndex = url.lastIndexOf("/");
            url = url.substr(0, lastIndex);
            url = url + '/querytourguide' + '?tourguideid=' + $('#tourGuideID').val();
            console.log(url);
            //context = localhost:8080/


            $.ajax({
                url: url,
                timeout: 100000,
                success: function (data) {
                    console.log("SUCCESS: ", data);
                    $('#tourGuideName').val(data.name + data.chineseName);
                    $('#tourGuideID').val(data.tourguideid);
                },
                error: function (e) {
                    console.log("ERROR: ", e);
                },
                done: function (e) {
                    console.log("DONE");
                }
            });
        }
    });


    /*
     $.validator.addMethod("valueNotEquals", function (value, element, arg) {
     return arg !== value;
     }, "Choose Apotheke");
     */
    $('#shoppingcartform').validate({// initialize the plugin

        submitHandler: function (form) {
            if (confirm("Click Ok to Submit")) {
                form.submit();
            }
        },
        rules: {
            shopName: {
                required: true
            },

            pickupDate: {
                required: true
            },
            pickupTime: {
                required: true
            },
            tourGuideName: {
                required: true
            },
            tourGuideID: {
                required: true
            },
            touristName: {
                required: true
            }
        },

        messages: {
            shopName: {
                required: 'Please select the Apotheke'
            }
        }
    });
});