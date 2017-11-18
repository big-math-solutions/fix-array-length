# fix-array-length
list or array with fix length, the loop is iterated to maintain the length of array.
# install 

```bash

npm install --save fix-array-length
```

#usage

```js
list = FixArrayLength(2)
list.push(0);
list.push(1);
list.push(2);
assert(list._array.length === 2);
assert.deepStrictEqual(list._array, [ 1, 2 ]);

list.unshift(2);
list.unshift(4);
list.unshift(5);
assert(list._array.length === 2);
assert.deepStrictEqual(list._array, [ 5, 4 ]);
```
# push(item)

remove elements from init to maintain the length of array.

# unshift(item)

remove elements from end to maintain the length of array.

# pull()
alias to pop

# from(array)
build the list from array given

# set(index, item)

set the value fo list in index with item given

# get(index)

get the item in index given

# map()
# filter 
alias to native one
# forEach 
alias to native one
# pop
alias to native one 
# shift
alias to native one
# slice
alias to native one
# toString
alias to native one
# sort
alias to native one
# join
alias to native one
# find
alias to native one
# findIndex
alias to native one
# indexOf
alias to native one
# lastIndexOf
alias to native one
# reduce
alias to native one
# reduceRight
alias to native one
# reverse
alias to native one
# valueOf
alias to native one



