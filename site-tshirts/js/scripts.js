
var products = {
    'white': {
        
        'plain': {
            'unit_price': 5.12,
            'photo': 'v-white.jpg' 
        },
        'printed': {
            'unit_price': 8.95,
            'photo': 'v-white-personalized.jpg' 
        }
    },
    
    'colored': {
        'plain': {
            'unit_price': 6.04,
            'photo': 'v-color.jpg' 
        },
        'printed': {
            'unit_price': 9.47,
            'photo': 'v-color-personalized.png' 
        }
    }
}

// Search params

var search_params = {
    "quantity": $("#quantity").val(),
    "color": $("#colored").text(),
    "quality": $("#q150").text(),
    "style": $("#style option:selected").text(),
}

// Functions

function calculate_price(search_params){
    var unit_price = products[search_params['color'].toLowerCase()][search_params['style'].toLowerCase()]['unit_price']
    var unit_price_adj = search_params['quality']=='Basic (150g / m2)' ? unit_price : unit_price * 1.12
    var discount = 1
    if(search_params['quantity']>1000){
        discount=0.8
    }else if(search_params['quantity']>500){
        discount=0.88
    }else if(search_params['quantity']>100){
        discount=0.95
    }
    var price = (unit_price_adj * search_params['quantity'] * discount).toFixed(2)
    return price
}

function populate_results(search_params){
    $("#result-style").text(search_params['style'])
    $("#result-quality").text(search_params['quality'])
    $("#result-color").text(search_params['color'])
    $("#result-quantity").text(search_params['quantity'])
    $("#total-price").text(calculate_price(search_params))
    $("#photo-product").attr('src','img/'+products[search_params['color'].toLowerCase()][search_params['style'].toLowerCase()]['photo'])
}

// Additional pricing rules:

// 1. The prices above are for Basic quality (q150). 
// The high quality shirt (190g/m2) has a 12% increase in the unit price.

// 2. Apply the following discounts for higher quantities: 
    // 1: above 1.000 units - 20% discount
    // 2: above 500 units - 12% discount
    // 3: above 100 units - 5% discount


// Solution:

$(function(){
    // Functionality

    $("#photo-product").attr('src','img/'+products['colored']['printed']['photo'])

    $("#quantity").on({
        keyup:function(){
            search_params['quantity'] = $("#quantity").val()
            search_params['quantity'] >= 0 ? populate_results(search_params) : alert('Quantity must be non-negative')
        },
        change:function(){
            search_params['quantity'] = $("#quantity").val()
            search_params['quantity'] >= 0 ? populate_results(search_params) : alert('Quantity must be non-negative')
        }
    });

    $("#white").click( function(){
        $("#white").removeClass("color-option option-button").addClass("color-option option-button selected")
        $("#colored").removeClass("color-option option-button selected").addClass("color-option option-button")
        search_params['color'] = $("#white").text()
        populate_results(search_params)
    });

    $("#colored").click( function(){
        $("#colored").removeClass("color-option option-button").addClass("color-option option-button selected")
        $("#white").removeClass("color-option option-button selected").addClass("color-option option-button")
        search_params['color'] = $("#colored").text()
        populate_results(search_params)
    });

    $("#q190").click( function(){
        $("#q190").removeClass("color-option option-button").addClass("color-option option-button selected")
        $("#q150").removeClass("color-option option-button selected").addClass("color-option option-button")
        search_params['quality'] = $("#q190").text()
        populate_results(search_params)
    });

    $("#q150").click( function(){
        $("#q150").removeClass("color-option option-button").addClass("color-option option-button selected")
        $("#q190").removeClass("color-option option-button selected").addClass("color-option option-button")
        search_params['quality'] = $("#q150").text()
        populate_results(search_params)
    });

    $("#style").change( function(){
        search_params['style'] = $("#style option:selected").text()
        populate_results(search_params)
    })

});










