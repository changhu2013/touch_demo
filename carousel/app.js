Ext.require('Ext.Carousel');
Ext.application({
    name : 'myApp',
    //icon : 'images/icon.png',
    glossOnIcon : false,
    //phoneStratupScreen : 'images/phone_startup.png',
    //tabletStartupScreen : 'images/tablet_startup.png',
    launch : function(){
        var carousel1 = Ext.create('Ext.Carousel', {
            flex : 1,
            direction : 'horizontal',
            defaults : {
              styleHtmlContent : true
            },
            items : [{
              html : '左视图',
              style : 'background-color:pink;'
            }, {
              html : '中视图',
              style : 'background-color:red;'
            }, {
              html : '右视图',
              style : 'background-color:yellow;'
            }]
        });

        var carousel2 = Ext.create('Ext.Carousel', {
          flex : 1,
          direction : 'vertical',
          defaults : {
              styleHtmlContent : true
          },
          items : [{
            html : '上视图',
            style : 'background-color:pink;'
          }, {
            html : '中视图',
            style : 'background-color:red;'
          }, {
            html : '下视图',
            style : 'background-color:yellow;'
          }]
        });

        var panel = Ext.create('Ext.Panel', {
          layout : {
            type : 'vbox',
            align : 'stretch'
          },
          items : [carousel1, carousel2]
        });

        Ext.Viewport.add(panel);
   }
});