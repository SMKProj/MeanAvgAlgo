class MovingAverage {
  constructor(N) 
  {
    // ...
   this.N = N;
   this.array = [];
   for (var i = 0 ; i< this.N; i++)
   {
       this.array.push(0);
   }
    this.flag = 0;
    this.index = 0;
  }
  
  add(number) 
  {
    let sum =0;
    let i;
    let count = 0;
    let flag;
    let avg;
    this.array.shift();
    this.array.push(number);
    console.log(this.array);
    ///////the moving average array is formed
    if(number == 0)
    {
      if(this.N == 1)
      {
          count = count + 1
      }
      else if (this.N > 1)
      {
        if (this.flag == 0)
        {  
           this.index = 1;
           this.flag = 1;
           count = count + this.index;
        }
        else if (this.flag == 1)
        {
          this.index = this.index + 1;
          count = count + this.index;
         }
      }
    }
    else if (number != 0)
    { 
      if (this.N > 1)
      {
        if(this.flag == 1)
          {
            count = count + this.index;
          }
      }  
    }
    for (i=0;i<this.array.length ; i++)
    {
      sum+=this.array[i];
      if (this.array[i] !=0)
      {
          count = count + 1;
      }
      
    }
    console.log(count);
    console.log(sum);
    avg = sum / count;
    return avg;
  }   
}

movingAverage = new MovingAverage(3);
movingAverage.add(3);
movingAverage.add(4);
movingAverage.add(5);

movingAverage2 = new MovingAverage(20);
movingAverage2.add(3);
movingAverage2.add(1);
movingAverage2.add(0);
movingAverage2.add(5);

movingAverage3 = new MovingAverage(1);
movingAverage3.add(2);
movingAverage3.add(2);
movingAverage3.add(0);


