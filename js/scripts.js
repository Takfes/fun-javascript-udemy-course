
// ***********************************
// List of Exercises # 5
// Exercise 1
// ***********************************

// const URI = 'https://restcountries.com/v3.1/all'

// function parse_countries(data){
//     var reponseJson = JSON.parse(data)
//     var optionList = []
//     reponseJson.forEach(element => {
//         optionList.push(`<option>${element.name.common}</option>`)
//     })
//     $("#countries").html(optionList.sort())
//     // console.log(optionList)
//     // return optionList
// }

// function get_countries(callback){
//     xhttp = new XMLHttpRequest()
//     xhttp.onreadystatechange = function(){
//         if(this.status==200 && this.readyState==4){
//             callback(this.responseText)
//         }
//     }
//     xhttp.open("GET",URI)
//     xhttp.send()
// }

// $("#countries").click( function(){
//     console.log('clicked!')
//     get_countries(parse_countries)
// })


// ***********************************
// Ajax response
// ***********************************

// // success error
// $.ajax({
//     url : "https://opentdb.com/api.php?amount=1",
//     type: "GET",
//     dataType: "json",
//     success: function(data){
//         console.log(data);
//     },
//     error: function(){
//         console.log("Error in the request");
//     }  
// });

// // done fail
// $.ajax({
//     url : "https://opentdb.com/api.php?amount=1",
//     type: "GET",
//     dataType: "json"
// }).done(function(data){
//     console.log(data);
// }).fail(function(){
//     console.log("Error in the request");
// });

// ***********************************
// Ajax response
// ***********************************

// function show_question(data) {
//     var questionObj = JSON.parse(data);
//     console.log('The question is: ' + questionObj.results[0].question)
// }
// function get_question(callback) {
//     var xhttp = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP");
                    
//     xhttp.onreadystatechange = function() {
//         if (this.readyState == 4 && this.status == 200) {
//             callback(this.responseText);   
//         } 
//     };
//     xhttp.open("GET", "https://opentdb.com/api.php?amount=1");
//     xhttp.send();
// }
// get_question(show_question);

// ***********************************
// Different function declarations
// ***********************************

// function f1(){
//     console.log('Hello from f1')
// }
// let f2 = function(){
//     console.log('Hello from f2')
// }
// let f3 = () =>{
//     console.log('Hello from f3')
// }

// ***********************************
// BOM example
// ***********************************

// window.onmousemove = function(e){
//     if (e.pageY < 5) {
//         alert("Don't miss our flash sale. Go to the the products section for exclusive discounts.");
//     }
// };

// ***********************************
// jQuery Practice
// ***********************************

// // Animate
// $("#animate").click(function(){
//     $("#square").animate({
//         width: '+=50px',
//         height: '+=50px'
//     },500);
//     $("#square").animate({
//         marginLeft: '+=50px'
//     }),500;
// });

// Effects with Callback
// $("#toggle-tab").click(function() {
//     $("#tab-content").fadeToggle();
//     $("#toggle-tab").toggleClass("flip");
// });
// $("#toggle-tab").click(function() {
//     $("#tab-content").slideToggle(500);
//     $("#toggle-tab").toggleClass("flip");
// });
// $("#toggle-tab").click(function() {
//     $("#tab-content").toggle();
//     $("#toggle-tab").toggleClass("flip");
// });
// $( "#hide-button" ).click(function() {
//     $(this).hide(2000, function(){
//         $("#hidden-text").show();
//     });
// });

// // Keyup event and ternary if to show-hide button
// $("#fullName").on("keyup",function(){
//     var coo = $("#fullName").val()
//     var btn = $("#submit")
//     coo == "" ? btn.hide() : btn.show();
// });

// // Add-Remove-ToggleClass
// $("#add_class").click( function(){
//     $("#example-paragraph").addClass("styling");
// } );
// $("#remove_class").click( function(){
//     $("#example-paragraph").removeClass();
// } );
// $("#toggle_class").click( function(){
//     $("#example-paragraph").toggleClass("styling");
// } );

// // Manipulate Check-Boxes
// $("input[name='interest']").change( function(){
//     var selectedChkb = $("input[name='interest']:checked")
//     // console.log(selectedChkb)
//     $.each(selectedChkb,function(index,value){
//         // console.log(value)
//         console.log( $(value).parent().text() )
//     })
// } );

