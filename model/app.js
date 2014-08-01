
Ext.define('User', {
    extend: 'Ext.data.Model',
    config: {
        fields: [
            {name: 'name',     type: 'string'},
            {name: 'age',      type: 'int'},
            {name: 'phone',    type: 'string'},
            {name: 'gender',   type: 'string'},
            {name: 'username', type: 'string'},
            {name: 'alive',    type: 'boolean', defaultValue: true}
        ],

        validations: [
            {type: 'presence',  field: 'age'},
            {type: 'length',    field: 'name',     min: 2},
            {type: 'inclusion', field: 'gender',   list: ['Male', 'Female']},
            {type: 'exclusion', field: 'username', list: ['Admin', 'Operator']},
            {type: 'format',    field: 'username', matcher: /([a-z]+)[0-9]{2,3}/}
        ]
    }
});

Ext.application({
    name : 'myApp',
    launch : function(){       
        var instance = Ext.create('User', {
            name: 'Ed',
            gender: 'Male',
            username: 'edspencer'
        });
        var errors = instance.validate();
    }
})

