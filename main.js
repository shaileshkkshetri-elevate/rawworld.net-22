var lb=document.getElementById('lb');
document.getElementById('gal').addEventListener('click',function(e){if(e.target.tagName==='IMG'){lb.firstElementChild.src=e.target.src;lb.classList.add('on')}});
lb.addEventListener('click',function(){lb.classList.remove('on')});
document.addEventListener('keydown',function(e){if(e.key==='Escape')lb.classList.remove('on')});
document.getElementById('f').addEventListener('submit',function(e){e.preventDefault();var d=new FormData(e.target);
var b='Name: '+d.get('name')+'\nCountry: '+d.get('country')+'\nInterest: '+d.get('type')+'\n\n'+d.get('msg');
location.href='mailto:hello@rawworld.net?subject='+encodeURIComponent('RAW inquiry – '+d.get('type'))+'&body='+encodeURIComponent(b)});
