
const app = new Vue({
  el:'#app',
  data : {
    index : 0,
    img : ['img/image1.jpg' ,'img/image2.jpg','img/image3.jpg','img/image4.jpg']
  },
  methods:{
    nextImg : function(){
      this.index < (this.img.length - 1) ? this.index++ : this.index = 0;
    },
    prevImg : function(){
      this.index !== 0 ? this.index-- : this.index = this.img.length -1 ;

    }
  }
})
