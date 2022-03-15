
import {GameSavingLoader} from './basic';


// ### Task 10.1 ###

let GameSavig = {};

GameSavingLoader.load()
  .then((saving) => {
    GameSavig = saving;

    console.log('Тип полученных данных : ' + typeof(GameSavig));
    console.log('Размер полученных данных : ' + Object.keys(GameSavig).length);
    
    alert('userInfo:'+ '\n' + '  name: ' + GameSavig.userInfo.name);
  })
  .catch((error) => alert(error));

  
 
 
