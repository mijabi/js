(function($d){

	var mija = {

		// add multiple styles by Object
		giveClass: function($elem, css){
			for(var i in css) {
				$elem.style[i] = css[i];
			}
		},

		// load JSON file asynchronously
		loadJson: function(url, success, error){
			var xmlhttp = new XMLHttpRequest();
			xmlhttp.open('GET' , url , true);
			xmlhttp.onreadystatechange = function() {
			    if(4 != xmlhttp.readyState) return;
			    if(200 != xmlhttp.status) return;
				success(JSON.parse(xmlhttp.responseText), xmlhttp.responseText);
			};
			xmlhttp.send();
		},

		// get HTML Elements simply
		bi: function(str){
			switch(str.charAt(0)) {
				case '#' :
					return $d.getElementById(str.substring(1));
					break;
				case '.' :
					// if there's only 1 class element, respond it. if they are more than 2, respond Array
					var $classes = $d.getElementsByClassName(str.substring(1));
					return $classes.length == 1 ? $classes[0] : $classes;
					break;
				default :
					// if there's only 1 tag, respond it. if they are more than 2, respond Array
					var $tags = $d.getElementsByTagName(str);
					return $tags.length == 1 ? $classes[0] : $classes;
					break;
			}

		}

	}


	//
	var $idElem = mija.bi('#h1');
	$idElem.addEventListener('click', function(){
		alert('hoge');
	});

	// 
	var $classElem2 = mija.bi('.h2');
	$classElem2.addEventListener('mouseenter', function(e){
		var $e = e.currentTarget;
		mija.giveClass($e, {
			textDecoration: 'underline',
			fontWeight: 'bold',
			cursor: 'pointer',
			color: '#555'
		});
	});

	//
	$classElem2.addEventListener('mouseleave', function(e){
		var $e = e.currentTarget;
		mija.giveClass($e, {
			textDecoration: 'none',
			fontWeight: 'regular',
			cursor: 'default',
			color: '#000'
		});
	});

	//
	var $classElem = mija.bi('.button');
	$classElem.addEventListener('click', function(){
		alert('hoge');
	});

	// load json
	mija.bi('.load-json').addEventListener('click', function(){
		mija.loadJson('a.json',
			function(json){
				var $targ = mija.bi('.textarea');
				// $targ.innerHTML = arguments[1];
				$targ.innerHTML = json.lawson.a;
			}, function(str){
				// occured error
			});
	});




// style types
// http://www.comptechdoc.org/independent/web/cgi/javamanual/javastyle.html


// event types
// https://developer.mozilla.org/en-US/docs/Web/Events


})(document);
