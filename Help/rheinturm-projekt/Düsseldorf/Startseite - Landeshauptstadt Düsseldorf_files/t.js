        var arrOfLinksToPrepare = [{"name":"Twitter","type":"socialMediaLink","pattern":"^(https?:)?(\/\/)?[^\/]*twitter\\.com"},{"name":"Xing","type":"socialMediaLink","pattern":"^(https?:)?(\/\/)?[^\/]*xing\\.com"},{"name":"LinkedIn","type":"socialMediaLink","pattern":"^(https?:)?(\/\/)?[^\/]*linkedin\\.com"},{"name":"YouTube","type":"socialMediaLink","pattern":"^(https?:)?(\/\/)?[^\/]*youtube\\.com"},{"name":"Facebook","type":"socialMediaLink","pattern":"^(https?:)?(\/\/)?[^\/]*facebook\\.com"},{"name":"Instagram","type":"socialMediaLink","pattern":"^(https?:)?(\/\/)?[^\/]*instagram\\.com"},{"name":"Pinterest","type":"socialMediaLink","pattern":"^(https?:)?(\/\/)?[^\/]*pinterest\\.com"},{"name":"Tumblr","type":"socialMediaLink","pattern":"^(https?:)?(\/\/)?[^\/]*tumblr\\.com"},{"name":"pdf","type":"download","pattern":"^(https?:\\\/\\\/)?(www\\.)?(.*\\.)?(duesseldorf\\.de).+\\.pdf$|\\.pdfx$"}];
        var preparePlayableMedia = false;
        var getParamsWhitelist = [];        (function(){
            window.et_cssSelectors = [{"id":1,"url":"servicetest.duesseldorf.de\/home\/-\/egov-ws\/fs\/19400\/19390","cssSelector":".online-services > a:nth-child(1)","category":"Assistenten","object":"Flinke Pedale","action":"click","type":"cssSelectorId:1","eventType":"EVENT_TYPE_CLICK","isOnsiteCampaign":false,"onsiteCmp":"","onsiteMed":"","segmentSource":"","segmentValue":""},{"id":4,"url":"service.duesseldorf.de\/suche\/-\/egov-bis-detail\/dienstleistung\/5251\/show","cssSelector":".description > p:nth-child(5) > a:nth-child(1)","category":"Assistenten","object":"Flinke Pedale Prod.","action":"click","type":"cssSelectorId:4","eventType":"EVENT_TYPE_CLICK","isOnsiteCampaign":false,"onsiteCmp":"","onsiteMed":"","segmentSource":"","segmentValue":""},{"id":7,"url":"service.duesseldorf.de\/home","cssSelector":"#portlet_2_WAR_biszufiportlet_INSTANCE_Ni07prqPA8im > div:nth-child(1) > div:nth-child(2) > div:nth-child(1)","category":"Startseite","object":"Startseite BSP","action":"click","type":"cssSelectorId:7","eventType":"EVENT_TYPE_CLICK","isOnsiteCampaign":false,"onsiteCmp":"","onsiteMed":"","segmentSource":"","segmentValue":""},{"id":10,"url":"service.duesseldorf.de\/home","cssSelector":".search-area","category":"Suche","object":"Suche Startseite","action":"click","type":"cssSelectorId:10","eventType":"EVENT_TYPE_CLICK","isOnsiteCampaign":false,"onsiteCmp":"","onsiteMed":"","segmentSource":"","segmentValue":""},{"id":2,"url":"*","cssSelector":"#","eventType":"EVENT_TYPE_VIEW","cssSelectorId":"TAG_2","tagId":2,"pageFilterType":"url","filter":[{"pageFilterType":"url","pageFilterCompare":"contains","pageFilter":"servicetest.duesseldorf.de\/suche","pageFilterNegate":false,"inclFragment":false,"getParamName":"","getParamValue":""}],"pageFilterCompare":"contains","pageFilter":"","pageFilterNegate":false,"title":"Portalsuche","config":{},"varFilter":[]}];
            if (et_config.doNotUseSessionStorage !== true && typeof(et_sessionStorage) !== 'undefined')
            {
                var strSel = JSON.stringify([{"id":1,"url":"servicetest.duesseldorf.de\/home\/-\/egov-ws\/fs\/19400\/19390","cssSelector":".online-services > a:nth-child(1)","category":"Assistenten","object":"Flinke Pedale","action":"click","type":"cssSelectorId:1","eventType":"EVENT_TYPE_CLICK","isOnsiteCampaign":false,"onsiteCmp":"","onsiteMed":"","segmentSource":"","segmentValue":""},{"id":4,"url":"service.duesseldorf.de\/suche\/-\/egov-bis-detail\/dienstleistung\/5251\/show","cssSelector":".description > p:nth-child(5) > a:nth-child(1)","category":"Assistenten","object":"Flinke Pedale Prod.","action":"click","type":"cssSelectorId:4","eventType":"EVENT_TYPE_CLICK","isOnsiteCampaign":false,"onsiteCmp":"","onsiteMed":"","segmentSource":"","segmentValue":""},{"id":7,"url":"service.duesseldorf.de\/home","cssSelector":"#portlet_2_WAR_biszufiportlet_INSTANCE_Ni07prqPA8im > div:nth-child(1) > div:nth-child(2) > div:nth-child(1)","category":"Startseite","object":"Startseite BSP","action":"click","type":"cssSelectorId:7","eventType":"EVENT_TYPE_CLICK","isOnsiteCampaign":false,"onsiteCmp":"","onsiteMed":"","segmentSource":"","segmentValue":""},{"id":10,"url":"service.duesseldorf.de\/home","cssSelector":".search-area","category":"Suche","object":"Suche Startseite","action":"click","type":"cssSelectorId:10","eventType":"EVENT_TYPE_CLICK","isOnsiteCampaign":false,"onsiteCmp":"","onsiteMed":"","segmentSource":"","segmentValue":""},{"id":2,"url":"*","cssSelector":"#","eventType":"EVENT_TYPE_VIEW","cssSelectorId":"TAG_2","tagId":2,"pageFilterType":"url","filter":[{"pageFilterType":"url","pageFilterCompare":"contains","pageFilter":"servicetest.duesseldorf.de\/suche","pageFilterNegate":false,"inclFragment":false,"getParamName":"","getParamValue":""}],"pageFilterCompare":"contains","pageFilter":"","pageFilterNegate":false,"title":"Portalsuche","config":{},"varFilter":[]}]);
                if(strSel !== '[]') {
                  et_sessionStorage.setItem('et_cssSelectors', strSel);
                } else {
                  et_sessionStorage.removeItem('et_cssSelectors');
                }
            }
        })();        (function(){
            if(!window.et_tagManager.resolveUserData) {
              window.et_tagManager.resolveUserData = function() {
                return {};
              }
            }

            window.et_tagManagerEntries = [{"id":2,"title":"Portalsuche","content":"<script>(function(){            if(!_etracker.isFirstPixelSent()) {\n                if(!window.cc_attributes)window.cc_attributes = {};\n                window.cc_attributes['etcc_cu'] = 'onsite';\n                window.cc_attributes['etcc_cmp_onsite'] = \"\";\n                window.cc_attributes['etcc_med_onsite'] = \"\";\n                window.cc_attributes['etcc_st_onsite'] = \"\";\n            } else {\n              var onsiteEvent = new et_OnsiteCampaignEvent(\n                \"\",\n                \"\",\n                \"\"\n              );\n              _etracker.sendEvent(onsiteEvent);\n            }})();<\/script>","target":"head","trigger_id":"2","category":"no_consent","is_draft":false,"template":"etSearch","service_id":"etracker","limit_type":"","limit_duration":"","params":null},{"id":5,"title":"Portalsuche","content":"<script>(function(){            if(!_etracker.isFirstPixelSent()) {\n                if(!window.cc_attributes)window.cc_attributes = {};\n                window.cc_attributes['etcc_cu'] = 'onsite';\n                window.cc_attributes['etcc_cmp_onsite'] = \"[[Click URL]]\";\n                window.cc_attributes['etcc_med_onsite'] = \"Portalsuche Test\";\n                window.cc_attributes['etcc_st_onsite'] = \"[[Click Text]]\";\n            } else {\n              var onsiteEvent = new et_OnsiteCampaignEvent(\n                \"[[Click URL]]\",\n                \"Portalsuche Test\",\n                \"[[Click Text]]\"\n              );\n              _etracker.sendEvent(onsiteEvent);\n            }})();<\/script>","target":"head","trigger_id":"2","category":"no_consent","is_draft":false,"template":"etSearch","service_id":"etracker","limit_type":"","limit_duration":"","params":null}];
            window.et_tagManagerVars = {};
            window.et_tagManagerData = {};

            if (et_config.doNotUseSessionStorage !== true && typeof(et_sessionStorage) !== 'undefined')
            {
                var strTags = JSON.stringify([{"id":2,"title":"Portalsuche","content":"<script>(function(){            if(!_etracker.isFirstPixelSent()) {\n                if(!window.cc_attributes)window.cc_attributes = {};\n                window.cc_attributes['etcc_cu'] = 'onsite';\n                window.cc_attributes['etcc_cmp_onsite'] = \"\";\n                window.cc_attributes['etcc_med_onsite'] = \"\";\n                window.cc_attributes['etcc_st_onsite'] = \"\";\n            } else {\n              var onsiteEvent = new et_OnsiteCampaignEvent(\n                \"\",\n                \"\",\n                \"\"\n              );\n              _etracker.sendEvent(onsiteEvent);\n            }})();<\/script>","target":"head","trigger_id":"2","category":"no_consent","is_draft":false,"template":"etSearch","service_id":"etracker","limit_type":"","limit_duration":"","params":null},{"id":5,"title":"Portalsuche","content":"<script>(function(){            if(!_etracker.isFirstPixelSent()) {\n                if(!window.cc_attributes)window.cc_attributes = {};\n                window.cc_attributes['etcc_cu'] = 'onsite';\n                window.cc_attributes['etcc_cmp_onsite'] = \"[[Click URL]]\";\n                window.cc_attributes['etcc_med_onsite'] = \"Portalsuche Test\";\n                window.cc_attributes['etcc_st_onsite'] = \"[[Click Text]]\";\n            } else {\n              var onsiteEvent = new et_OnsiteCampaignEvent(\n                \"[[Click URL]]\",\n                \"Portalsuche Test\",\n                \"[[Click Text]]\"\n              );\n              _etracker.sendEvent(onsiteEvent);\n            }})();<\/script>","target":"head","trigger_id":"2","category":"no_consent","is_draft":false,"template":"etSearch","service_id":"etracker","limit_type":"","limit_duration":"","params":null}]);
                var strVars = JSON.stringify({});

                if(strTags !== '[]') {
                    et_sessionStorage.setItem('et_tagManagerEntries', strTags);
                } else {
                    et_sessionStorage.removeItem('et_tagManagerEntries');
                }

                if(strVars !== '{}') {
                    et_sessionStorage.setItem('et_tagManagerVars', strVars);
                } else {
                    et_sessionStorage.removeItem('et_tagManagerVars');
                }
            }
        })();
