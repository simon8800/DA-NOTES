# PEAK FINDING

[Notes from MIT 6.006](https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-006-introduction-to-algorithms-fall-2011/lecture-videos/MIT6_006F11_lec01.pdf)

[Youtube](https://youtu.be/HtSuA80QTyo)

## 1-D VERSION

> Note: I'm going to avoid the use of 0 indexing. For example: in the array `[j,k,l]` element `j` is in position 1.

> Sometimes I get lazy. If I write **iff**, it means **if and only if**.

Given `[a, b, c, d, e, f, g, h, i]` where `a`-`i` are numbers.

- Position 2 `b` is a peak if and only if `b>=a` and `b>=c` (`b` is not smaller than its neighbors).

- The last position `i` is a peak **if and only if** `i` >= `h`.

- The first position `a` is a peak **if and only if** `a` >= `b`.

These three cases tell us that there will always be at least one peak.

To convince yourself look at the following examples:

```
[1, 2, 3, 4, 5, 6] The peak here is 6.

[30, 25, 20, 15, 10, 5] The peak here is 30.

[10, 10, 10, 10, 10, 10] All of the elements are peaks.

[1, 2, 3, 4, 4, 5, 6, 7, 8] The peak here the 4 at the 5th position.
```

## PROBLEM: FIND A PEAK

Straight forward algorithm: start from the left and check every element in the array and compare it with its preceding and succeeding neighbors.

The worst case scenario is that we have to check every single element just to find out that the **only** peak is at the last position. O(n)

The best case scenario is that **a** peak exists at the first position.

Since we're always concerned with the worst case scenario, this algorithm doesn't look so great.

## DIVIDE AND CONQUER (RECURSIVE)

What we can do is start at the middle (position: n/2) of the array and look for a peak. There are three things that can happen. Assume there are *n* elements. We will call the element at position *n/2*: `e`. Here are the possible cases:

1. `e` is less than its preceeding element.
2. `e` is less than its succeeding element.
3. `e` is **not** less than the preceeding and succeeding element.

If case 1, we apply the same strategy to the left side of the array starting at position *1* to position *n/2 - 1*.

Else if case 2, we apply the strategy to the right side of the array starting a position *n/2 + 1* to position *n*.

Else case 3, we have found a peak.

The worst case scenario here is O(logn) since we are cutting the array down by half each time. \*If you know [binary search](./binary-search.py) then you know 🤘.

## 2-D VERSION

We have a matrix with *n* rows and *m* columns

Example:

```
|  c      |
|b a d    |
|  e      |
|         |
```

`a` is a peak **if and only if** `a >= b`, `a >= c`, `a >= d`, `a >= e`.

We will use something called the Greedy Ascent Algorithm where we start somewhere on the matrix (you choose how this works) and have a rule where we move in the direction of the bigger number.

- Θ(nm) complexity (idk why. will find out eventually and explain here. if you understand why then please teach me.)
- Θ(n²) if m = n

```
|           |
|14 13 12   |
|15  9 11 17|
|16 17 19 20|
```

If we started on 12 we'd move to 13 → 14 → 15 → 16 → 17 → 19 → 20 and we will have found our peak.

## ATTEMPT 1 TO SOLVE 2-D VERSION (NO BUENO)

1. Pick middle column *j = m/2*
2. Find a 1-D peak at (i, j)
3. Use (i, j) as a start to find a 1-D peak on row i.

This approach will not work since a 2-D peak may not exist on row i. For example, look at the matrix from above again. If you start with the column containing 12, we can say that 12 is a 1-D peak of that column. Then we look on that row containing 12 and find 14 as a 1-D peak of that row. But 14 is not a 2-D peak.

## ATTEMPT 2 TO SOLVE 2-D PROBLEM (WORKS)

1. Pick a middle column *j = m/2*
2. Find global max on column j at (i, j).
3. Compare (i, j-1), (i, j), (i, j+1)
4. Pick left columns if (i, j-1) > (i, j) and similarly for the right. (go to step 6 if either of these are the case.)
5. If (i, j) >= (i, j-1), (i, j+1) → (i, j) is a 2-D peak. (if this is the case, we're done here.)
6. Solve the new problem with the new columns.

- Θ(nlogm) complexity.

