var app_frame = new Vue({
    el: '#app',
    data: {
        product: 'ケニア',
        description: '水平線まで続く大自然や様々な動物が生息するケニア。アフリカの大地の力強い土壌で育ったケニアのコーヒーは、豊かな酸味と香りが特徴的です。近年では質の高いスペシャリティコーヒーの生産に力をいれており、その質の高さから年々入手が難しくなっています。もし、カフェなどでみかけたら是非一度味わってみてください！',
        image: 'img/country01.png',
        variants: [
            {
                variantId: 2234,
                variantProduct: 'ケニア',
                variantDescription: '水平線まで続く大自然や様々な動物が生息するケニア。アフリカの大地の力強い土壌で育ったケニアのコーヒーは、豊かな酸味と香りが特徴的です。近年では質の高いスペシャリティコーヒーの生産に力をいれており、その質の高さから年々入手が難しくなっています。もし、カフェなどでみかけたら是非一度味わってみてください！',
                variantColor: "ケニア",
                variantImage: "img/country01.png"
            },
            {
                variantId: 2235,
                variantProduct: 'エチオピア',
                variantDescription: 'コーヒー発祥の地であるエチオピア。さすが発祥の地と言うべきか、小規模から大規模まで非常にたくさんのコーヒー農家が存在します。エチオピアもケニアと同じアフリカ系のコーヒーです。個人的な印象として、エチオピアのコーヒーの最も大きな特徴は「華やかな香り」です。コーヒーとは思えない豊かな香りが味だけでなく私たちを大いに楽しませてくれます。',
                variantColor: "エチオピア",
                variantImage: "img/country02.png"
            },
            {
                variantId: 2236,
                variantProduct: 'ボリビア',
                variantDescription: 'ウユニ塩湖が有名な南米ボリビア。日本でも扱うカフェが少ないですが近年注目のコーヒーカントリーです。ボリビアの豆の特徴は、全てがもれなく「オーガニック生産」だということです。ケニアやエチオピアに比べてコーヒー生産の仕組みが整っておらず、質の高さに対して流通量が低いです。もし街なかでボリビアのコーヒーを見かけたら是非飲んでみてください。',
                variantColor: "ボリビア",
                variantImage: "img/country03.png"
            },
            {
                variantId: 2237,
                variantProduct: 'グアテマラ',
                variantDescription: '古代マヤ文明で有名な国グアテマラ。中南米に属し、非常に火山が多い国として有名です。山岳地帯の多い複雑な地形、火山が生み出す芳醇な土壌が多彩な味や香りのコーヒーを育てています。中南米系のコーヒーはアフリカ系よりも酸味が穏やかでフラットな飲み心地が特徴です。コーヒー独特の酸味や苦味が苦手という方はグアテマラなどのコーヒーからトライしてみても良いかもしれません。',
                variantColor: "グアテマラ",
                variantImage: "img/country04.png"
            },
            {
                variantId: 2238,
                variantProduct: 'ブラジル',
                variantDescription: 'サッカーやリオのカーニバルで有名なブラジル。コーヒー生産量はなんと世界一位を誇ります。日本の喫茶店で提供されるブレンドのベースとしてよく使われるなど、日本人にも馴染みが深い国です。その味は非常にバランスがよく、程よい酸味と程よいコク、優等生のようなコーヒーです。',
                variantColor: "ブラジル",
                variantImage: "img/country05.png"
            }
        ],
        cart: 0
    },
    methods: {
        addToCart: function(){
            this.cart += 1
        },
        updateProduct: function(variantImage, variantProduct, variantDescription){
            this.image = variantImage
            this.product = variantProduct
            this.description = variantDescription
        }
    }
})

ScrollReveal().reveal('.headline', {
    duration: 2000
});

ScrollReveal().reveal('.concept_picture', {
    duration: 1000,
    delay: 50,
    duration: 1600,
    origin: 'bottom',
    distance: '50px',
    reset: true
}); 