var et_protocol = window._etracker.getConfigValue('protocol') || '//';

if(typeof(et_proxy_redirect) == 'undefined' || typeof(et_proxy_redirect) == 'unknown' || et_proxy_redirect == '')
{
	var et_server = et_protocol + 'www.etracker.de';
	var et_code_server = et_protocol + 'code.etracker.com';
}
else
{
	var et_server = et_proxy_redirect;
	var et_code_server = et_proxy_redirect;
}

var et_ver = '9989409';
var et_panelLink = et_server + '/app?et=';
var et_secureId = 'DgKRyx';

var et_maxUrlLength = (function () {
	var isIE = /*@cc_on!@*/false || !!document.documentMode;
	return isIE ? 2000 : 8190;
})();

var et_deliveryHash = "9EoUuYtbD5uxe2P69idf5jFINSPb60uQ";

var cc_autoPageNameRegistration = 'title';
var cc_getParamsWhiteList = [];

var et_initCoidTransfer = function() {
    var links = [];
    if(links.length > 0) {
        var anchors = document.getElementsByTagName('a');
        var coid = et_getCookieValue('et_allow_cookies', true) === '1' ? _etracker.getCoid() : '';
        et_prepareAnchorsForCoidTransfer(anchors, links, coid);
    }
};
et_initCoidTransfer();
var cc_cntScript    = 'cntcc';
var cc_genericEventPath = '/api/v6/tracking/webEvents';
var cc_optInPath 	= '/api/v6/tracking/optIn';
var cc_cntCookie    = '/cntcookie.php';
var cc_deltaTime 	= 17759098647218- 10 * (typeof et_getCurrentTime === 'function' ? et_getCurrentTime() : (new Date().getTime()));
var cc_codecVersion	= 1;
var cc_apiVersion	= '1.1.2';
var cc_articleDivider = '|';
var cc_itemDivider	= ';';

