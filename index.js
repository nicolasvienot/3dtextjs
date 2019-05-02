
var width = 500;
var height = 500;
var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(25, width / height, 0.1, 1000);
var renderer = new THREE.WebGLRenderer();
scene.background = new THREE.Color(0xffffff);

renderer.setSize(width, height);
document.body.appendChild(renderer.domElement);




var loader = new THREE.FontLoader();
var font = loader.load(
	// resource URL
	'fonts/helvetiker_bold.typeface.json',

	// onLoad callback
	function (font) {
		// do something with the font
		var textGeo = new THREE.TextGeometry('Test', {
			size: 10,
			height: 5,
			curveSegments: 6,
			font: font,
		});
		scene.add(font);
	},

	// onProgress callback
	function (xhr) {
		console.log((xhr.loaded / xhr.total * 100) + '% loaded');
	},

	// onError callback
	function (err) {
		console.log('An error happened');
	}
);




// var loader = new THREE.FontLoader();
// var font = loader.load(

// 	'fonts/helvetiker_bold.typeface.json',

// 	function (font) {
// 		var textGeo = new THREE.TextGeometry('Test', {
// 			size: 10,
// 			height: 5,
// 			curveSegments: 6,
// 			font: tex,
// 		});
// 		var color = new THREE.Color();
// 		color.setRGB(0, 250, 250);
// 		var textMaterial = new THREE.MeshBasicMaterial({ color: color });
// 		var text = new THREE.Mesh(textGeo, textMaterial);
// 		scene.add(font);
// 	},

// );





// fontLoader.load("./fonts/helvetiker_regular.typeface.json", function (tex) {
// 	var textGeo = new THREE.TextGeometry('Test', {
// 		size: 10,
// 		height: 5,
// 		curveSegments: 6,
// 		font: tex,
// 	});
// 	var color = new THREE.Color();
// 	color.setRGB(0, 250, 250);
// 	var textMaterial = new THREE.MeshBasicMaterial({ color: color });
// 	var text = new THREE.Mesh(textGeo, textMaterial);
// 	scene.add(text);
// })

// var textMesh = new THREE.Mesh(textGeom, material);

// scene.add(geometry);

// Do some optional calculations. This is only if you need to get the
// width of the generated text
// textGeom.computeBoundingBox();
// textGeom.textWidth = textGeom.boundingBox.max.x - textGeom.boundingBox.min.x;



// var loader = new THREE.FontLoader();

// loader.load('./fonts/helvetiker_regular.typeface.json', function (font) {

// 	var geometry = new THREE.TextGeometry('Hello three.js!', {
// 		font: font,
// 		size: 80,
// 		height: 5,
// 		curveSegments: 12,
// 		bevelEnabled: true,
// 		bevelThickness: 10,
// 		bevelSize: 8,
// 		bevelSegments: 5
// 	});
// });

// var material = new THREE.MeshPhongMaterial({
// 	ambient: 0x55555,
// 	color: 0x55555,
// 	specular: 0xffffff,
// 	shininess: 50,
// 	shading: THREE.SmoothShading
// });
// var cube = new THREE.Mesh(geometry, material);
// scene.add(cube);