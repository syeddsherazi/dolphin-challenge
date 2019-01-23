# DolphinChallenge

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.1.2.

Setup Steps:
* Install nodejs.
* Install Angular cli `npm install -g @angular/cli`
* Clone the repo. Go to project folder and install the required dependencies using following command `npm install`
* Run the project using following command `ng serve`
* The served application then can be viewed on `http://localhost:4200/`


## Project Structure  

I've divided the required update list into following components:
* Update List
  * Single Update
    * Display Card ( In order to make it reusable in similar requirements )
    * Description Box ( In order to make it reusable in similar requirements )
  * Line Break ( Also reusable, used here for line breaks between stages )
  
 

## Components Details

* Update List Component:
  * Inputs => updates
  * It just takes in an array of updates as input.

* Single Update Component:
  * Inputs => update
  * Single Update Component takes update object as input, and pass the relevant info further to two reusable components i.e. display card and description box components.
  
* Display Card Component:
   * Inputs => title, text, colour
   * Display Card Component takes in as input the title, text to display and colour ( css class ). Can be reusable and used for any such scenario where there is a need to display a card.
 
* Description Box Component:
   * Inputs => text, date
   * Description box component takes in text to display and date. Can also be reusable and be used in other scenarios e.g. showing comments etc.
   
* Line Break Component:
  * Inputs => text, title
  * Line Break Component takes in text to display and title.

## Integration Instructions

* Pass an array of inputs to Update List Component. It'll handle all the display + ordering + stage breaks via use of reusable components mentioned above.
