import {combineReducers} from 'redux';

const songsReducer = () => {
    return [
        {title: 'No scrubs', duration: '4:05'},
        {title: 'No scrubs', duration: '4:05'},
        {title: 'No scrubs', duration: '4:05'},
        {title: 'No scrubs', duration: '4:05'},
        {title: 'No scrubs', duration: '4:05'}
    ]
};

const selectedSongReducer = (selectedSong=null, action) =>{
  if(action.type === 'SONG_SELECTED')  {
      return action.payload;
  }
  return selectedSong;
};

export default combineReducers({
   songs: songsReducer,
   selectedSong: selectedSongReducer
});