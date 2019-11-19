// Attraverso una chiamata ajax all’Api di boolean avremo a disposizione una decina di dischi musicali.
// Servendoci di handlebars stampiamo tutto a schermo. In questo momento non è importante la parte grafica.


$(document).ready(function() {


  $.ajax({

    url:"https://flynn.boolean.careers/exercises/api/array/music",
    method: "GET",
    success: function(data){
      var album = data.response;
      // console.log(album);


      // handlebars
      var source   = $("#entry-template").html();
      var template = Handlebars.compile(source);

      for (var i = 0; i < album.length; i++) {
        // console.log('item', album[i]);

        //compilo con handlbars il mio album
        var context = album[i];
        var html = template(context);
        console.log(html);
        //farò un append per metterlo in pagina con jquery
        $(".cds-container").append(html);

      };

    },
    error: function(error){
      alert("errore");
    },

  });



});
