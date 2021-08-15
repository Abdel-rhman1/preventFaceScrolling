

let feed = this.document.querySelector('[role="feed"]');
let postClass = document.querySelector('[data-pagelet="Stories"]');
let complementary = document.querySelector('[data-pagelet="RightRail"]');
let groupFeed = document.querySelector('[data-pagelet="GroupFeed"]');
window.addEventListener("load" , function(){
    // alert("Every Thing Is Done");
    
    
    //  let postClass = this.document.querySelector(".rq0escxv")
    // let postArrow = this.document.getElementsByClassName("qwnj5y1i");
    // let postsContainer
      postClass.remove();
      complementary.remove();
      console.log(complementary);
     
    
});


document.addEventListener("scroll" , function(){
  console.log(feed.childNodes.length);

if(feed !=undefined){
  if(feed.childNodes.length  > 20){
    feed.remove();
    
  }
}
  if(groupFeed != undefined){
    if(groupFeed.childNodes.length  > 20)
        groupFeed.remove();
}
});


window.addEventListener('popstate', function(event){
  // alert("Using Back Arrow");
});