// // Manipulate Radio-buttons
// $("input[name='gender']").change( function(){
//     // console.log("changed")
//     // console.log($("input[name='gender']:checked").val())
//     console.log($("input[name='gender']:checked").parent().text())
// } );

// // Manipulate DropDown
// $("#options").change( function(){
//     // var chkb = $("#options").val()
//     var chkb = $("#options option:selected").text()
//     console.log(chkb)
// } );

// // Manipulate value of the element
// $("#name_field").val("Rachel Green")
// var contentVar = $("#name_field").val();
// console.log(contentVar);

// // Manipulate an element
// $("#empty_paragraph").html("")
// $("#empty_paragraph").empty()
// $("#empty_paragraph").remove()
// $("#empty_paragraph").hide()

// // Change icon on click
// $("#change_image").click( function(){
//     $("#imagem_js").attr("src","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPyWY7e3vWhLAKW4b41Hg4n03gXVX176H-Ew&usqp=CAU")
//     $("#change_image").hide();
// } );

// // Change attribute
// $("#link-element").attr("href","https://www.google.com")

// // Change .text()
// var bar = $("#sample-text-only").text()
// console.log(bar)
// bar = $("#sample-text-only").text("Changed this using .text()")

// Change .html()
// var foo = $("#sample_text").html();
// console.log(foo);
// $("#sample_text").html("Changed .html() through jQuery");

// Hide items on click
// $("#hide").click( function(){
//     // $(".example").css('display','none');
//     $(".example").hide();
// } );

// Change even rows background color
// $("tr:even").css('backgroundColor','#fcd7d4')


// ***********************************
// List of Exercises # 4
// Exercise 2
// ***********************************

// var phones = 
//         {
//             'iphone_se_red': {
//                 'name': 'iPhone SE 64GB Red',
//                 'price': '450',
//                 'currency': 'US$',
//                 'imageUrl': "https://images.unsplash.com/photo-1615931589130-687a15359192?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80"
//             },
//             'iphone_11_black': {
//                 'name': 'iPhone 11 128GB Black',
//                 'price': '869',
//                 'currency': 'EUR',
//                 'imageUrl': "https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.justech.gr%2Fimages%2Fcatalog%2Fvshop%2Fproduct%2Fiphone11-black-select-20195.png&imgrefurl=https%3A%2F%2Fwww.justech.gr%2Fmob-menu%2Fiphone-sma%2Fproduct-2949-detail&tbnid=7bYpHti5eHllaM&vet=12ahUKEwi-xL_r8Y_5AhUPP-wKHSmKClUQMygAegUIARDjAQ..i&docid=cKjjTjebhWQgGM&w=940&h=1112&q=iphone%20black&ved=2ahUKEwi-xL_r8Y_5AhUPP-wKHSmKClUQMygAegUIARDjAQ"
//             },
//             'iphone_8_plus_silver': {
//                 'name': 'iPhone 8 Plus 64GB Silver',
//                 'price': '519',
//                 'currency': 'US$',
//                 'imageUrl': "https://www.google.com/imgres?imgurl=https%3A%2F%2Fb.scdn.gr%2Fimages%2Fsku_main_images%2F031105%2F31105191%2F20210920153252_apple_iphone_13_pro_max_128gb_silver.jpeg&imgrefurl=https%3A%2F%2Fwww.skroutz.gr%2Fs%2F31105191%2FApple-iPhone-13-Pro-Max-5G-6GB-128GB-Silver.html&tbnid=IIRYpfPb4hVo7M&vet=12ahUKEwja-f7t8Y_5AhVExKQKHaZIDDwQMygAegUIARDyAQ..i&docid=Pnsw9xtEKkg-gM&w=591&h=754&q=iphone%20silver&ved=2ahUKEwja-f7t8Y_5AhVExKQKHaZIDDwQMygAegUIARDyAQ"
//             }
//         };

// var radios = document.getElementsByName('product')
// console.log(radios)
// for(var a=0; a<radios.length; a++){
//     radios[a].onchange = function(){
//         for(var b=0;b<radios.length; b++){
//             if(radios[b].checked){
    
