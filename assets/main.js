var app = new Vue(
  {
    el:'#root',
    data:{
      i:0,
      img_array:[
        "https://images-na.ssl-images-amazon.com/images/I/5199%2B%2B-QxmL.jpg",
        "https://librisognierealta.it/wp-content/uploads/2017/06/Harry-Potter-e-la-camera-dei-segreti-cover-locandina.jpg",
        "https://images-na.ssl-images-amazon.com/images/I/81vteywKEKL._SL1441_.jpg",
        "https://img.ibs.it/images/5051891142718_0_306_0_75.jpg",
      ]
    },
      methods:{
        next: function() {
          // this.i++
          if (this.i < this.img_array.length -1) {
            this.i++;
          }else {
            this.i =0;
          }
        },
        prev: function(){
          if (this.i > 0) {
            this.i--;
          }else {
            this.i = this.img_array.length -1;
          }
        },
        dots: function(i){
          this.i = i;
        },
      }
  }
);
