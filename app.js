const app = Vue.createApp({
    data(){
        return{
            name:'',
            address:'',
            phone:'',
            email:'',
            city:'',
            item:'',
            book:'',
            counter: 0,
            finalname:'',
        }
    },
    methods:{
        submitForm(){
            alert('order placed succesfully');
        },
        add(num){
           this.counter = this.counter + num;
        },
        remove(num){
           this.counter = this.counter - num;
        },
        setName(event){
            this.name = event.target.value;
        },
        setInputName(){
            this.finalname=this.name;
        }

    },
});

app.mount('#bookapp')