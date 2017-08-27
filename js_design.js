<script type="text/javascript">
  var startPos;

  if(typeof String.prototype.trim !== 'function') {
    String.prototype.trim = function() {
      return this.replace(/^\s+|\s+$/g, '');
    }
  }

  window.onload=function(){
    window.scrollTo(0,0);
    startPos = document.getElementsByTagName("nav")[0].offsetTop;
  };

  window.onscroll = function () {
    elem = document.getElementsByTagName("nav")[0];
    var myFixedClass='fixed-navi';

    var body=(document.compatMode && document.compatMode != "BackCompat")? document.documentElement : document.body;
    var topPos=document.all? body.scrollTop : pageYOffset;

    if (topPos > startPos) {
      if (elem.className.indexOf(myFixedClass)== -1) {
        if (elem.className != '') elem.className = elem.className + ' ' + myFixedClass;
        else elem.className = myFixedClass;
      }
    } else {
      var sRegEx = new RegExp(myFixedClass, "g");
      elem.className = elem.className.replace(sRegEx,"").trim();
    }
  }
</script> 