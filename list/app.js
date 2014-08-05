
Ext.Loader.setConfig({
    disableCaching : false //不适用缓存
});

Ext.application({
    
    name : 'myApp',

    requires : [
        'Ext.TabPanel', 
        'myApp.MyList', 
        'myApp.MyNestedList'],

    launch : function(){
        
        //Ext.Viewport.add(Ext.create('myApp.MyList', {}));
        Ext.Viewport.add(Ext.create('Ext.TabPanel', {
            tabBarPosition : 'bottom',
            items : [Ext.create('myApp.MyList', {
                title : 'User',
                iconCls : 'user'
            }), Ext.create('myApp.MyNestedList', {
                iconCls : 'home'
            })]
        }))

    }
});