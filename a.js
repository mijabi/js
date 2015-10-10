(function($d){

	var mija = {
		giveClass: function($elem, css){
			for(var i in css) {
				$elem.style[i] = css[i];
			}
		},
		loadJson: function(url, success, error){
			var xmlhttp = new XMLHttpRequest();
			xmlhttp.open('GET' , url , true);
			xmlhttp.onreadystatechange = function() {
			    if(4 != xmlhttp.readyState) return;
			    if(200 != xmlhttp.status) return;
				success(JSON.parse(xmlhttp.responseText));
			};
			xmlhttp.send();
		}
	}

	// load json
	mija.loadJson('a.json', function(json){
			alert(json.lawson.a);
		}, function(str){
			// occured error
		});


	//
	var $idElem = $d.getElementById('h1');
	$idElem.addEventListener('click', function(){
		alert('hoge');
	});

	// 
	var $classElem2 = $d.getElementsByClassName('h2')[0];
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
	var $classElem = $d.getElementsByClassName('button')[0];
	$classElem.addEventListener('click', function(){
		alert('hoge');
	});




// style types
// http://www.comptechdoc.org/independent/web/cgi/javamanual/javastyle.html


// event types
// https://developer.mozilla.org/en-US/docs/Web/Events


})(document);
