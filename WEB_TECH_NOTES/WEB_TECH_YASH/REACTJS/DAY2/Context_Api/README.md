context API / useContext

Context API :- we can manage the state global in the entire application.

Like Example :- dark/light mode ->

Context API three types of things :-

1. createContext -> const DataContext = createContext()
2. Provider -> Directly Parent send to child3 with the help of provider
3. Consumer/useContext -> who can access

What is Hooks :- 1. useState :-

Syntax :- const[data,setData]=useState("")

    2. useEffect :-

Syntax :- useEffect(()=>{

           },[data])

    3. useMemo :- value

Syntax :- useMemo(()=>{

         },[category , data , search ])

    4. useRef  :-

    Syntax :- 


    5.  Custom Hook :- 



    6. useCallback :-  function memoizes

    7.  useContext :-
                     global value access

    8.  useNavigate :- 




Fetch the data from the apis using the axios.