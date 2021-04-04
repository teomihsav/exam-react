# exam-react

App description:


    App logic:

        The purpose of the app is to give customers ability to choose an instructor who can help them to start their sport life by given answers from them.

        The app has two register entries, one is for customers/clients second is for instructors/jobs (The mongoo collection for all users is called "clients" and collects both clients and instructors). The other two collections are for their pofiles data.
    
    Navigation from menu:
    
        If you enter from "Home" page you will register as client, if you enter from "Jobs" you will register as instructor with type of user saved in the "client" collection 

        After answering the questions you will be redirected to "Register" page (in both types client or instructor). 

        After registering ( the user is auto logged) the user will be redirected again to check marked questions if there is something he/she wants to change.

        After submiting the data the user will be redirected to his/her profile page. 

        In case user is logged as client will see matched instructors based on his/her answers. From here client can contact the instructor by e-mail form (sending him/her an e-mail). Also the client can see on map the instructor location and can choose to contact the closest one. And ability for editing the profile.

        In case user is logged as instructor will see his/her profile. Also the instructor can write an article, edit, preview and delete it.
        Editing the profile allows instructor to change his/her location by draging marker on map. 

        Articles can br viewed from "Articles" page. Here we can las five articles in "Last articles here" section. In "Categories" section can be seen articles divided by their categories. Every aricle can be viewed for reading in separated section. 

        "Home", "Job" and "About" pages showing registered instructors with basic preview.
