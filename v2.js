let nums = [1, 4, 5, 2, 0, 1,2,4]; 

function clearsort (nums)
{
	let clearnum = [];
  
  nums.forEach((item) => {
  
  if(!clearnum.includes(item))
  {
  	clearnum.push(item);
  }
  
  })
  return clearnum.sort()
};


let resultado = clearsort(nums);

console.log(resultado);
