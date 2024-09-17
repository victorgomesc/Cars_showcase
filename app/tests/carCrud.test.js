
const { createCar, getCar, updateCar, deleteCar, clearCars } = require('../carCrud');

beforeEach(() => {
  clearCars(); 
});

test('deve criar um carro', () => {
  const car = { id: 1, model: 'Toyota', year: 2022 };
  const createdCar = createCar(car);

  expect(createdCar).toEqual(car);
});

test('deve retornar um carro pelo ID', () => {
  const car = { id: 2, model: 'Honda', year: 2021 };
  createCar(car);

  const foundCar = getCar(2);
  expect(foundCar).toEqual(car);
});

test('deve atualizar um carro', () => {
  const car = { id: 3, model: 'Ford', year: 2020 };
  createCar(car);

  const updatedCar = updateCar(3, { model: 'Ford Mustang', year: 2021 });
  expect(updatedCar.model).toBe('Ford Mustang');
  expect(updatedCar.year).toBe(2021);
});

test('deve retornar null se tentar atualizar um carro inexistente', () => {
  const result = updateCar(999, { model: 'Chevrolet' });
  expect(result).toBeNull();
});

test('deve deletar um carro', () => {
  const car = { id: 4, model: 'Nissan', year: 2019 };
  createCar(car);

  const deletedCar = deleteCar(4);
  expect(deletedCar).toEqual(car);
  expect(getCar(4)).toBeUndefined();
});

test('deve retornar null se tentar deletar um carro inexistente', () => {
  const result = deleteCar(999);
  expect(result).toBeNull();
});
