function Slider(selector, options) {
    var __self  = this;
    //DOM Nodes;
    var sliderNode = document.querySelector(selector);
    var sliderImagesNode = sliderNode.querySelector('.slider__images-wrap');
    var  prevSliderNode = sliderNode.querySelector('.slider__pager_previous'),
        nextSliderNode = sliderNode.querySelector('.slider__pager_next'),
        paginationNode = sliderNode.querySelector('.slider__pagination');

    var currentSlideIndex = options.currentSlide || 0;
    var imagesCount = sliderImagesNode.children.length
    var  slideSize = (options.direction === 'vertical') ? sliderImagesNode.offsetHeight : sliderImagesNode.offsetWidth;

    this.prevSlide = function () {
        if (currentSlideIndex === 0) {
            currentSlideIndex = imagesCount - 1;
            return
        }
        currentSlideIndex--;
    }
    this.nextSlide = function () {
        if (currentSlideIndex === imagesCount - 1) {
            currentSlideIndex = 0;
            return
        }
        currentSlideIndex++;
    }

    paginationNode.onclick = function (e) {
        console.log(e)
    }
    
    this.__render = function() {
        var directionStyle = (options.direction === 'vertical') ? 'marginTop' : 'marginLeft';
        sliderImagesNode.style[directionStyle] = -(currentSlideIndex * slideSize) + 'px';
        paginationNode.querySelector('.active').classList.remove('active');
        paginationNode.children[currentSlideIndex].querySelector('a').classList.add('active');
    };
    prevSliderNode.onclick = function(e) {
        e.preventDefault();
        __self.prevSlide();
        __self.__render();
    };

    nextSliderNode.onclick = function(e) {
        e.preventDefault();
        __self.nextSlide();
        __self.__render();
    };

    
    paginationNode.onclick =function (e) {
        e.preventDefault();
        var link = e.target;
        if (link.tagName !== 'A') { return }
        currentSlideIndex = +link.dataset['slider__item'];
        console.log(e.target);
        __self.__render();
    }

    this.__init = function() {
        if (options.direction == 'vertical') {
            sliderImagesNode.style.whiteSpace = 'normal';
        }
        this.__render();
    }
    this.__init();
}
var slider__pagination_item = document.querySelector('.slider__pagination-item');
// console.log(slider__pagination_item.outerHTML);
var li = slider__pagination_item.cloneNode(true);
slider__pagination_item.classList.remove('template');
li.classList.remove('template');


li.firstElementChild.classList.remove('active');
var fragment = document.createDocumentFragment();
// fragment.appendChild(li);
var slider__images = document.querySelector('.slider__images-wrap');
var count_img = slider__images.children.length;
// console.log(li.outerHTML);
// console.dir(count_img);
// var images = document.querySelector('img');
//  li.style.display="block" ;

// fragment.appendChild(li);

for (var i = 1; i < count_img; i++) {
    li.firstElementChild.setAttribute('data-slider__item', i+"");
    li.firstElementChild.firstChild.data = i + 1 +'' ;
    var li_copy = li.cloneNode(true);
    fragment.appendChild(li_copy);
    // li.firstElementChild.innerHTML = i + 1 +'' ;
    console.log(li.outerHTML);
}
// li.parentElement.removeChild(li);
console.dir(fragment);
var slider__pagination = document.querySelector('.slider__pagination');
// slider__pagination.innerHTML = '';
slider__pagination.appendChild(fragment);
// slider__pagination.appendChild(fragment);







































