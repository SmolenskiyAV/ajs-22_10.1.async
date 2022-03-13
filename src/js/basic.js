// ### Task 10.1 ###

import json from './parser';
import read from './reader';

export class GameSavingLoader {

  static load() {   // метод асинхронной загрузки данных, с последующей асинхронной их обработкой (цепочка ДВУХ промисов)
    
    return new Promise((resolve, reject) => {    // объект "обещание" для загрузки данных

      let loadData = read();                 // загрузка данных
    
      if (loadData === undefined) {    // если данные не загружены 
        reject(new Error ('Ошибка. Файл не загружен!'))
      }
      else {
        resolve(loadData);   // если данные загружены - возвращаем эти данные
      };
    
    }).then(  // удачная загрузка
        function(result) {
          console.log('Данные успешно загружены.'); 

          return  new Promise ((resolve, reject) => {    // объект "обещание" для парсинга данных

            let parcedData = json(result);    // парсинг данных

            if (parcedData === undefined) {
            
            reject(new Error ('Ошибка. Файл не обработан!'))
            }
            else resolve(parcedData);  // если данные распарсились - возвращаем эти данные
        
          });
    
        }
      ).then(  // удачный парсинг
          function(result) {
            console.log('данные успешно обработаны.');
            
            return result;    // возврат распарсенных данных
        
          }
        ).catch(   // ошибка! (данные либо не загружены, либо не распарсились)
          function(err) {
          console.log(err.message);
          return err;     // возврат ошибки
          }
        );

        

  }
};


// ### Task 10.2 ###

