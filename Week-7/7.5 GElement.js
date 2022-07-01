function printGreaterElement(arr, n)
      {
        let next, i, j;
        for (i = 0; i < n; i++)
        {
          next = -1;
          for (j = i + 1; j < n; j++)
          {
            if (arr[i] < arr[j])
            {
              next = arr[j];
              break;
            }
          }
          console.log(arr[i] + " -- " + next);
          console.log("<br>");
        }
      }
 
      // Driver Code
      let arr = [1, 3, 2, 4];
      let n = arr.length;
      printGreaterElement(arr, n);
       
   