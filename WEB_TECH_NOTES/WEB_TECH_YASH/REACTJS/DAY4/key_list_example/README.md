# List & Keys :-

## List:- 

#### 1. List in React are same as the list in HTML.
#### 2. we can use lists to show multiple items in structured manner.
#### 3. We can use lists for displaying menu and navigation bar etc.
#### 4. To traverse a list , we can use map method of an array.

    // Basic HTML/JS list
    <ul>
      <li>item 1</li>
      <li>item 2</li>
      <li>item 3</li>
    </ul>


    // React List // Without key
    const items = [1,2,3,4,5]
    const listItems = items.map((item)=>{<li>{item}</li>}) return <ul>{listItems}</ul>

============================================================================

    If we are not using key in list then it will throw an error in react.
    It will show in the browser 
    Warning  :- When we run this React list code , we will be given a warning that 'Each child in a list should have a  unique 'Key' prop.

    Without a key, if the list changes (add, delete, update), React cannot optimize and may re-render all items unnecessarily. That's why key is needed in real-world apps.

<br/><br/><br/>

## Key :- 

#### 1.  A 'Key' is  a special string attribute you need to include when creating lists of elements.
#### 2.  Keys help React identify which items have changed , added  or deleted .
#### 3. keys should be a String .



# If we are adding the element and key is index like start from 0,1,2,3,4,5

##### ✅ key={index}
##### ✅ Just number (like 0, 1, 2)
##### ✅ If items are added/removed at beginning, indexes shift, causing wrong re-rendering.
##### ✅ Bad when list changes from start
##### ✅ No warnings usually, but React advises not to use index if list changes dynamically.

    Why is index key sometimes bad?

    Index | Value
    0	  |   1 yash
    1     |   2  raja
    2	  |   3  rani

    Now if you add new item at beginning,
    New list:

    Index | Value
    0     | 7   rahul 
    1     | 1   yash
    2     | 2   raja
    3     | 3   rani

    Now indexes shifted!
    React gets confused, thinks 1 is new instead of 7.
    ❌ Wrong re-render!

<br/><br/><br/>

==============================

Remove the last element
 :- 
 slice(start index , end index )