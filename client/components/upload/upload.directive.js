'use strict';


angular.module('heirloamApp')
	.directive('upload', function ($http, imgurOptions, photoService) {
	return {
		templateUrl: 'components/upload/upload.html',
		restrict: 'EA',
		link: function () {
			//scope, element, attrs
			var input = document.getElementById('camera-input');

			var clickDiv = document.getElementById('uploadDiv');
			clickDiv.addEventListener('click', function() {
				input.click();
			});

			input.addEventListener('change', function() {
				var file = input.files[0],
					img = new Image(),
					reader = new FileReader();
				document.getElementById('output').innerHTML =
					file.name + '\n' +
					file.type + '\n' +
					file.size + ' bytes\n';
				reader.onload = function(event) {
					var images = document.querySelector('images');

					img = new Image();
					img.src = event.target.result;
					img.width = 300;
					img.addEventListener('click', function() {
						input.click();
					});
					
					
					var lblName = document.createElement('span');
					lblName.innerHTML = 'Name &nbsp;&nbsp;&nbsp;: &nbsp;';
					lblName.setAttribute('tooltip', 'any name you like');
					var iptName = document.createElement('input');   
					iptName.setAttribute('type', 'text');
					iptName.setAttribute('ng-model', 'imgName');
					iptName.setAttribute('placeholder', 'My very first homegrown plant');
					
					
					var lblSpecies = document.createElement('span');
					lblSpecies.innerHTML = 'Species&nbsp;: &nbsp;';					
					lblSpecies.setAttribute('tooltip', 'name of plant for cross references');
					var iptSpecies = document.createElement('input');   
					iptSpecies.setAttribute('type', 'text');
					iptSpecies.setAttribute('ng-model', 'imgSpecies');
					iptSpecies.setAttribute('placeholder', 'Asparagus');
					
					
					var lblInfo = document.createElement('span');
					lblInfo.innerHTML = 'Info &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: &nbsp;';
					lblInfo.setAttribute('tooltip', 'special information that might be helpful');
					var iptInfo = document.createElement('input');   
					iptInfo.setAttribute('type', 'textArea');
					iptInfo.setAttribute('ng-model', 'imgInfo');
					iptInfo.setAttribute('placeholder', 'Hydoponics set up');
					
					
					var lblDate = document.createElement('span');
					lblDate.innerHTML = 'DOB &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: &nbsp;';
					lblDate.setAttribute('tooltip', 'seed in soil date');
					var iptDate = document.createElement('input');   
					iptDate.setAttribute('type', 'date');
					iptDate.setAttribute('ng-model', 'imgDate');

					
					var btn = document.createElement('button');    // Create a <button> element
					btn.onclick = function() {

						var config = {
							title : 'test',
							description: 'testing description',
							datetime: new Date(),
							type: 'image/jpeg',
							animated: false,
							width: img.naturalWidth,
							height: img.naturalHeight
						};

						var imageObj = {
							title : 'test',
							image : img.src.split(',')[1]
						};

						var plantObj = {
							name : iptName.value,
							species : iptSpecies.value,
							info : iptInfo.value,
							dob : iptDate.value
						};

						console.log(plantObj);
						photoService.addPhoto({image:imageObj,plant:plantObj,config:config});
					};

					var t = document.createTextNode('post plant');       // Create a text node
					btn.appendChild(t); 
					

					
					clickDiv.remove();
					
					while (images.hasChildNodes()) {
						images.removeChild(images.childNodes[0]);
					}

					images.appendChild(img);
					images.appendChild(document.createElement('br'));
					images.appendChild(document.createElement('br'));
					images.appendChild(lblName);
					images.appendChild(iptName);
					images.appendChild(document.createElement('br'));
					images.appendChild(lblSpecies);
					images.appendChild(iptSpecies);
					images.appendChild(document.createElement('br'));
					images.appendChild(lblInfo);
					images.appendChild(iptInfo);
					images.appendChild(document.createElement('br'));
					images.appendChild(lblDate);
					images.appendChild(iptDate);
					images.appendChild(document.createElement('br'));
					images.appendChild(document.createElement('br'));
					images.appendChild(btn);
				};
				reader.readAsDataURL(file);
				//drawOnCanvas(file);
				//displayAsImage(file);
			}, false);


			/*
			function drawOnCanvas(file) {
				var reader = new FileReader();

				reader.onload = function (e) {
					var dataURL = e.target.result,
						c = document.querySelector('canvas'), // see Example 4
						ctx = c.getContext('2d'),
						img = new Image();

					img.onload = function() {
						var ratio = screen.width / img.width;

						c.width = img.width * ratio;
						c.height = img.height * ratio;
						ctx.drawImage(img, 0, 0);

					};

					img.src = dataURL;

				};

				reader.readAsDataURL(file);
			}


			function displayAsImage(file) {
				var imgURL = URL.createObjectURL(file),
					img = document.createElement('img');

				img.onload = function() {
					URL.revokeObjectURL(imgURL);
				};

				img.src = imgURL;
				document.body.appendChild(img);
			}
*/
		}
	};
});
