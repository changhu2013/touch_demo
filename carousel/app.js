Ext.application({
    
    name : 'myApp',
    
    glossOnIcon : false,

    requires : ['Ext.Panel', 'myApp.HorCarousel', 'myApp.VerCarousel'],

    launch : function(){
        Ext.Viewport.add(Ext.create('Ext.Panel', {
          layout : {
            type : 'vbox',
            align : 'stretch'
          },
          items : [Ext.create('myApp.VerCarousel', {}), 
            Ext.create('myApp.HorCarousel', {})]
        }));
   }
});