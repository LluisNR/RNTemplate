export function* handlerChangeColor() {
    while(true){
        yield 'red';
        yield 'yellow';
        yield 'green';
        yield 'black';
        yield 'blue';
    }
  }