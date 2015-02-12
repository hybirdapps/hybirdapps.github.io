$(function(){
    var hashtable = {};
    hashtable['coder'] = "http://weekly.manong.io/issues/";
    hashtable['python'] = "http://py.memect.com/";
    hashtable['web'] = "http://web.memect.com/";
    hashtable['machinelearn'] = "http://ml.memect.com/";
    hashtable['bigdata'] = "http://bd.memect.com/";
    hashtable['app'] = "http://app.memect.com/";

    var fetchContents = function(hash){
        iframe='<iframe src="'+hashtable[hash]+'" seamless="" scrolling="no" frameborder="0" ';
        iframe+='style="width: 100%;height: 2000px"></iframe>';
        $(".container-fluid").html(iframe);
    };

    var IndexRouterTable = Backbone.Router.extend({
        routes: {
            "coder" : "coder",
            "python" : "python",
            "web" : "web",
            "machinelearn" : "machinelearn",
            "bigdata" : "bigdata",
            "app" : "app",
            "*path": "web"
        },
        coder: function(){
            fetchContents('coder');
        },
        python: function(){
            fetchContents('python');
        },
        web: function(){
            fetchContents('web');
        },
        machinelearn: function(){fetchContents('machinelearn');},
        bigdata: function(){fetchContents('bigdata');}
        app: function(){fetchContents('app');}
    });

    new IndexRouterTable();
    Backbone.history.start();
});
