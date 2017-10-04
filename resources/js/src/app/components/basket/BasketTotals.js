Vue.component("basket-totals", {

    props: [
        "config",
        "template"
    ],

    computed: Vuex.mapState({
        basket: state => state.basket.data
    }),

    created()
    {
        this.$options.template = this.template;
    },

    /**
     * Bind to basket
     */
    ready()
    {
        // ResourceService.bind("basket", this);
    },

    methods:
    {
        /**
         * TODO
         * @param name
         * @returns {boolean}
         */
        showProperty(name)
        {
            return !this.config || this.config.indexOf(name) >= 0 || this.config.indexOf("all") >= 0;
        }
    }
});
