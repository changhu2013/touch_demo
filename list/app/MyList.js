Ext.define('myApp.MyList', {

    extend : 'Ext.List',

    requires : [
        'Ext.plugin.ListPaging',
        'Ext.MessageBox', 
        'myApp.User'],

    constructor : function(config){
        var me = this;
        var store = Ext.create('Ext.data.Store', {
            model : 'myApp.User',
            grouper : function(record){
                return record.get('EnglishLastName')[0];
            },
            autoLoad : true,
            pageSize : 4,
            proxy : {
                type : 'ajax',
                url : 'users.json',
                headers : {
                    'Rs-method' : 'getUsers'
                },
                reader : {
                    type : 'json',
                    rootProperty : 'users'
                }
            }
        });
        
        Ext.apply(config, {
            store : store,
            itemTpl : '<div>{lastName}{firstName}</div>'
                +'<a href="tel:18511693692">拨号</a>'
                +'<a href="sms:18511693692">发短信</a>'
                +'<a href="mailto:o52tiger@gmail.com">发邮件</a>',
            //添加该事件，会自动在每行后面添加箭头
            onItemDisclosure : function(record, element, index, e){
                //Ext.Msg.alert('提示', '您点击了' + store.getAt(index).get('lastName'));
            },
            //分组
            grouped : true,
            //索引栏
            indexBar : true,
            //
            plugins : [{
                xclass : 'Ext.plugin.ListPaging',
                autoPaging : true,
                loadMoreText : '下一页'
            }]

        });

        me.callParent(arguments);
    }

});