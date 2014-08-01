Ext.require('Ext.Img');
Ext.require('Ext.MessageBox');
Ext.application({
   name : 'myApp',
   icon : 'images/icon.png',
   glossOnIcon : false,
   //phoneStratupScreen : 'images/phone_startup.png',
   //tabletStartupScreen : 'images/tablet_startup.png',
   launch : function(){
       var img = Ext.create('Ext.Img', {
            src : 'images/st.jpg',
            width : 400,
            height : 300,
            listeners : {
                tap : function(){
                    Ext.Msg.alert('提示', '你点击了图片');
                }
            }
       });
       var panel = Ext.create('Ext.Panel', {
            fullscreen : true,
            id : 'myPanel',
            style : 'color:red',
            items : [img]
       });
       Ext.Viewport.add(panel);
   }
});