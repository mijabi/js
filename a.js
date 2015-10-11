(function($d){

	var mija = {

		// add multiple styles by Object
		giveStyles: function($elem, css){
			for(var i in css) {
				$elem.style[i] = css[i];
			}
		},

		// add multiple styles from Object
		giveClasses: function($elem, css){
			var classString = '';
			for(var i in css) {
				classString += ' ' + css[i]
			}
			$elem.className = $elem.className + classString;
		},

		// add multiple styles from Array
		stealClasses: function($elem, css){
			var originalClass = $elem.className;
			for(var i in css) {
				if(originalClass.indexOf(css[i]) != -1) originalClass = originalClass.split(css[i]).join('');
			}
			$elem.className = originalClass;
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
		bi: function(str, parentElement){
			// alert(parentElement === undefined)
			var $targ = parentElement === undefined ? $d : parentElement;
			switch(str.charAt(0)) {
				case '#' :
					return $targ.getElementById(str.substring(1));
					break;
				case '.' :
					// if there's only 1 class element, respond it. if they are more than 2, respond Array
					var $classes = $targ.getElementsByClassName(str.substring(1));
					return $classes.length == 1 ? $classes[0] : $classes;
					break;
				default :
					// if there's only 1 tag, respond it. if they are more than 2, respond Array
					var $tags = $targ.getElementsByTagName(str);
					return $tags.length == 1 ? $tags[0] : $tags;
					break;
			}

		}

	}


	//
	mija.bi('input').setAttribute('checked', 'checked');
	var inputIntervalCount = 0;
	var inputInterval = setInterval(function(){
		inputIntervalCount++;
		if(inputIntervalCount === 1) console.log(mija.bi('input').hasAttribute('checked'));
		if(inputIntervalCount === 2) console.log(mija.bi('input').getAttribute('checked'));
		if(inputIntervalCount === 3) mija.bi('input').removeAttribute('checked');
		if(inputIntervalCount === 4) clearInterval(inputInterval);
	},
	2000);


	//
	var $mem = mija.bi('em');
	for(var j in $mem) {
		mija.giveClasses($mem[j], ['bold', 'underline']);
	}

	mija.stealClasses($mem[0], ['bold']);


	// 
	var $idElem = mija.bi('#h1');
	$idElem.addEventListener('click', function(){
		alert('hoge');
	});


	//
	mija.bi('.one', mija.bi('.unordered-list')).addEventListener('mouseenter', function(e){
		var $targ = mija.bi('.sub-list', e.currentTarget);
		$targ.classList.remove('none');
		$targ.classList.add('block');
	});
	mija.bi('.one', mija.bi('.unordered-list')).addEventListener('mouseleave', function(e){
		var $targ = mija.bi('.sub-list', e.currentTarget);
		$targ.classList.remove('block');
		$targ.classList.add('none');
	});

	//
	mija.bi('.two', mija.bi('.unordered-list')).addEventListener('mouseenter', function(e){
		var $targ = mija.bi('.sub-list', e.currentTarget);
		$targ.classList.remove('fadeout');
		$targ.classList.add('fadein');
	});
	mija.bi('.two', mija.bi('.unordered-list')).addEventListener('mouseleave', function(e){
		var $targ = mija.bi('.sub-list', e.currentTarget);
		$targ.classList.remove('fadein');
		$targ.classList.add('fadeout');
	});

	//
	mija.bi('.three', mija.bi('.unordered-list')).addEventListener('mouseenter', function(e){
		var $targ = mija.bi('.sub-list', e.currentTarget);
		$targ.classList.remove('slideup');
		$targ.classList.add('slidedown');
	});
	mija.bi('.three', mija.bi('.unordered-list')).addEventListener('mouseleave', function(e){
		var $targ = mija.bi('.sub-list', e.currentTarget);
		$targ.classList.remove('slidedown');
		$targ.classList.add('slideup');
	});

	// // adds class "foo" to el
	// el.classList.add("foo");

	// // removes class "bar" from el
	// el.classList.remove("bar");

	// // toggles the class "foo"
	// el.classList.toggle("foo");

	// // outputs "true" to console if el contains "foo", "false" if not
	// console.log( el.classList.contains("foo") );

	// // add multiple classes to el
	// el.classList.add( "foo", "bar" );



	// 
	var $classElem2 = mija.bi('.h2');
	$classElem2.addEventListener('mouseenter', function(e){
		var $e = e.currentTarget;
		mija.giveStyles($e, {
			textDecoration: 'underline',
			fontWeight: 'bold',
			cursor: 'pointer',
			color: '#555'
		});
	});


	//
	$classElem2.addEventListener('mouseleave', function(e){
		var $e = e.currentTarget;
		mija.giveStyles($e, {
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
	mija.bi('.load-json1').addEventListener('click', function(){
		mija.loadJson('a.json',
			function(json){
				var $targ = mija.bi('.textarea');
				$targ.innerHTML = arguments[1];
			});
	});
	mija.bi('.load-json2').addEventListener('click', function(){
		mija.loadJson('a.json',
			function(json){
				var $targ = mija.bi('.textarea');
				$targ.innerHTML = json.lawson.a;
			});
	});


	// height
	var hei = mija.bi('#h1').clientHeight;
	mija.bi('#h1').style.height = (hei * 2) + 'px';


	// left, top
	var le = mija.bi('#h1').offsetLeft;
	console.log('#h1.left: ' + le);
	var to = mija.bi('#h1').offsetTop;
	console.log('#h1.top: ' + to);

// style types
// http://www.comptechdoc.org/independent/web/cgi/javamanual/javastyle.html


// event types
// https://developer.mozilla.org/en-US/docs/Web/Events


})(document);
