Ext.require('Ext.Img');

Ext.require('Ext.MessageBox');

Ext.define('myApp.HelloPanel', {
    
    extend : 'Ext.Panel',

    config: {
        fullscreen : true,
        items : [Ext.create('Ext.Img', {
            src : 'images/st.jpg',
            width : 400,
            height : 300,
            listeners : {
                tap : function(){
                    Ext.Msg.alert('提示', '你点击了图片');
                }
            }
        })]
    }
    
})