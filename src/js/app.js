
import {GameSavingLoader} from './basic';


// ### Task 9.1 ###

let GameSavig = {};

GameSavingLoader.load()
  .then((saving) => {
    GameSavig = saving;
    console.log('Тип полученных данных : ' + typeof(GameSavig));
    alert(GameSavig);
  })
  .catch((error) => alert(error));

  
 
 

// ### Task 9.2 ###




console.log();
console.log('end of execution!');

