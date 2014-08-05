Ext.define('myApp.HorCarousel', {

    extend : 'Ext.Carousel',

    requires : ['Ext.Carousel'],

    config : {
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
    }

});