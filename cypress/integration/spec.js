describe('page', () => {
	
	var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
   var pathLength = 1000;
   
   var name1 = "";
   var name2 = "";
   
   var fn = () => {
	   var result = "";
	   for(var i = 0; i < pathLength; i++) {
		   result += characters.charAt(Math.floor(Math.random() * characters.length));
	   }
	   return result;
   }
   
  it(fn(), () => { asert(false).toBe(true); })
  
  it(fn(), () => { asert(false).toBe(true); })
})