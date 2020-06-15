

  //Another Example for Python cap******************//


  //case1 :cannot pause
  function normalFunc() {
    console.log('I')
    console.log('cannot')
    console.log('be')
    console.log('stopped.')
}

normalFunc();

//pause the function
function * generatorFunction() { 
    console.log('This will be executed first.');

    yield 'JS - Powerful ';   

    console.log('printed after the pause');

    yield 'Language.';
}


const generatorObject = generatorFunction(); 

console.log(generatorObject.next().value); 
console.log(generatorObject.next().value); 
console.log(generatorObject.next().value); 