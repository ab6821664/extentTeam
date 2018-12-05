window.onload=function () {

    var topic=new Vue({
        el:'#topic',
        data:{
            list:[1,2,3,4,5,7,8,9],
            pickBackground:['#5FADF2','#56C4CF','#8697FA']
        },
        computed:{
            pages:function () {
                return this.list.length%3==0?this.list.length/3:Math.floor(this.list.length/3)+1;
            }
        },
        methods:{
            bgcolor:function (index) {
                return {backgroundColor:this.pickBackground[index]}
            }
        },
        mounted:function () {
            var mySwiper = new Swiper('.swiper-container',{
                pagination: {
                    el: '.swiper-pagination',
                    bulletElement : 'li',
                },
            })
        }
    })
}