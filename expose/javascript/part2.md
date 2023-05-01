# Expose Part 2

### Question 1
It will print 3. The length of the prices array is 3, so i iterates from 0,1,2 over the prices array. Then i iterates again to 3 and this is equal to the length of prices array, so the for loop terminates.

### Question 2
It will print 150 because discountedPrice saves the last discounted price in the prices array, so 300*0.5 = 150.

### Question 3
It will print 150 because finalPrice saves the last final price in the prices array, so 300*0.5 = 150, 150*100/100 = 150.

### Question 4
It will return an array like this: [50, 100, 150]. This function essentially multiplies each element of the original array by the discount value and rounds it.

### Question 5
It will return an error, since at line 12, the variable i defined by let declaration is out of scope (the for loop), so it doesn't exist at line 12.

### Question 6
It will return an error, since at line 13, the variable discountedPrice defined by let declaration is out of scope (the for loop), so it doesn't exist at line 13.

### Question 7
It will print 150 because line 14 is in scope of finalPrice (the function block), so it will print the intended value.

### Question 8
It will return an array like this: [50, 100, 150]. This function still works as intended with let declarations since the variable discounted is returned in the same block.

### Question 9
It will return an error, same explanation to Question 5: at line 11, the variable i defined by let declaration is out of scope (the for loop), so it doesn't exist at line 11.

### Question 10
It will return 3 since there are 3 elements in the prices array and it does not return an error because line 12 is in the same scope as the const declaration of length (the function block).

### Question 11
It will return an array like this: [50, 100, 150]. This function still works as intended with const declarations since there is no reassigning of variables occurring in the modified function.

### Question 12
a) student.name
b) student["Grad Year"]
c) student.greeting()
d) student["Favorite Teacher"].name
e) student.courseLoad[0]

### Question 13
a) the integer 32 since integers map to their string representation
b) the integer 1 since subtraction maps the string into an integer
c) the integer 3 since null is equivalent to the integer 0 in JS
d) the string '3null' since null is changed to a string for string concatenation
e) the integer 4 since true is equivalent to the integer 1
f) the integer 0 since false and null are equivalent to the integer 0
g) the string '3undefined' since undefined is changed to a string for string concatenation
h) NaN since subtraction only works for two values that can be converted to integers

### Question 14
a) true, since the string '2' is converted to its integer equivalent, 2>1
b) false, both strings are converted to its integer equivalents, 2<12
c) true, since the string '2' is converted to its integer equivalent, 2=2
d) false, since with the === operator, comparing different types always returns false
e) false, since true has integer equivalent to 1, 1 does not equal 2
f) true, Boolean(2) returns the boolean true, true === true

### Question 15
== checks equality with type conversion, === checks equality without type conversion (stricter equality)

### Question 17
The result will be [2,4,6]. A new array is created in the method modifyArray. Then it iterates through the input array, takes each element, and applies the input method to each element, which in this case is multiplying each number by 2. The input array is [1,2,3], so the new array would output [2,4,6].


### Question 19
1
4
3
2