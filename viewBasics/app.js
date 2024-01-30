const app = Vue.createApp({

    data() {
        return{
            showBooks:true,
            // title: 'the final Empire',
            x : 0,
            y : 0,
            url:'https://example.com',
            books:[
                {title: 'this is a title', author: 'by unknow author', img:'assets/1.jpg', isFav:true},
                {title: 'this is a title', author: 'by unknow author', img:'assets/2.jpg', isFav:false},
                {title: 'this is a title', author: 'by unknow author', img:'assets/3.jpg',isFav:true}
            ]
        }
    },

    methods:{
        toggleShowBooks() {
            this.showBooks = !this.showBooks
        },
        handleEvent(e, data) {
            console.log(e,e.type);
            if(data){
                console.log(data)
            }
        },
        handleMouseMove(e){
            this.x = e.offsetx
            this.y = e.offsety
        },
        computed:{
            filtered(book){
                return this.books.filter((book) => book.isFav)
            }
        }
    }

})


app.mount('#app')