onmessage=function(e){
    let sum=0;
    let from=parseInt(e.data.from);
    let to=parseInt(e.data.to);
    for(let i=from; i<=to;i++)
        sum+=i;
    this.postMessage(sum); // 곱하기 할때는 let sum을 지우고 postmessage ()에 from*to를 넣으면됨
}