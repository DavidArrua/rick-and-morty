
const app = Vue.
createApp({
    data() {
        return {
            characters : [],
            next : '',
            prev : '',
        }
    },
    created(){
        axios
        .get('https://rickandmortyapi.com/api/character')
        .then(res =>{
            this.characters = res.data.results;
            this.next = res.data.info.next;
            this.prev = res.data.info.prev;
        })
        .catch(error => {
            console.log(error)
        })
    },
    methods: {
        nextPage(){
            axios
            .get(this.next)
            .then(res =>{
                this.characters = res.data.results;
                this.next = res.data.info.next;
                this.prev = res.data.info.prev;
            })
            .catch(error => {
                console.log(error)
            })
        },
        prevPage(){
            axios
            .get(this.prev)
            .then(res =>{
                this.characters = res.data.results;
                this.next = res.data.info.next;
                this.prev = res.data.info.prev;
            })
            .catch(error => {
                console.log(error)
            })
        }
    
    },
}).mount('#app');