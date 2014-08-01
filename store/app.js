Ext.require([
    'Ext.form.Panel',
    'Ext.form.FieldSet',
    'Ext.field.Select',

    'Ext.data.Store',

    'Ext.field.DatePicker',
    'Ext.field.Slider',
    'Ext.field.Toggle',
    'Ext.field.Hidden'
]);
Ext.application({
    name : 'myApp',
    launch : function(){

        Ext.define('genre', {
            extend : 'Ext.data.Model',
            config : {
                fields : [{
                    name : 'id', type : 'int'
                }, {
                    name : 'genre', type : 'string'
                }]
            }
        });

        var genreStore = Ext.create('Ext.data.Store', {
            model : 'genre',
            data : [{
                id : 1, genre : '喜剧'
            }, {
                id : 2, genre : '文艺'
            }, {
                id : 3, genre : '动作'
            }]
        });

        var formPanel = Ext.create('Ext.form.Panel', {
            scrollable : 'vertical',
            items : [{
                xtype : 'fieldset',
                instructions : '请填写信息',
                defaults : {
                    labelwidth : '20%'
                },
                items : [{
                    xtype : 'selectfield',
                    name : 'genre',
                    label : '种类',
                    valueField : 'id',
                    displayField : 'genre',
                    store : genreStore,
                    defaultPhonePickerConfig : {
                        doneButton : '确定',
                        cancelButton : '取消'
                    }
                }, {

                    xtype : 'datepickerfield',
                    name : 'released',
                    label : '发行日期',
                    picker : {
                        yearFrom : 2000,
                        yearTo : 2100,
                        cancelButton : '取消',
                        doneButton : '确定'
                    },
                    value : new Date(),
                    dateFormate : 'Y/m/d'
                }, {
                    xtype : 'sliderfield',
                    name : 'volume',
                    label : '音量',
                    minValue : 0,
                    maxValue : 100,
                    increment : 10,
                    value : 20
                }, {
                    xtype : 'togglefield',
                    name : 'enable',
                    label : '是否有效',
                    value : 1
                }, {
                    xtype : 'hiddenfield',
                    name : 'hidden',
                    value : 'text'
                }, {
                    xtype : 'panel',
                    layout : {
                        type : 'hbox',
                        pack : 'center'
                    },
                    items : [{
                        xtype : 'button',
                        text : '提交'
                    }, {
                        xtype : 'button',
                        text : '重置'
                    }]
                }]
            }, {
                xtype : 'button',
                text : '按钮1'
            }, {
                xtype : 'button',
                text : '按钮2'
            }]
        });

        Ext.Viewport.add(formPanel);
    }
});