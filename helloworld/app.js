Ext.application({
   
   name : 'myApp',
   
   glossOnIcon : false,

   requires : ['myApp.HelloPanel'],

   launch : function(){
       var panel = Ext.create('myApp.HelloPanel', {});
       Ext.Viewport.add(panel);
   }
});