var et_autoSiteSearchActive = true;
var et_autoSiteSearchParameters = 'q,s,search,query,term,keyword,suche,/suche/'.split(',');

(function () {'use strict';window.et_ScrollDepthUtils={    getPageName:function(){        return et_getPageName();   },         isInIframe:function(){        try{            return window.self!==window.top;       }catch(e){            return true;       }   }};
'use strict';function ScrollPositionsContainer(timestamp){    var _this=this;    _this.buckets=_createNewBuckets();    _this.tm=timestamp;    _this.bucketChangeEvent=undefined;    _this.lastBuckets=[];    ScrollPositionsContainer.prototype.getPositions=function(){        return _this.buckets;   };         ScrollPositionsContainer.prototype.reset=function(){        _this.buckets=_createNewBuckets();   };         ScrollPositionsContainer.prototype.addStayTime=function(positionFrom,positionTo,timeMs){        if(positionFrom < 0||positionTo < 0){                        return;       }                _this.tm=et_getCurrentTime();        positionFrom=Math.floor(positionFrom);        positionTo=Math.floor(positionTo);        if(positionFrom > positionTo){            var originalTo=positionTo;            positionTo=positionFrom;            positionFrom=originalTo;       }        var currentBuckets=[];        for(var key in _this.buckets){            if(positionFrom <=_this.buckets[key].to&&positionTo >=_this.buckets[key].from){                _this.buckets[key].stayTime+=timeMs;                currentBuckets.push(key);           }       }        if(_bucketsChanged(currentBuckets,_this.lastBuckets)&&typeof _this.bucketChangeEvent==='function'){            _this.bucketChangeEvent();       }        _this.lastBuckets=currentBuckets;   };    function _bucketsChanged(arr1,arr2){        if(arr1.length===0||arr2.length===0){            return false;       }        if(arr1.length!==arr2.length){            return true;       }        for(var i=0;i < arr1.length;i++){            if(arr1[i]!==arr2[i]){                return true;           }       }        return false;   }    ScrollPositionsContainer.prototype.subscribeToBucketChange=function(callback){        _this.bucketChangeEvent=callback;   };    function _createNewBuckets(){        var buckets={            0:{stayTime:0},            10:{stayTime:0},            25:{stayTime:0},            50:{stayTime:0},            75:{stayTime:0},            101:{stayTime:0}       };        var previousKey=0;                for(var key in buckets){            key=parseInt(key);            buckets[previousKey].to=key-1;            buckets[key].from=key;            buckets[key].to=1000000;            previousKey=key;       }        return buckets;   }}
'use strict';var et_ScrollDepthEvent=function(eventObject,pageName){    if(!(this instanceof et_ScrollDepthEvent)){                 return new et_ScrollDepthEvent(eventObject,pageName);   }    this.name='scrollDepth';    this.pagename=pageName;    this.version=1;    this.eventData={        'object':eventObject    };};et_ScrollDepthEvent.prototype=new et_GenericEvent();et_ScrollDepthEvent.prototype.constructor=et_ScrollDepthEvent;et_ScrollDepthEvent.prototype.getEvent=function(){        var originalObject=et_GenericEvent.prototype.getEvent.call(this)[0];        originalObject[this.name]['pagename']=this.pagename;    return[originalObject];};function ScrollDepthTracker(currentTm){    var _this=this;         _this.REFRESH_TIME_MS=1000;    _this.STORAGE_PREFIX=et_config.cookie_path ? et_config.cookie_path+'/':'';    _this.STORAGE_KEY=_this.STORAGE_PREFIX+'et_scroll_depth';        _this.STORAGE_MAX_AGE_MS=1*60*60*1000;        _this.THROTTLING_TIME=5000;         _this.STORAGE=et_sessionStorage;    _this.lastUpdateTm=currentTm;    _this.lastFlushedTm=undefined;              _this.siteHeight=1;    _this.scrollPositions=new ScrollPositionsContainer(currentTm);         _this.startTracking=startTracking;    _this.getScrollPositions=getScrollPositions;    _this.getPageName=getPageName;    _this.save=save;    _this.load=load;    _this.reset=reset;         function startTracking(){        _this.scrollPositions.subscribeToBucketChange(_onScrollingBucketChange);        var body=document.body;        var html=document.documentElement||document.body;        _this.siteHeight=Math.max(body.scrollHeight,body.offsetHeight,html.clientHeight,html.scrollHeight,html.offsetHeight);        _this.load();        et_addEvent(window,'scroll',_updateScrollPositions);        setInterval(_updateScrollPositions,_this.REFRESH_TIME_MS);        setInterval(save,_this.REFRESH_TIME_MS);   }    function _onScrollingBucketChange(){                var nowTm=et_getCurrentTime();        if(!_this.lastFlushedTm||nowTm-_this.lastFlushedTm >=_this.THROTTLING_TIME){            _sendScrollDepthEventEvent();            _this.lastFlushedTm=nowTm;       }   }         function _sendScrollDepthEventEvent(pageName,buckets){        if(!_etracker.isTrackingEnabled()){            return;       }        pageName=pageName||getPageName();        if(!buckets){            buckets=_createBucketsArrayToSend(_this.scrollPositions.buckets);       }        _etracker.sendEvent(et_ScrollDepthEvent(encodeURIComponent(JSON.stringify(buckets)),pageName));        _this.reset();   }         function _createBucketsArrayToSend(bucketsObj){        var buckets=[];        for(var bucketKey in bucketsObj){            buckets.push({                from:bucketsObj[bucketKey].from,                to:bucketsObj[bucketKey].to,                stayTime:bucketsObj[bucketKey].stayTime            });       }        return buckets;   }         function reset(){        _this.scrollPositions.reset();        _this.save();   }         function _updateScrollPositions(){        var currentPositions=_this.getScrollPositions();        var newTm=et_getCurrentTime();        var stayTime=newTm-_this.lastUpdateTm;        _this.scrollPositions.addStayTime(currentPositions.from,currentPositions.to,stayTime);        _this.lastUpdateTm=newTm;   }    function getPageName(){        return window.et_ScrollDepthUtils.getPageName();   }         function save(){        var pageName=_this.getPageName();        if(pageName===undefined||!_this.scrollPositions||!_this.STORAGE){            return;       }                _this.scrollPositions.tm=et_getCurrentTime();        var storedJson=_readJsonFromStorage();        storedJson[pageName]=_this.scrollPositions;        _this.STORAGE.setItem(_this.STORAGE_KEY,JSON.stringify(storedJson));   }         function _deleteExpiredEntries(){        var storedJson=_readJsonFromStorage();        var now=et_getCurrentTime();        for(var key in storedJson){                        if(now-storedJson[key].tm > _this.STORAGE_MAX_AGE_MS){                delete storedJson[key];           }       }        _this.STORAGE.setItem(_this.STORAGE_KEY,JSON.stringify(storedJson));   }         function load(){        if(!_this.STORAGE){            return;       }        _deleteExpiredEntries();        var storedContent=_readJsonFromStorage();        var pageName=_this.getPageName();        if(storedContent[pageName]&&storedContent[pageName].buckets){            var storedContentForPage=storedContent[pageName];            if(storedContentForPage.buckets){                for(var key in storedContentForPage.buckets){                    if(_this.scrollPositions.buckets[key]!==undefined){                        _this.scrollPositions.buckets[key].stayTime=storedContentForPage.buckets[key].stayTime;                   }               }           }       }   }         function _readJsonFromStorage(){        if(!_this.STORAGE){            return{};       }        var storedContent=_this.STORAGE.getItem(_this.STORAGE_KEY);        if(!storedContent){            return{};       }        try{            return JSON.parse(storedContent);       }catch(e){            return{};       }   }         function getScrollPositions(){        var scrollX=0,scrollY=0;        if(typeof(window.pageYOffset)==='number'){                        scrollY=window.pageYOffset;            scrollX=window.pageXOffset;       }else if(document.body&&(document.body.scrollLeft||document.body.scrollTop)){                        scrollY=document.body.scrollTop;            scrollX=document.body.scrollLeft;       }else if(document.documentElement&&(document.documentElement.scrollLeft||document.documentElement.scrollTop)){                        scrollY=document.documentElement.scrollTop;            scrollX=document.documentElement.scrollLeft;       }        return{            from:scrollY/_this.siteHeight*100,            to:(scrollY+_getViewportSize()['height'])/_this.siteHeight*100        };   }   /**    *Gets the viewport size depending of browser capabilities     *@returns{{width:*,height:*}}    */    function _getViewportSize(){        var viewPortWidth;        var viewPortHeight;                if(typeof window.innerWidth!=='undefined'){            viewPortWidth=window.innerWidth;            viewPortHeight=window.innerHeight;       }                else if(typeof document.documentElement!=='undefined'&&typeof document.documentElement.clientWidth!==           'undefined'&&document.documentElement.clientWidth!==0){            viewPortWidth=document.documentElement.clientWidth;            viewPortHeight=document.documentElement.clientHeight;       }                else{            viewPortWidth=document.getElementsByTagName('body')[0].clientWidth;            viewPortHeight=document.getElementsByTagName('body')[0].clientHeight;       }        return{            width:viewPortWidth,            height:viewPortHeight        };   }}
'use strict';var SAMPLING_RATE=0.05;var scrollMapSettings=2;var shouldScrollDepthBeActive=false;function startScrollDepth(){    var isPageLoaded=typeof(document.readyState)==='undefined'||document.readyState==='complete'||document.readyState==='loaded';    if(!isPageLoaded||!_etracker.isCodeBricksLoaded()){        return false;   }    if(_etracker.isTrackingEnabled()&&(        scrollMapSettings===2||       (_etracker.areCookiesEnabled()&&scrollMapSettings===1))){        if(_isCookieSet()){            shouldScrollDepthBeActive=_isCookieTrue();       }else{            shouldScrollDepthBeActive=Math.random()<=SAMPLING_RATE;            _setCookie(shouldScrollDepthBeActive);       }   }    if(shouldScrollDepthBeActive&&!window.et_ScrollDepthUtils.isInIframe()){        startScrollDepthTracking();   }    return true;}function startScrollDepthTracking(){         var scrollDepth=new ScrollDepthTracker(et_getCurrentTime());    scrollDepth.startTracking();}function _isCookieSet(){    try{        return !!document.cookie.match(/isSdEnabled=/);   }catch(e){   }    return false;}function _isCookieTrue(){    try{        return !!document.cookie.match(/isSdEnabled=true/);   }catch(e){   }    return false;}function _setCookie(isTrue){    et_setCookieValue('isSdEnabled',isTrue,1,undefined,false);}et_scheduler.addTask(startScrollDepth,'scrolldepth',true);
'use strict';(function(){    if(window.et_ScrollDepthUtils.isInIframe()){        var currentHeight=0;        et_addEvent(window,'beforeunload',function(){            _sendMessage('page-unloaded');       });        _etracker.addOnLoad(function(){                        window.setTimeout(function(){                currentHeight=_getPageHeight();                var message={                    height:currentHeight                };                _sendMessage('page-loaded',message);           },500);       });        et_addEvent(window,'resize',function(){            var newPageHeight=_getPageHeight();            if(newPageHeight!==currentHeight){                currentHeight=newPageHeight;                var message={                    height:currentHeight                };                _sendMessage('height-changed',message);           }       });        et_addEvent(window,'scroll',function(){            var message={                height:_getPageHeight(),                scrollY:window.scrollY            };            _sendMessage('scroll-position',message);       });   }         function _sendMessage(type,payload){        var message={            type:type,            payload:payload,            url:window.location.href,            pageName:window.et_ScrollDepthUtils.getPageName()       };        parent.postMessage(JSON.stringify(message),'*');   }    function _getPageHeight(){        var body=document.body;        var html=document.documentElement;        return Math.max(body.scrollHeight,body.offsetHeight,html.clientHeight,html.scrollHeight,html.offsetHeight);   }})();
})();
function _etc_start()
{

	var et_isSubscriber = (
		'Notification' in window &&
		typeof(window.Notification) == "function" &&
		window.Notification.permission == "granted"
	);

	var extra = {
		et_sbscr: et_isSubscriber ? '1' : '0'
	};

	if(et_config.blockPageview !== true) {
		et_cc('DgKRyx', extra);

        for(var i = 0; i < et_config.slaveCodes.length; ++i)
        {
            et_log('execute slave tracking (' + et_config.slaveCodes[i] + ')');
            et_cc(et_config.slaveCodes[i], { secondary: 1 });
        }
	}

	_etracker.setFirstPixelSent();

	// we add one to the current time offset to ensure that any upcoming events are processed after the first pixel
    window.cc_deltaTime++;

	// send queued wrapper calls, ecommerce events, events and legacy events
    _etracker.sendStoredWrapperCalls();
	etCommerce.etCommerceLoad('DgKRyx');
	_etracker.sendStoredEvents();
	ET_Event.sendStoredEvents('DgKRyx');
    et_setupPageExitBeacon('DgKRyx');
    var prepareAnchors = arrOfLinksToPrepare.length ? new et_prepareAnchorsForEvents(arrOfLinksToPrepare, getParamsWhitelist) : null;
    var prepareMedia = preparePlayableMedia ? new et_prepareMediaForEvents() : null;
	}

	var et_OptIn = 0;
	var et_CookieOptIn = 0;
	var et_ActionButton = 0;
	var et_etcExecuted = false;

	var _etc = function() {
		// we set this here in order to be able to abort the scheduled tracking.start call in case
		// _etc has already been called by 3.0 code (_etc call is part of tracklet code)
		et_etcExecuted = true;

		var ejs_key = et_config.secureCode;
		var tjs_key = typeof(et_secureId) !== 'undefined' ? et_secureId : '';
		if(ejs_key && tjs_key && ejs_key !== tjs_key) {
			return;
		}

        // Used by apollo to test banner changes without publishing them.
        // If set, override whatever we have saved
        var consOverride = et_getUrlSearchParam((location.search || '').substring(1), 'et_consent_type');
        if (consOverride === 'c') {
          et_CookieOptIn = 1;
          et_ActionButton = 1;
        } else if (consOverride === 't') {
          et_OptIn = 1;
          et_ActionButton = 1;
        }

		et_checkShowActionButton();
		et_checkShowOptIn();
		if(et_checkTrackingStart()) {
			_etc_start();
		}
	};
            _etracker.setCodeBricksLoaded();