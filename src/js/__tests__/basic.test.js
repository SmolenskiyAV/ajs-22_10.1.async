import {GameSavingLoader} from '../basic';

// проверка штатной работы метода GameSavingLoader.load()
test('shoud check class GameSavingLoader.load()', async () => {
  const result = await GameSavingLoader.load()
  .then((saving) => {
    return saving;
  });

  expect(result).toEqual(
    {"created": 1546300800, 
    "id": 9, 
    "userInfo": {
                  "id": 1, 
                  "level": 10, 
                  "name": "Hitman", 
                  "points": 2000
                }
    }
  )
});