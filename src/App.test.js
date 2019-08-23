import {add} from './App';

describe('Prueba 1', () => {
 
    it('passing test', () => {
      expect(true).toBeTruthy();
    })
   
    it('failing test', () => {
      expect(false).toBeFalsy();
    })
    
  }) 

describe ('suma',()=>{
  
    it ("Suma 1 y 2", ()=>{    
      const value  = add (1,2);
      expect(value).toBe(3);
    })
    it ("Suma 3 y 2", ()=>{    
      const value  = add (3,2);
      expect(value).toBe(5);
    })
    it ("Suma 3 y 4", ()=>{    
      const value  = add (3,4);
      expect(value).toBe(7);
    })  
  })
  