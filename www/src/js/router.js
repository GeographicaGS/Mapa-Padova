var app = app || {};

app.router = Backbone.Router.extend({
    
    langRoutes : {
        "_link home" : {"en":"home","es": "inicio", "it": "home" },
        "_link project" : {"en":"project","es": "proyecto", "it": "progetto" },
        "_link contact" : {"en":"contact","es": "contacto", "it": "contatti" },
    },

    /* define the route and function maps for this router */
    routes: {
            "" : "home",
            "project" : "project",
            "contact" : "contact",
            "notfound" : "notfound",
            "faq" : "faq",
            "error" : "error",
            
            /* Sample usage: http://example.com/#about */
            "*other"    : "defaultRoute"
            /* This is a default route that also uses a *splat. Consider the
            default route a wildcard for URLs that are either not matched or where
            the user has incorrectly typed in a route path manually */
        
    },

    initialize: function(options) {
        this.route(this.langRoutes["_link home"][app.lang], "home");
        this.route(this.langRoutes["_link project"][app.lang], "project");
        this.route(this.langRoutes["_link contact"][app.lang], "contact");
    },
    
    home: function(){
        app.showView(new app.view.Home());
        
        $("#map").height($(window).outerHeight()- $("nav").outerHeight());
        
        var map = L.map('map', { zoomControl:false }).setView([45.4167, 11.8833], 13);
    	
        L.tileLayer('http://{s}.tile.stamen.com/toner-lite/{z}/{x}/{y}.png', {
    	    attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>'
    	}).addTo(map);
        
    },
    
    project: function(){
    	app.showView(new app.view.Project());
    },
    
    contact: function(){
    	app.showView(new app.view.Contact());
    },

    defaultRoute: function(){
        app.showView(new app.view.NotFound());
    },

    notfound: function(){
        app.showView(new app.view.NotFound());
    },

    error: function(){
        app.showView(new app.view.Error());
    }
    
});