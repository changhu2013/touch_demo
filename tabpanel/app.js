Ext.require('Ext.TabPanel');
Ext.application({
   name : 'myApp',
   icon : 'images/icon.png',
   glossOnIcon : false,
   //phoneStratupScreen : 'images/phone_startup.png',
   //tabletStartupScreen : 'images/tablet_startup.png',
   launch : function(){
       
       var tabPanel = Ext.create('Ext.TabPanel', {
            fullscreen : true,
            activeItem : 1,
            autoDestroy : true,
            tabBarPosition : 'bottom',
            items : [{
              title : '主页',
              html : '主页',
              iconCls : 'home'
            }, {
              title : '合同',
              html : '合同',
              iconCls : 'user'
            }],
            listeners : {
              activeitemchange : function(tp, v, ov, ops){
                console.log('activeitemchange ' + v + ' ' + ov);
              },
              painted : function(tp){
                console.log('painted ' + tp);
              }
            }
       });
       Ext.Viewport.add(tabPanel);
   }
});