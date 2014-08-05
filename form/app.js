Ext.application({
    
    name : 'myApp',
    
    appFolder : 'app',

    glossOnIcon : false,
    
    requires : ['myApp.MyForm'],
    
    launch : function(){
        Ext.Viewport.add(Ext.create('myApp.MyForm', {}));
   }
});