// external js: isotope.pkgd.js
// fonctions liant boutons et fonctions de tri'

$(function() {

    var filterSelector = '*';

// init Isotope
var $grid = $('.grid').isotope({
    itemSelector: '.element-item',
    layoutMode: 'fitRows',
    sortBy: 'selector',
    getSortData: {
        selector: function( itemElem ) {
            return !$( itemElem ).is( filterSelector );
        },
    },
});

var $items = $grid.find('.element-item');

// bind button click
$('.filters-button-group').on( 'click', 'button', function() {
    filterSelector = $( this ).attr('data-filter');
    $grid.isotope('updateSortData').isotope();
    // change is-filtered-out class
    $items.filter( filterSelector ).removeClass('is-filtered-out');
    $items.not( filterSelector ).addClass('is-filtered-out');
});

// change is-checked class on buttons
$('.button-group').each( function( i, buttonGroup ) {
    var $buttonGroup = $( buttonGroup );
    $buttonGroup.on( 'click', 'button', function() {
        $buttonGroup.find('.is-checked').removeClass('is-checked');
        $( this ).addClass('is-checked');
    });
});


    var coll = document.getElementsByClassName("collapsible_songs");
    var i;

    for (i = 0; i < coll.length; i++) {

        coll[i].addEventListener("click", function() {
            this.classList.toggle("active");
            var content = this.nextElementSibling;
            if (content.style.maxHeight){
                content.style.maxHeight = null;
            } else {
                content.style.maxHeight = content.scrollHeight + "px";
            }
            $grid.isotope();

        });

    }

});





