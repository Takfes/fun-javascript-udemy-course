
### Navigate Repo

* [Link to Udemy tutorial](https://www.udemy.com/course/learn-javascript-from-beginner-to-advanced/)
* [Main JS Script](js/scripts.js)
* [WeDesign Script](Wedesign_en/js/scripts.js)

<br>

### Quick Access

```js
// jQuery's syntax
element.click( function(){ } )
// Javascript's syntax
element.onclick = function(){ }
// jQuery's syntax
element.css("property", "value")
// Javascript's syntax
element.style.property = "value"

// Manipulate Check-Boxes
$("input[name='interest']").change( function(){
    var selectedChkb = $("input[name='interest']:checked")
    $.each(selectedChkb,function(index,value){
        console.log( $(value).parent().text() )
    })
} );

// Add-Remove-ToggleClass
$("#add_class").click( function(){
    $("#example-paragraph").addClass("styling");
} );
$("#remove_class").click( function(){
    $("#example-paragraph").removeClass();
} );
$("#toggle_class").click( function(){
    $("#example-paragraph").toggleClass("styling");
} );

// Add this at the top of the JS
// Document is ready
$(document).ready(function(){
    // Code to be executed
    });
// Document is ready - simpler way
$(function(){
    // Code to be executed
});

// Alternative method for events
$("element").on("event", function(){
    // code to be executed when the event is detected
});

// Example: Keyup event and ternary if to show-hide button
$("#fullName").on("keyup",function(){
    var coo = $("#fullName").val()
    var btn = $("#submit")
    coo == "" ? btn.hide() : btn.show();
});

// Set multiple events - select once
$("element").on({ 
    click: function(){
        // code to be executed on click
    }, 
    mouseenter: function(){
        // code to be executed on mouseenter
    }, 
    mouseleave: function(){
        // code to be executed on mouseleave
    } 
});

// Effects with Callback
$("#toggle-tab").click(function() {
    $("#tab-content").fadeToggle();
    $("#toggle-tab").toggleClass("flip");
});
$("#toggle-tab").click(function() {
    $("#tab-content").slideToggle(500);
    $("#toggle-tab").toggleClass("flip");
});
$("#toggle-tab").click(function() {
    $("#tab-content").toggle();
    $("#toggle-tab").toggleClass("flip");
});
$( "#hide-button" ).click(function() {
    $(this).hide(2000, function(){
        $("#hidden-text").show();
    });
});

```