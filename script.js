var imgs = [];
		var slider;
		var imgAtual;
		var maxImg;
		var tmp;
		var vtempo;
		var vbarra;

		function preCarregamento() {
			var s = 1;
			for(var i = 0; i < 2; i++) {
				imgs[i] = new Image();
				imgs[i].src = 'imgs/s'+s+'.png';
				s++;
			}	
		}

		function carregar(img) {
			slider.style.backgroundImage = 'url('+imgs[img].src+')';
		}

		function inicia() {
			preCarregamento()
			imgAtual = 0;
			maxImg = imgs.length - 1;
			slider = document.getElementById('dv1');
			vbarra = document.getElementById('dvBarra');
			carregar(imgAtual);
			tmp = 0;
			anima()
		}

		function troca(dir) {
			tmp = 0;
			imgAtual+= dir;
			if(imgAtual > maxImg) {
				imgAtual = 0;
			}if(imgAtual < 0) {
				imgAtual = maxImg;
			}
			carregar(imgAtual);
		}

		function anima() {
			tmp++;
			if(tmp >= 500) {
				tmp = 0;
				troca(1)
			}

			vtempo = tmp/5;
			vbarra.style.width = vtempo + '%';
			requestAnimationFrame(anima);
		}

		window.addEventListener('load', inicia);
