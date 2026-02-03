window.InitUserScripts = function()
{
var player = GetPlayer();
var object = player.object;
var once = player.once;
var addToTimeline = player.addToTimeline;
var setVar = player.SetVar;
var getVar = player.GetVar;
var update = player.update;
var pointerX = player.pointerX;
var pointerY = player.pointerY;
var showPointer = player.showPointer;
var hidePointer = player.hidePointer;
var slideWidth = player.slideWidth;
var slideHeight = player.slideHeight;
window.Script1 = function()
{
  DS.appState.onToggleVolume(0);
}

window.Script2 = function()
{
  DS.appState.onToggleVolume(1);
}

window.Script3 = function()
{
  DS.appState.onToggleVolume(0);
}

window.Script4 = function()
{
  DS.appState.onToggleVolume(1);
}

};
