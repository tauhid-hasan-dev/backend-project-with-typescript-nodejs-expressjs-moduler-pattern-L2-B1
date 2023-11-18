# Digital Cow Hut Backend Project - Tauhid Hasan

### Live Link: https://backend-server-app-a3-l2-b1.vercel.app/
---
### Important features of this project:

- Implement error handling
- CRUD operations
- pagination and filtering
- Transactions and rollback

### Technology used in this project:

- TypeScript as the programming language.
- Express.js as the web framework.
- Mongoose as the Object Data Modeling (ODM) and validation library for MongoDB.
---
### Application Routes:

   #### User
   - https://backend-server-app-a3-l2-b1.vercel.app/api/v1/auth/signup (POST)
   - https://backend-server-app-a3-l2-b1.vercel.app/api/v1/users (GET)
   - https://backend-server-app-a3-l2-b1.vercel.app/api/v1/users/64a17fe18f17d914c3e596ba (Single GET) 
   - https://backend-server-app-a3-l2-b1.vercel.app/api/v1/users/64a17fe18f17d914c3e596ba (PATCH)
   - https://backend-server-app-a3-l2-b1.vercel.app/api/v1/users/64a17fe18f17d914c3e596ba (DELETE) 


   #### Cows
   - https://backend-server-app-a3-l2-b1.vercel.app/api/v1/cows (POST)
   - https://backend-server-app-a3-l2-b1.vercel.app/api/v1/cows (GET)
   - https://backend-server-app-a3-l2-b1.vercel.app/api/v1/cows/64a17fae8f17d914c3e596b6 (Single GET) 
   - https://backend-server-app-a3-l2-b1.vercel.app/api/v1/cows/64a17fae8f17d914c3e596b6 (PATCH)
   - https://backend-server-app-a3-l2-b1.vercel.app/api/v1/cows/64a17fae8f17d914c3e596b6 (DELETE) 

   ### Pagination and Filtering routes of Cows

   - https://backend-server-app-a3-l2-b1.vercel.app/api/v1/cows?pag=1&limit=10
   - https://backend-server-app-a3-l2-b1.vercel.app/api/v1/cows?sortBy=price&sortOrder=asc
   - https://backend-server-app-a3-l2-b1.vercel.app/api/v1/cows?minPrice=20000&maxPrice=50000
   - https://backend-server-app-a3-l2-b1.vercel.app/api/v1/cows?location=Barishal
   - https://backend-server-app-a3-l2-b1.vercel.app/api/v1/cows?searchTerm=Bari
     
  
   #### Orders
   - https://backend-server-app-a3-l2-b1.vercel.app/api/v1/orders (POST)
   - https://backend-server-app-a3-l2-b1.vercel.app/api/v1/orders (GET)
