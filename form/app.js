Ext.require([
    'Ext.form.Panel', 
    'Ext.form.FieldSet',
    'Ext.field.Password',
    'Ext.field.Number',
    'Ext.field.Spinner',
    'Ext.field.Email',
    'Ext.field.Url',
    'Ext.field.TextArea',
    'Ext.field.Search',
    'Ext.field.Radio',
    'Ext.field.Select'
]);
Ext.application({
    name : 'myApp',
    //icon : 'images/icon.png',
    glossOnIcon : false,
    //phoneStratupScreen : 'images/phone_startup.png',
    //tabletStartupScreen : 'images/tablet_startup.png',
    launch : function(){
        var formPanel = Ext.create('Ext.form.Panel', {
            scrollable : 'vertical',
            items : [{
                xtype : 'fieldset',
                title : '登陆',
                instructions : '填写登陆信息',
                defaults : {
                    labelwidth : '20%'
                },
                items : [{
                    xtype : 'textfield',
                    name : 'userCode',
                    label : '账户',
                    placeHolder : '请输入账户名称',
                    required : true,
                    clearIcon : true
                }, {
                    xtype : 'passwordfield',
                    name : 'password',
                    label : '密码',
                    placeHolder : '请输入登陆密码',
                    required : true,
                    clearIcon : true
                }, {
                    xtype : 'numberfield',
                    name : 'age',
                    label : '年龄',
                    placeHolder : '请输入年龄',
                    required : true,
                    clearIcon : true
                }, {
                    xtype : 'spinnerfield',
                    name : 'age2',
                    label : '年龄2',
                    required : true,
                    minValue : 0,
                    maxValue : 100,
                    value : 12
                }, {
                    xtype : 'emailfield',
                    name : 'email',
                    label: 'Email',
                    placeHolder : '请输入邮箱地址',
                    clearIcon : true
                }, {
                    xtype : 'urlfield',
                    name : 'url',
                    label : '个人网站',
                    placeHolder : '请输入个人网站地址',
                    clearIcon : true
                }, {
                    xtype : 'textareafield',
                    name : 'memo',
                    label : '简介',
                    placeHolder : '输入100字以内的个人简介',
                    clearIcon : true,
                    maxLength : 100,
                    maxRows : 4 //指定允许显示的文字行数
                }, {
                    xtype : 'searchfield',
                    name : 'search',
                    label : 'Search',
                    placeHolder : '请输入关键字',
                    clarIcon : true
                }, {
                    xtype : 'radiofield',
                    name : 'sex',
                    label : '男',
                    value : 'male',
                    checked : true
                }, {
                    xtype : 'radiofield',
                    name : 'sex',
                    label : '女',
                    value : 'female',
                    checked : false
                }, {
                    xtype : 'fieldset',
                    title : '国籍',
                    defaults : {
                        xtype : 'radiofield'
                    },
                    items : [{
                        name : 'country',
                        label : '中国',
                        value : 'china'
                    }, {
                        name : 'country',
                        label : '日本',
                        value : 'janpan'
                    }, {
                        name : 'country',
                        label : '美国',
                        value : 'USA'
                    }]
                }, {
                    xtype : 'fieldset',
                    title : '国籍',
                    defaults : {
                        xtype : 'checkboxfield'
                    },
                    items : [{
                        name : 'country',
                        label : '中国',
                        value : 'china'
                    }, {
                        name : 'country',
                        label : '日本',
                        value : 'janpan'
                    }, {
                        name : 'country',
                        label : '美国',
                        value : 'USA'
                    }]
                }, {
                    xtype: 'selectfield',
                    label: 'Choose one',
                    options: [
                        {text: 'First Option',  value: 'first'},
                        {text: 'Second Option', value: 'second'},
                        {text: 'Third Option',  value: 'third'}
                    ],
                    defaultPhonePickerConfig : {
                        doneButton : '确定',
                        cancelButton : '取消'
                    }
                }]
            }]
        });
        Ext.Viewport.add(formPanel);
   }
});