import { CompleteLoading } from './modules/load.js';

// Removed the extra CompleteLoading() call from here
// and removed the extra '}' from the end of the file.

setTimeout(function(){
    CompleteLoading(); // calling the imported function from the modules folder
}, 3000);