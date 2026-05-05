useEffect :- It is react hook with the help of this we can handle the side affect.

when we use :- 
1. Api data fetch

we have three things in the useEffect :- 
1. no array :- run on every render 
useEffect(()=>{
    // statement
})

2. Empty array :- it run on first render / only one time 
useEffect(()=>{
  // statement 
},[])


3. Dependecy Array :- when dependency changed.
useEffect(()=>{
     // statement
},[state])


===============================================================================

Task: Passing Data from Parent to Child Components.

Objective:
Pass data from a Parent component to Child components in ReactJS using props.

Task Description:

1. Create a React application.

2. Create three components:

* Parent Component (Parent.jsx)
* Child1 Component (Child1.jsx)
* Child2 Component (Child2.jsx)

3. In the Parent Component:

* Create two variables: name and age.
  Example:
  name = "Rahul"
  age = 22

4. Pass these variables from the Parent component to Child1 using props.

5. In Child1:

* Receive the data using props.
* Pass the same data again to Child2 using props.

6. In Child2:

* Receive the props from Child1.
* Display the name and age on the screen.

Expected Output:

* The Parent component stores the data.
* Child1 receives the data from Parent.
* Child1 passes the same data to Child2.
* Child2 displays the name and age.