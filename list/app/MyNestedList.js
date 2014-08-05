Ext.define('myApp.MyNestedList', {
   
    extend : 'Ext.NestedList',

    require : [
        'Ext.form.Panel',
        'Ext.data.TreeStore',
        'Ext.Toolbar',
        'Ext.form.Text',
        'Ext.form.FieldSet'],

    constructor : function(config){
        var me = this;

        Ext.define('ListItem', {
            extend : 'Ext.data.Model',
            config : {
                fields : [{name : 'name', type : 'string'}]
            }
        });

        var store = Ext.create('Ext.data.TreeStore', {
            model : 'ListItem',
            //defaultRootProperty : 'items',
            autoLoad : true,
            proxy : {
                type : 'ajax',
                url : 'items.json',
                headers : {
                    'Rs-method' : 'getItems'
                },
                reader : {
                    type : 'json',
                    rootProperty : 'items'
                }
            }
        });

        Ext.Viewport.add(this.getEditPanel());

        var editButton = Ext.create('Ext.Button', {
            text : '修改',
            disabled : true,
            scope : this,
            handler : function(){
                this.editPanel.show();
                var activeList = this.getActiveItem();
                var record = activeList.getSelection()[0];
                this.txtName.setValue(record.get('name'));
            }
        });

        var toolbar = Ext.create('Ext.Toolbar', {
            docked : 'top',
            layout : {
                type : 'hbox',
                pack : 'end'
            },
            items : [{
                xtype : 'spacer'
            }, editButton]
        });

        Ext.apply(config, {
            toolbar : toolbar,
            title : 'XX小学',
            store : store,
            displayField : 'name',
            getItemTextTpl : function(){
                return '<tpl if="leaf == true"> ' 
                    + '<div>{name}</div>'
                    + '</tpl>'
                    + '<tpl if=" leaf != true">' 
                    + '<div>{name}/</div>'
                    + '</tpl>';
            },
            listeners : {
                leafitemtap : function(nestedList, list, index, item){
                    editButton.setDisabled(false);
                }
            }
        });

        me.callParent(arguments);
    }, 

    getEditPanel  : function(){
        return this.editPanel = Ext.create('Ext.form.Panel', {

            modal : true,
            hideOnMaskTap : false,
            centered : true,
            height : 200,
            width : 300,
            hidden : true,
            items : [{
                docked : 'top',
                xtype : 'toolbar',
                title : '修改学生名称'
            }, {
                docked : 'bottom',
                xtype : 'toolbar',
                items : [{
                    text : '确定',
                    scope : this,
                    handler : function(){
                        var activeList = this.getActiveItem();
                        var record = activeList.getSelection()[0];
                        record.set('name', this.txtName.getValue());
                        this.editPanel.hide();
                    }
                }, {
                    xtype : 'spacer'
                }, {
                    text : '取消',
                    scope : this,
                    handler : function(){
                        this.editPanel.hide();
                    }
                }]
            }, {
                xtype : 'fieldset',
                items : [this.txtName = Ext.create('Ext.form.Text', {
                    clearBtn : true
                })]
            }]

        });
    }

});