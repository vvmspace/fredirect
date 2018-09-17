const BF = new Vue({
    el: '#BF',
    data: {
        countdown: 5,
        redirect_url: 'https://www.youtube.com/watch?v=WejsQeg897o'
    },
    created() {
        this.initTicker();
    },
    methods: {
        initTicker: function() {
            let self = this;
            setInterval(() => {self.tick();}, 1000);
        },
        tick: function() {
            if(this.countdown >= 0){
                this.countdown--;
            }else{
                document.location.href = this.redirect_url;
            }
        }
    }
});