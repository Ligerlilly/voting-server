import {expect} from 'chai';
import {List, Map} from 'immutable';


describe('immutablility', () => {
  describe('a number', () => {
    function increment(currentState) {
      return currentState + 1;
    }
    it('is immutable', () => {
      let state = 42;
      let nextState = increment(state);
      expect(nextState).to.eq(43);
      expect(state).to.eq(42);
    });
  });

  describe('a list', () => {
    function addMovie(currentState, movie) {
      return currentState.push(movie);
    }
    it('is immutable', () => {
      let state = List.of('Trainspotting', '28 Days Later');
      let nextState = addMovie(state, 'Sunshine');

      expect(nextState).to.eq(List.of(
        'Trainspotting',
        '28 Days Later',
        'Sunshine'
      ));
      expect(state).to.eq(List.of(
         'Trainspotting',
        '28 Days Later'
      ));
    });
  });

  describe('a tree', () => {
    function addMovie(currentState, movie) {
      return currentState.update('movies', movies => movies.push(movie));
    }

    it('is immutable', () => {
      let state = Map({
        movies: List.of('Trainspotting', '28 Days Later')
      });
      let nextState = addMovie(state, "Sunshine");

      expect(nextState).to.eq(Map({
        movies: List.of(
          'Trainspotting',
           '28 Days Later',
          'Sunshine'
        )
      }));
      expect(state).to.eq(Map({
        movies: List.of(
          'Trainspotting',
          '28 Days Later'
        )
      }));
    });
  });
});
