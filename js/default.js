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

if(filename === 'joey.html')
{
  opt = document.querySelector('option[value="joey.html"]');
}

if(filename === 'paul.html')
{
  opt = document.querySelector('option[value="paul.html"]');
}

if(filename === 'chris.html')
{
  opt = document.querySelector('option[value="chris.html"]');
}

if(filename === 'jim.html')
{
  opt = document.querySelector('option[value="jim.html"]');
}

if(filename === 'craig.html')
{
  opt = document.querySelector('option[value="craig.html"]');
}

if(filename === 'shawn.html')
{
  opt = document.querySelector('option[value="shawn.html"]');
}

if(filename === 'mick.html')
{
  opt = document.querySelector('option[value="mickhtml"]');
}

if(filename === 'corey.html')
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
