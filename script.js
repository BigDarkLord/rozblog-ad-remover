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

const iframeObserver = new MutationObserver(() => {
  const iframe = document.querySelector('iframe[src*="rozblog.com"]');

  if (iframe) {
    iframe.target.remove();
    observer.disconnect();
  }
});

iframeObserver.observe(document.documentElement, {
  childList: true,
  subtree: true,
});
