# Binary search cuts the list down by half
# after each guess
# Big O: log(n)

def binary_search(list, item):
  # first item's index
  low = 0
  # last item's index
  high = len(list)-1

  while low <= high:
    # gets the middle index (floored if even number of items)
    mid = (low + high) // 2 
    guess = list[mid]
    if guess == item:
      return mid
    elif guess > item:
      high = mid - 1
    else:
      low = mid + 1
    print(low, mid, high)
  return None

my_list = [1, 3, 5, 7, 9, 10, 11]

print(binary_search(my_list, 3))
print(binary_search(my_list, -1))
