# NOTES ON PYTHON

## USE HELP FOR EVERYTHING!

`help` is used to read the docstring on a method/function/object. Super helpful in understanding what the method/function does.

Example:

```python
# built-in function
help(sum)

# checks string methods
help(str)

# checks list methods
help(list)

# checks string method split
help(str.split)
```

## IMPORT | [KAGGLE NOTES](https://www.kaggle.com/colinmorris/working-with-external-libraries)

Python actually comes with a bunch of "standard libraries" that you can import. A standard library can be found wherever you run Python.

Example:

```python
import math

math.pi #=> 3.141592653589793
```

Note: `dir()` can be used to list the module attributes, class attributes, and more. If called without an argument, it will return the names of the current scope. 

So if we wanted to check out what math has to offer, we can do `dir(math)`.

### OTHER IMPORT SYNTAX

We can import libraries with an alias if we wanted to:

```python
import math as mt
mt.pi #=> 3.141592653589793
```

This is essentially doing:

```python
import math
mt = math
```

We can also just refer all the variables in that library as themselves by doing this:

```python
from math import *
print(pi, log(32,2)) #=> 3.141592653589793 5.0
```

However, if you're importing different libraries that share similar variable names, unexpected results will happen, so it is not encouraged to do so. 

Instead, we can import specific things from the library:

```python
from math import log, pi
from numpy import asarray
```

### SUBMODULES

Modules can have variables referring to other modules:

```python
import numpy
print("numpy.random is a", type(numpy.random))
print("it contains names such as...",
      dir(numpy.random)[-15:]
     )
#
```

Output:

```shell
numpy.random is a <class 'module'>
it contains names such as... ['set_state', 'shuffle', 'standard_cauchy', 'standard_exponential', 'standard_gamma', 'standard_normal', 'standard_t', 'test', 'triangular', 'uniform', 'vonmises', 'wald', 'warnings', 'weibull', 'zipf']
```

So if we wanted to call a submodule from `numpy.random`, we'd need two dots.

```python
# Roll 10 dice
rolls = numpy.random.randint(low=1, high=6, size=10)
rolls #=> array([3, 4, 4, 2, 5, 3, 5, 1, 2, 3])
```

### OPERATOR OVERLOADING

What do you think the following will return?

```python
[1,2,3,4,5] + 10
```

It's gonna be an error! You can't add a list and integer.

But what about this?

```python
rolls + 10
array([11, 12, 13, 14, 15])
```

What the? Why?

That's because when you define a new type, you can define what the `+` operator does. The creator of `numpy` decided that an array + integer means: add that integer to every element in the array.

## THREE USEFUL TOOLS FOR UNDERSTANDING STRANGE OBJECTS

1. `type()` (what is this thing?)

```python
type(123) #=> <class 'int'>
```

2. `dir()` (what can I do with this thing?)

```python
dir(123)
#=> ['__abs__', '__add__', '__and__', '__bool__', '__ceil__', '__class__', '__delattr__', '__dir__', '__divmod__', '__doc__', '__eq__', '__float__', '__floor__', '__floordiv__', '__format__', '__ge__', '__getattribute__', '__getnewargs__', '__gt__', '__hash__', '__index__', '__init__', '__init_subclass__', '__int__', '__invert__', '__le__', '__lshift__', '__lt__', '__mod__', '__mul__', '__ne__', '__neg__', '__new__', '__or__', '__pos__', '__pow__', '__radd__', '__rand__', '__rdivmod__', '__reduce__', '__reduce_ex__', '__repr__', '__rfloordiv__', '__rlshift__', '__rmod__', '__rmul__', '__ror__', '__round__', '__rpow__', '__rrshift__', '__rshift__', '__rsub__', '__rtruediv__', '__rxor__', '__setattr__', '__sizeof__', '__str__', '__sub__', '__subclasshook__', '__truediv__', '__trunc__', '__xor__', 'bit_length', 'conjugate', 'denominator', 'from_bytes', 'imag', 'numerator', 'real', 'to_bytes']
```

3. `help()` (tell me more)

```python
help(int.real) 

#=> Help on getset descriptor builtins.int.real:
#   real
#   the real part of a complex number
```