# MODELS OF COMPUTATION

[Notes from MIT 6.006](https://youtu.be/Zc54gFhdpLA)

- What's an algorithm?
- What is time?
- Random access machine
- Pointer machine
- Python model

## WHAT'S AN ALGORITHM?

- Computational procedure for solving a problem
- Input → algo → output

Analog between computers and math:

|Program|Algorithm|
|-------|---------|
|Programming language|Pseudocode/Structured English|
|Computer|Model of Computation|

## MODEL OF COMPUTATION

- Specifies what operations an algorithm is allowed
- Cost (time) of each operation

### RANDOM ACCESS MACHINE (RAM)

- Random Access Memory (also RAM) modeled by a big array
- In O(1) time, an algorithm can
  - load O(1) words
    - word: w bits; w >= log(size of memory)
  - do O(1) computations
  - store O(1) words
- O(1) registers

### POINTER MACHINE

- Dynamically allocated objects
- Object has a O(1) of fields
- Field = **word** (e.g. int) || **pointer**
- Pointer is something points to another object or has special value `null`, `nil`, or `None`

### PYTHON MODEL

1. "list" = array
    - `L[i] = L[i] + 5`: O(1) time
    - `L.append(x)`
      - table doubling
      - O(1) time
    - `L = L1 + L2`: O(1 + L1 + L2); 1 comes from just building a list even if it's empty
    - `L.sort()`: O(nlogn) * (time to compare)
      - Python uses a comparison sort
2. object with O(1) attributes
    - `x = x.next`: O(1) time
3. dictionary: `D[key] = val`: O(1) with high probability
4. long (integers): `x+y`: O(|x| + |y|), `x*y`: O((|x|+|y|)**log₂3)
5. heap queue

