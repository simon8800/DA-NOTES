# PEAK FINDING

[Notes from MIT 6.006](https://youtu.be/HtSuA80QTyo)

## 1-D VERSION

> Note: I'm going to avoid the use of 0 indexing. For example: in the array `[j,k,l]` element `j` is in position 1.

Given `[a, b, c, d, e, f, g, h, i]` where `a`-`i` are numbers.

- Position 2 `b` is a peak if and only if `b>=a` and `b>=c` (`b` is not smaller than its neighbors).

- The last position `i` is a peak if and only if `i` >= `h`.

- The first position `a` is a peak if and only if `a` >= `b`.

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

## DIVIDE AND CONQUER

What we can do is start at the middle (position: n/2) of the array and look for a peak. There are three things that can happen. Assume there are *n* elements. We will call the element at position *n/2*: `e`. Here are the possible cases:

1. `e` is less than its preceeding element.
2. `e` is less than its succeeding element.
3. `e` is **not** less than the preceeding and succeeding element.

If case 1, we apply the same strategy to the left side of the array starting at position *1* to position *n/2 - 1*.

Else if case 2, we apply the strategy to the right side of the array starting a position *n/2 + 1* to position *n*.

Else case 3, we have found a peak.

The worst case scenario here is O(logn) since we are cutting the array down by half each time. \*If you know binary search then you know 🤘.