//                 console.log(phones[radios[b].value]['name'])
//                 console.log(phones[radios[b].value]['currency'] + ' ' + phones[radios[b].value]['price'])

//                 document.getElementById('phone_image').innerHTML = phones[radios[b].value]['imageUrl']
//                 document.getElementById('phone_name').innerHTML = phones[radios[b].value]['name']
//                 document.getElementById('phone_price').innerHTML = phones[radios[b].value]['currency'] + ' ' + phones[radios[b].value]['price'] 
//             }
//         }
//     }
// }


// ***********************************
// List of Exercises # 4
// Exercise 1
// ***********************************

// var shipments = 
//         {
//             'standard': {
//                 'leadTime': 7,
//                 'fee': 2
//             },
//             'express': {
//                 'leadTime': 3,
//                 'fee': 4.5
//             }
//         };
// var dd = document.getElementById('shipments') 
// var dt = new Date()
// var dayinms = 86400000

// dd.onchange = function(){
//     // grab selected option
//     var selectedOption = dd.options.selectedIndex
//     var selectedValue  = dd.options[selectedOption].value
//     // date calculations
//     // current date breakdown
//     var myyear = dt.getFullYear()
//     var mymonth = dt.getMonth() + 1
//     var mydate = dt.getDate()
//     var myts = dt.getTime()
//     // delivery date breakdown
//     var mydeliverydate = new Date(myts + (shipments[selectedValue]['leadTime'] * dayinms))
//     var myddyear = mydeliverydate.getFullYear()
//     var myddmonth = mydeliverydate.getMonth() + 1
//     var mydddate = mydeliverydate.getDate()
//     // pad months or dates
//     function pad_ymd(ymd){
//         if(ymd<10){
//             return '0' + ymd
//         } else {
//             return ymd
//         }
//     }
//     // export results to HTML
//     document.getElementById('order_date').innerHTML = myyear + '-' + pad_ymd(mymonth) + '-' + pad_ymd(mydate)
//     document.getElementById('delivery_date').innerHTML = myddyear + '-' + pad_ymd(myddmonth) + '-' + pad_ymd(mydddate)
//     document.getElementById('delivery_fee').innerHTML = shipments[selectedValue]['fee']
// }

// ***********************************
// Forms - onChange SelectBoxes
// ***********************************

// var boxes = document.getElementsByName('meal')
// var mylist = document.getElementById('selected_check')
// mylist.innerHTML = ''

// for(var a=0; a<boxes.length; a++){
//     boxes[a].onchange = function(){
//         mylist.innerHTML = '<ul>'
//             for(var b=0; b<boxes.length; b++){
//                 if(boxes[b].checked){
//                     mylist.innerHTML += '<li>' + boxes[b].value + '</li>'
//                 }
//             }
//         mylist.innerHTML += '</ul>'
//     }
// }

// ***********************************
// Forms - onChange DropDown
// ***********************************

// var myelement = document.getElementById('education_level')
//     myelement.onchange = function(){
//     var myIndex = myelement.options.selectedIndex
//     var mySelection = myelement.options[myIndex].innerHTML
//     // console.log(mySelection)
//     document.getElementById('selected_level').innerHTML = mySelection
// }

// ***********************************
// Forms - Check Boxes
// ***********************************

// document.getElementById('show_check').onclick = function(){
//     myli = ''
//     var boxes = document.getElementsByName('interest')
//     for(b in boxes){
//         if(boxes[b].checked){
//             myli += '<li>' + boxes[b].value + '</li>'
//         }
//     }
//     document.getElementById('selected_check').innerHTML = myli
// }

// ***********************************
// Forms - Radio Buttons
// ***********************************

// document.getElementById('show_radio').onclick = function(){
//     var radio_buttons = document.getElementsByName('gender')
//     for(rb in radio_buttons){
//         if(radio_buttons[rb].checked){
//             console.log(radio_buttons[rb].value)
//         }
//     }
// }

// ***********************************
// Forms - DropDown Box
// ***********************************

