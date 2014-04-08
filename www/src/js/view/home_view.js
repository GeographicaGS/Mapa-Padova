app.view.Home = Backbone.View.extend({
    _template : _.template( $('#home_template').html() ),
    
    events:{
		"click .leyenda": "showLeyend",
		"click .closeLeyend": "closeLeyend",
	},
    
    
    initialize: function() {
        this.render();
        app.events.trigger("menu", 0);
    },
    
    showLeyend: function(){
		$(".leyendaOpen").animate({width:'240px'});
    },
    
    closeLeyend: function(){
		$(".leyendaOpen").animate({width:'0'});
    },
    
    onClose: function(){
        // Remove events on close
        this.stopListening();
    },
    
    render: function() {
        this.$el.html(this._template());       
        return this;
    }
});