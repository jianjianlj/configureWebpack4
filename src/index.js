document.addEventListener('click',()=>{
    import(/* webpackPrefetch: true */'./common.js').then(({default: func}) => {
        func();
    })
})
