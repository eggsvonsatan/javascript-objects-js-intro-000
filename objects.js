<<<<<<< HEAD
var playlist = {'Phil Ochs' : 'closer'
};
function updatePlaylist(playlist, artistName , songTitle) {
  return Object.assign({}, playlist, {[artistName]: 'songTitle'});
}
function removeFromPlaylist(playlist, artistName){
  var newPlaylist =  Object.assign({},playlist);
  delete playlist[artistName];
  return newPlaylist}
=======
var playlist = {
  nine inch nails: closer
};
function updatePlaylist(playlist, nine inch nails, closer) {
  return Object.assign({}, playlist, {[nine inch nails]: closer});
}
>>>>>>> d6b7ca170a32b05b7f794dec5810d4e32e8db5f0
