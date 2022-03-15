// ### Task 10.1 ###

import json from './parser';
import read from './reader';

class GameSaving {    // шаблон объекта сохранения

  constructor(obj) {  
    
    this.created = obj.created, 
    this.id = obj.id, 
    this.userInfo = obj.userInfo
    
  };

};


export class GameSavingLoader {

  static load() {   // метод асинхронной загрузки данных, с последующей асинхронной их обработкой (цепочка ДВУХ промисов)
            
    let loadData = read();    // объект "обещание" для загрузки данных
    
    try {
          const parcedData = loadData.then(   // асинхронный запуск загрузки данных (с вложенным внутрь "обещанием" парсинга загруженных данных) - цепочка "промисов"!
            
            function(loadingResult) {
              
             if (String(loadingResult) !== '[object ArrayBuffer]') throw new Error('Ошибка загрузки данных!');    // если тип загруженного объекта не 'ArrayBuffer'
              
              return (
                
                json(loadingResult).then(   // передача в асинхронную функцию парсинга загруженных данных

                  function (parcingResult) {
                    
                    if ((parcingResult.length === 0) || (parcingResult.length === NaN)) throw new Error('Ошибка парсинга данных!'); // если парсинг загруженного объекта не выполнен
                    
                    return new GameSaving(JSON.parse(parcingResult))    // возврат готового "распарсеного" результата в формате  GameSaving-объект
                  }
                
                )

              );
            
            }
          )
    
          return parcedData;

    } catch(err) {

        alert(err.message)    // обработка возникающих ошибок

      };  
    
  };

};


