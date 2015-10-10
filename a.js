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
		// loadJson: function(path, success, error){
		// 	var xhr = new XMLHttpRequest();
		// 	xhr.onreadystatechange = function(){
		// 		if(xhr.readyState === XMLHttpRequest.DONE) {
		// 			if(xhr.status === 200) {
		// 				if(success) success(JSON.parse(xhr.responseText)JSON.parse();
		// 			} else {
		// 				if(error) error(xhr);
		// 			}
		// 		}
		// 	}
		// 	xhr.open('GET', path, true);
		// 	xhr.send();
		// }
	}
	mija.loadJson('a.json', function(json){
		alert(json.lawson.a);
		// alert(JSON.parse(json));
//		alert(json);
	}, function(xhr){
//		alert(xhr);
	});
// loadJSON('my-file.json',
//          function(data) { console.log(data); },
//          function(xhr) { console.error(xhr); }
// );



// function loadJSON(path, success, error)
// {
//     var xhr = new XMLHttpRequest();
//     xhr.onreadystatechange = function()
//     {
//         if (xhr.readyState === XMLHttpRequest.DONE) {
//             if (xhr.status === 200) {
//                 if (success)
//                     success(JSON.parse(xhr.responseText));
//             } else {
//                 if (error)
//                     error(xhr);
//             }
//         }
//     };
//     xhr.open("GET", path, true);
//     xhr.send();
// }
// Call it as:

// loadJSON('my-file.json',
//          function(data) { console.log(data); },
//          function(xhr) { console.error(xhr); }
// );



	// function giveClass($elem, css) {
	// 	for(var i in css) {
	// 		$elem[i] = css[i];
	// 	}
	// }

	var $idElem = $d.getElementById('h1');
	$idElem.addEventListener('click', function(){
		alert('hoge');
	});

	var $classElem2 = $d.getElementsByClassName('h2')[0];
	$classElem2.addEventListener('mouseenter', function(e){
		// var hoge = [];
		// for(i in $e) {
		// 	hoge.push(i + ' : ' + $e[i]);
		// 	// relatedTarget
		// 	// currentTarget
		// }
		// console.log(hoge.join('\n'))
		// alert($e)
		// alert(typeof $e)
		var $e = e.currentTarget;
		// $e.style.fontSize = '10px';
//		$e.style.textDecoration = 'underline';
		mija.giveClass($e, {
			textDecoration: 'underline',
			fontWeight: 'bold',
			cursor: 'pointer',
			color: '#555'
		});
	});
	$classElem2.addEventListener('mouseleave', function(e){
		var $e = e.currentTarget;
		// $e.style.fontSize = '20px';
		// $e.style.textDecoration = 'none';
		mija.giveClass($e, {
			textDecoration: 'none',
			fontWeight: 'regular',
			cursor: 'default',
			color: '#000'
		});
	});

	var $classElem = $d.getElementsByClassName('button')[0];
	$classElem.addEventListener('click', function(){
		alert('hoge');
	});




// style types
// http://www.comptechdoc.org/independent/web/cgi/javamanual/javastyle.html

// event types
// https://developer.mozilla.org/en-US/docs/Web/Events


//$d.getElementById('h1').

})(document);
