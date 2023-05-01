### Question 1
The bug was that num1 and num2 were passed as strings, so when result was defined, it converted the data type of result as a string and concatenated the num1 and num2 strings instead of adding their number values.

### Question 2
See fix.png. I added parseInt function to both num1 and num2 on line 11.