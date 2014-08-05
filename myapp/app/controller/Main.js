Ext.define('myApp.controller.Main', {
    extend : 'Ext.app.controller',
    xtype: 'main',
    init : function(){
        Ext.Msg.alert('控制器测试', 'Main控制器被调用');
    }
});