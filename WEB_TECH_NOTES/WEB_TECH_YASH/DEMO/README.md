C and C++


C -> procedural programming langauge 
Daily Routine  :- wake up  , brush , eat , go to class
Operating System 
Embded System

C++ -> Object Oriented Pro langauge 
Class ->  Fan 
Object -> color-white , price-5000 , brand - bajaj
          Behaviour -> cooling 

Represent the real life object -> 
Class -> 
Game Developement 
Bank sector 
Software development 


======================

Code :-  we can run the code of both c and c++ 
VS CODE 
Trubo C++

=============================


// Online C++ compiler to run C++ program online
// #include<stdio.h> // library 

// int main(){ // starting point
//     printf("hello Debugshala"); // output
//     return 0; 
// }

#include<stdio.h> // library 

int main(){ // starting point
    int a;
    
    printf("Enter Your Number :");
    scanf("%d", &a);
    
    printf("You Entered : %d",a);
    return 0;
}


============================================
=============================================

// c-> printf , sacnf
// c++ -> count , cin

#include<iostream>
using namespace std;

int main(){
    // cout << "hello Indore";
    // return 0;
    int a ;
    
    cout << "Enter Any number";
    cin >> a;
    
    cout << "You Entered :" << a;
    return 0;
}


=======================================

Variable :- Container , used to store the value .
int     integer    10 , 20 
float    decimal   10.0
char    character  'A'

String    text  -> 'Atishay'




conditional Statement :- 
if , if else , if else if else , switch case



#include<iostream>
using namespace std;

int main(){
     int a = 5;
     
     if(a%2==0){
         cout << "event number";
     }else{
         cout << "odd number";
     }
}


=======================================


C++ :- Class and Objects 


Fan -> class
Properties -> color , price , band 

behavious -> cooling 



// c-> printf , sacnf
// c++ -> count , cin


#include<iostream>
using namespace std;
// class name is Fan
class Fan{
public:
 string color;
 int price;
          
 void displayFanData(){
  cout << color << "\n";
  cout << price;
          }
};
int main(){
      Fan f;
      f.color = "white";
      f.price = 5000;
      
      f.displayFanData();
}


=============================


C  used in :- 
OS , ES 

C++ :- games , Banking Software , High Performance apps 


C++ :- Calculator 
2. ATM Menu -> pin generate , deposit , withdraw , Check Balance
2. Simple Banking System




C                                        C++
1. Less Secure                       1. More Secure
2. Procedural pro lan                2. Object oriented pro lan
3. top-bottom                        3. bottom to top 
4. function Based                    4. Class and Object
                                       -> OOPS 
                                           -> encapsulation 
                                           -> ploymorphism
                                           -> inheritance 
                                           -> Abstraction 