// document.getElementById('show_option').onclick = function(){
//     var selectedField  = document.getElementById('options');
//     var selectedOption = selectedField.options.selectedIndex;
//     var selectedValue  = selectedField.options[selectedOption].innerHTML
//     document.getElementById('selected_option').innerHTML = selectedValue
//     console.log(document.getElementById('options').value) // can only get the value this way, not the inner html
// }

// ***********************************
// BOM
// ***********************************

// window.onmousemove = function(e){
//     if (e.pageY < 5) {
//         alert("Don't miss our flash sale. Go to the the products section for exclusive discounts.");
//     }
// };

// ***********************************
// Clock challenge
// ***********************************

// window.setInterval(function(){
//     currentTime = new Date();
//     var hours = currentTime.getHours();
//     var minutes = currentTime.getMinutes();
//     var seconds = currentTime.getSeconds();
//     if(hours<10){
//         hours = '0' + hours
//     }
//     if(minutes<10){
//         minutes = '0' + minutes
//     }
//     if(seconds<10){
//         seconds = '0' + seconds
//     }
//     document.getElementById("hours").innerHTML = hours;
//     document.getElementById("minutes").innerHTML = minutes;
//     document.getElementById("seconds").innerHTML = seconds;
// },1000);


// ***********************************
// List of Exercises # 3
// Exercise 1
// ***********************************
// document.getElementById('convert').onclick = function() {
//     var cel = document.getElementById('temp_celsius').value;
//     console.log('Temp in celc : ', cel)
//     document.getElementById('temp_fahr').innerHTML = (cel * 9/5) + 32
// }

// ***********************************
// List of Exercises # 3
// Exercise 2
// ***********************************
// document.getElementById('anos_copa').innerHTML = ''
// for(var wc = 2022; wc<2051; wc +=4){
//     // console.log(wc.toString())
//     document.getElementById('anos_copa').innerHTML += '<li>' + wc.toString() + '</li>'
// }

// ***********************************
// List of Exercises # 3
// Exercise 3
// ***********************************
// document.getElementById('calculate').onclick = function() {

//     var g1 = parseInt(document.getElementById('grade1').value)
//     var g2 = parseInt(document.getElementById('grade2').value)
//     var ab = parseInt(document.getElementById('absences').value)
//     var avg = (g1+g2)/2

//     if( (avg > 6.5) && (ab < 0.3 * 20) ){
//         document.getElementById('result').innerHTML = 'pass'
//     } else if ( (avg < 6.5) & (ab > 0.3 * 20) ){
//         document.getElementById('result').innerHTML = 'insufficient presence & grade'
//     } else if ( avg < 6.5 ){
//         document.getElementById('result').innerHTML = 'insufficient grade'
//     } else if ( ab > 0.3 * 20 ){
//         document.getElementById('result').innerHTML = 'insufficient presence'
//     }
// }

// ***********************************
// List of Exercises # 3
// Exercise 4
// ***********************************

// var sales = [

//     {
//         'student': 'Jason Gomes',
//         'date': '10/06/2018',
//         'amount': 34.99,
//         'refundRequested': null
        
//     },

//     {
//         'student': 'Carlos Blue',
//         'date': '10/06/2018',
//         'amount': 29.99,
//         'refundRequested': null
        
//     },

//     {
//         'student': 'Martin Heyes',
//         'date': '11/06/2018',
//         'amount': 39.99,
//         'refundRequested': '13/06/2018'
        
//     },

//     {
//         'student': 'Isabella Hopkins',
//         'date': '11/06/2018',
//         'amount': 29.99,
//         'refundRequested': null
        
//     },

//     {
//         'student': 'Andrew Walt',
//         'date': '12/06/2018',
//         'amount': 34.99,
//         'refundRequested': null
        
//     }

// ];

// document.getElementById('course_sales').innerHTML = ''
// var line = ''
// var total = 0
// for(s in sales){
//     if(!sales[s].refundRequested){
//         line += '<tr>'
//         line += '<td>' + sales[s].student + '</td>'
//         line += '<td>' + sales[s].date + '</td>'
//         line += '<td>' + sales[s].amount + '</td>'
//         line += '</tr>'
//         total += sales[s].amount
//         document.getElementById('course_sales').innerHTML = line
//     }
// }
// document.getElementById('total_sold').innerHTML = total.toFixed(2)
