$js_popunderGlobalClick=0;

document.onmouseup=jspopunder;
function jspopunder() {

    $js_popunderGlobalClick=$js_popunderGlobalClick+1;

    if($js_popunderGlobalClick==1) {
 
        //Ссылка для редиректа
        $js_popunder_URL="https://www.youtube.com";
 
 
        $CookieTest=navigator.cookieEnabled;
        if($CookieTest) {
 
            $ISawAdvert=js_popundergetCookie("advmaker_pop");
 
            if(!$ISawAdvert) {
 
                $js_pupunder_newwindow=window.open($js_popunder_URL,"_blank","toolbar=yes, location=yes, directories=yes, status=yes, menubar=yes, scrollbars=yes, resizable=yes, copyhistory=yes");
 
                if($js_pupunder_newwindow) {
                    js_popundersetCookie("advmaker_pop",2,12);
                    $js_pupunder_newwindow.blur();
                }
            }
        }
    }
}
 
function js_popundersetCookie($Name,$Value,$EndH){
 
    var exdate=new Date();
    $EndH=exdate.getHours()+$EndH;
    exdate.setHours($EndH);
    document.cookie=$Name+ "=" +escape($Value)+(($EndH==null) ? "" : ";expires="+exdate.toGMTString()+"; path=/;");
}
 
function js_popundergetCookie($Name){
 
    if (document.cookie.length>0) {
        $Start=document.cookie.indexOf($Name + "=");
        if ($Start!=-1) { $Start=$Start + $Name.length+1; $End=document.cookie.indexOf(";",$Start);
        if ($End==-1) $End=document.cookie.length; return unescape(document.cookie.substring($Start,$End));
        }
    }
 
    return "";
}