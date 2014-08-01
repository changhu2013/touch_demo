Ext.require('Ext.TabPanel');
Ext.application({
    name : 'myApp',
    launch : function(){
        var tabPanel = Ext.create('Ext.TabPanel', {
            activeItem : 0,
            autoDestroy : true,
            tabBarPosition : 'bottom',
            items : [{
                title : '盒布局',
                iconCls : 'home',
                layout : {
                    type : 'hbox',
                    align : 'stretch'
                },
                items : [{
                    flex : 1,
                    html : '组件1',
                    style : 'background-color:blue;'
                }, {
                    flex : 1,
                    html : '组件2',
                    style : 'background-color:red;'
                }]
            }, {
                title : 'Fit布局',
                iconCls : 'bookmarks',
                layout : 'fit', 
                items : [{
                    html : '示例文字',
                    style : 'background-color:pink;'
                }]
            }, {
                title : 'Card布局',
                iconCls : 'settings',
                layout : 'card',
                items : [{
                    html : '组件1',
                    style : 'background-color:red;'
                }, {
                    html : '组件2',
                    style : 'background-color:blue;'
                }],
                listeners : {
                    show : function(p){
                        Ext.Function.defer(p.setActiveItem, 2000, this, [1]);
                    }
                }
            }]
        });
        Ext.Viewport.add(tabPanel);
    }
});