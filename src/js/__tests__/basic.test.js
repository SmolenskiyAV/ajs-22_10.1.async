import {GameSavingLoader} from '../basic';

// проверка штатной работы метода GameSavingLoader.load()
test('shoud check class GameSavingLoader.load()', async () => {
  const result = await GameSavingLoader.load()
  .then((saving) => {
    return saving;
  });

  expect(result).toBe('{"id":9,"created":1546300800,"userInfo":{"id":1,name":"Hitman","level":10,"points":2000}}')
});