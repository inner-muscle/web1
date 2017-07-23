var sidthmubs = document.querySelectorAll('.Sid');
for(idx in sidthmubs)
{
  sidthmubs[idx].onclick = function()
  {
    document.getElementById("changesid").src = 'img/' + this.dataset.image + '.jpg';
  }
}

var joeythmubs = document.querySelectorAll('.Joey');
for(idx in joeythmubs)
{
  joeythmubs[idx].onclick = function()
  {
    document.getElementById("changejoey").src = 'img/' + this.dataset.image + '.jpg';
  }
}

var paulthmubs = document.querySelectorAll('.Paul');
for(idx in paulthmubs)
{
  paulthmubs[idx].onclick = function()
  {
    document.getElementById("changepaul").src = 'img/' + this.dataset.image + '.jpg';
  }
}

var christhmubs = document.querySelectorAll('.Chris');
for(idx in christhmubs)
{
  christhmubs[idx].onclick = function()
  {
    document.getElementById("changechris").src = 'img/' + this.dataset.image + '.jpg';
  }
}

var jimithmubs = document.querySelectorAll('.Jim');
for(idx in jimthmubs)
{
  jimthmubs[idx].onclick = function()
  {
    document.getElementById("changejim").src = 'img/' + this.dataset.image + '.jpg';
  }
}

var craigthmubs = document.querySelectorAll('.Craig');
for(idx in craigthmubs)
{
  craigthmubs[idx].onclick = function()
  {
    document.getElementById("changecraig").src = 'img/' + this.dataset.image + '.jpg';
  }
}

var shawnthmubs = document.querySelectorAll('.Shawn');
for(idx in shawnthmubs)
{
  shawnthmubs[idx].onclick = function()
  {
    document.getElementById("changeshwan").src = 'img/' + this.dataset.image + '.jpg';
  }
}

var mickthmubs = document.querySelectorAll('.Mick');
for(idx in mickthmubs)
{
  mickthmubs[idx].onclick = function()
  {
    document.getElementById("changemick").src = 'img/' + this.dataset.image + '.jpg';
  }
}

var coreythmubs = document.querySelectorAll('.Corey');
for(idx in coreythmubs)
{
  coreythmubs[idx].onclick = function()
  {
    document.getElementById("changecorey").src = 'img/' + this.dataset.image + '.jpg';
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
