var thmubs = document.querySelectorAll('.thmub');
for(idx in Sidthmubs)
{
  thmubs[idx].onclick = function()
  {
    document.getElementById("changesid).src = 'img/' + this.dataset.image + '.jpg';
  }
}

function getFileName()
{
  return window.location.href.split('/').pop();
}

var filename = getFileName();
var opt;
if(filename === 'sid.html')
{
  opt = document.querySelector('option[value="sid.html"]');
}
else if(filename === 'joey.html')
{
  opt = document.querySelector('option[value="joey.html"]');
}
else if(filename === 'paul.html')
{
  opt = document.querySelector('option[value="paul.html"]');
}
else if(filename === 'chris.html')
{
  opt = document.querySelector('option[value="chris.html"]');
}
else if(filename === 'jim.html')
{
  opt = document.querySelector('option[value="jim.html"]');
}
else if(filename === 'craig.html')
{
  opt = document.querySelector('option[value="craig.html"]');
}
else if(filename === 'shawn.html')
{
  opt = document.querySelector('option[value="shawn.html"]');
}
else if(filename === 'mick.html')
{
  opt = document.querySelector('option[value="mickhtml"]');
}
else if(filename === 'corey.html')
{
  opt = document.querySelector('option[value="corey.html"]');
}
else
{
  opt = document.querySelector('option[value="index.html"]');
}
opt.selected = true;

document.getElementById('form').select.onchange = function()
{
  location.href = document.getElementById('form').select.value;
}
