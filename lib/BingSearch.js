var request = require('request')
    , deferred = require('deferred')

function BingSearch(options) {
    var options=options||{}
    this.user=options.user
    this.password=options.password
}

BingSearch.prototype._getUrl = function (options) {
    return 'https://api.datamarket.azure.com/Bing/Search/v1/Image?Query=%27' + options.query + '%27&$format=JSON'
}


BingSearch.prototype.search = function (options) {
    var self=this
        , url = self._getUrl(options)
        , def=deferred()

    request.get(url, {
        json:true,
        auth:{
            user:'ee02865f-eaaf-450f-98f1-9574ff5e6ca8',
            password:'NpnTPLOIlQ9gKpEdYmnE2Z2DBFs/Q1RQkCKbiyBaHNk='
        }
    }, function (err, response, body) {
        if (err) {
            return def.reject(err)
        }
        if (!err && response.statusCode == 200) {
            return def.resolve(body.d)
        }
    })
    return def.promise
}

module.exports=BingSearch


/*************************************************************/
var jsonObjectRepresentingAnImageFromBingSearchApi = {
    __metadata:{
        uri:'https://api.datamarket.azure.com/Data.ashx/Bing/Search/v1/Image?Query=\'samsung\'&$skip=0&$top=1',
        type:'ImageResult'
    },
    ID:'ca016498-5768-4fe9-9c9b-633d7e6fadfd',
    Title:'... mais baratas para o Samsung S3350 Ch@t 335 - Todas as ofertas',
    MediaUrl:'http://www.tudocelular.com/new_files/images/global/tmp/Samsung_Chat_dentro.jpg',
    SourceUrl:'http://www.tudocelular.com/Samsung/fichas-tecnicas/n2145/Samsung-S3350-Cht-335_gallery.html',
    DisplayUrl:'www.tudocelular.com/Samsung/fichas-tecnicas/n2145/Samsung-S3350-Cht...',
    Width:'1000',
    Height:'887',
    FileSize:'71644',
    ContentType:'image/jpeg',
    Thumbnail:{
        __metadata:{ type:'Bing.Thumbnail' },
        MediaUrl:'http://ts4.mm.bing.net/th?id=H.4760280942051527&pid=15.1',
        ContentType:'image/jpg',
        Width:'300',
        Height:'265',
        FileSize:'9172'
    }
}