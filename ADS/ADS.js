/**
 * Created by chenlong1 on 2017/02/03.
 */
(function () {
    if(!window['ADS']){
        window['ADS']={};
    }
    var isCompatible=function(other){
        return true;
    };
    window['ADS']['isCompatible']=isCompatible;
    //arguments is id or DOMObject
    var $=function(){
        var elements=new Array();
        for(var i=0;i<arguments.length;i++){
            var element=arguments[i];
            if(typeof element=='string'){
                element=document.getElementById(element);
            }
            if(arguments.length==1){
                return element;
            }
            elements.push(element);
        }
        return elements;
    };
    window['ADS']['$']=$;
    //node is id or DOMObject
    var addEvent=function(node,type,listener){
        if(!(node=$(node))){
            return false;
        }
        if(node.addEventListener){
            node.addEventListener(type,listener,false);
            return true;
        }
        return false;
    };
    window['ADS']['addEvent']=addEvent;
    //node is id or DOMObject
    var removeEvent=function (node,type,listener) {
        if(!(node=$(node))){
            return false;
        }
        if(node.removeEventListener){
            node.removeEventListener(type,listener,false);
            return true;
        }
        return false;
    };
    window['ADS']['removeEvent']=removeEvent;
    //parent is id or DOMObject
    var getElementsByClassName=function(className,tag,parent){
        parent=parent||document;
        if(!(parent=$(parent))){
            return false;
        }
        tag=tag||'*';
        var allTags=(tag=='*'&&parent.all)? parent.all:parent.getElementsByTagName(tag);
        var matchingElements=new Array();
        // 避免className中的 '-' 对正则匹配的影响
        className=className.replace(/\-/g,"\\-");
        var regexTest=new RegExp("^\\s*"+className +"\\s*$");

        for(var i=0;i<allTags.length;i++){
            if(regexTest.test(allTags[i].className)){
                matchingElements.push(allTags[i]);
            }
        }
        return matchingElements;
    };
    window['ADS']['getElementsByClassName']=getElementsByClassName;
    var toggleDisplay=function(node,value){
        if(!(node=$(node))){
            return false;
        }
    };
    window['ADS']['toggleDisplay']=toggleDisplay;
    var insertAfter=function(node,referenceNode){

    };
    window['ADS']['insertAfter']=insertAfter;
    var removeChildren=function(parent){

    };
    window['ADS']['removeChildren']=removeChildren;
    var prependChild=function(parent,newChild){

    };
    window['ADS']['prependChild']=prependChild;

})();