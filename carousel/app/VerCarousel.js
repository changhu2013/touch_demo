Ext.define('myApp.VerCarousel', {

    extend : 'Ext.Carousel',

    requires : ['Ext.Carousel'],

    config : {
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
    }

});