$(document).ready(function(){
    $('.dropdown-button').dropdown({
        inDuration: 300,
        outDuration: 225,
        constrain_width: false, // Does not change width of dropdown to that of the activator
        hover: true, // Activate on hover
        gutter: ($('.dropdown-content').width()*3)/2.5 + 5, // Spacing from edge
        belowOrigin: true, // Displays dropdown below the button
       // alignment: 'down' // Displays dropdown with edge aligned to the left of button
        }
    );
});