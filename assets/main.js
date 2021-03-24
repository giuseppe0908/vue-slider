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
        "https://images-na.ssl-images-amazon.com/images/I/811VtPlOfNL._SL1441_.jpg",
        "https://images-na.ssl-images-amazon.com/images/I/8126t2PaIVL._SL1441_.jpg",
        "https://img.ibs.it/images/5051891142695_0_306_0_75.jpg",
        "https://www.dvd.it/174635-thickbox_default/harry-potter-e-i-doni-della-morte-parte-02-se.jpg",
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

//  Bonus Applicare l'autoplay allo slider:
// ogni 3 secondi, cambia immagine automaticamente.
      },
      created:function () {
        setInterval(this.next,3000)
      }
  }
);
