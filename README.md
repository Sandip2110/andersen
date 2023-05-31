![Uploading Screenshot 2023-06-01 at 12.49.11 AM.png…]()


### Project Overview

This project shows 8 items at a time on screen and infinitely loops. Onclick of any item, the information about the item is displayed. 

### Folder structure

I have used atomic architecture in this project. Everything inside the `component` folder is a global component which can be plug into any component. Containers contain every individual pages. Tried to add some glimps of the folder structure I typically recommend. 

### Comments
1. I haven't used any library to achieve the carousel as this will unnecessarily increase the bundle size for such basic use case. 
2. Tried to keep components as generic as possible as per the provided information. 
3. Didn't use any global state management system, as it was not required for this project. 
4. I have focused more on how to structure a project, good practices, typescript, logic. 

### With time what could be improved as a full fledge project 
1. Definitely the UI & UX. The given screenshot and provided images do not much.
2. Carousel should have a skeleton loading section if the API is providing all the data at a time. If API supports pagination, should make lazy API calls and use lazy image loading.
3. For timer delays, a global hook instead of logic inside the component. 

PS: I have commented on the code for possible ideal solutions. 
