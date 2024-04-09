    MutationObserver = window.MutationObserver || window.WebKitMutationObserver;
var observer = new MutationObserver(function(mutations, observer) {
    mutations?.forEach(function(m){
    	if(m.target.id?.includes("kaprila")) {
       	 m.target.remove()
         console.log(m)
        }
    })
});
observer.observe(document, {
  subtree: true,
  childList: true
});
