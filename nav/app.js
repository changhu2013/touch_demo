Ext.require('Ext.NavigationView');
Ext.application({
    name : 'myApp',
    //icon : 'images/icon.png',
    glossOnIcon : false,
    //phoneStratupScreen : 'images/phone_startup.png',
    //tabletStartupScreen : 'images/tablet_startup.png',
    launch : function(){

        var view = Ext.create('Ext.NavigationView', {
            defaultBackButtonText : '返回',
            items : [{
                title : '标题一',
                html : '组件一'
            }]
        });

        var panel = Ext.create('Ext.Panel', {
            title : '标题二',
            html : '组件二'
        });

        var panel2 = Ext.create('Ext.Panel', {
            title : '标题三',
            html : '组件三'
        })

        view.push(panel);
        view.push(panel2);
        
        Ext.Viewport.add(view);
   }
});