# CoutureQuest - Product Listing Page 
CoutureQuest is a fashion e-commerce web application that allows users to explore and shop for stylish bags and shoes. This project was built using React . The app provides various features such as category filtering, color filtering, price filtering, sorting options, and a load more functionality for products.


![image](https://github.com/Artep666/product-listing-page/assets/78253393/6c341bd5-bfbe-482f-8bf5-55c7cc860989)
![image](https://github.com/Artep666/product-listing-page/assets/78253393/852b4424-47a4-42e4-b3d2-c2ffc5db2fd3)
![image](https://github.com/Artep666/product-listing-page/assets/78253393/635875dd-ddef-4656-9a07-4bc97be99015)

## Features:
Category Selection: Users can switch between the "Bags" and "Shoes" categories to view the products.

## Product Filters:

### Color Filter: Users can filter products by color. The available color options are dynamically generated based on the existing product data.
Price Filter: Users can set a minimum and maximum price range to filter products by price.
Sorting Options: Users can sort the displayed products by:

### Alphabetical Order: Ascending (A-Z) or Descending (Z-A) based on product names.
Price: Ascending (Low to High) or Descending (High to Low) based on product prices.
Load More: The app implements a "Load More" button that fetches the next set of products and displays them as the user scrolls.

### Product Details: 
Each product tile displays an image, name, description, price, ratings, and an "Add to Cart" button.

### Responsive Design: 
The web app is designed to be responsive and accessible on various devices.

## Technologies Used
* [React](https://react.dev)  :A JavaScript library for building user interfaces.
* [JSON](https://www.json.org/json-en.html)  :Data storage for product information.
* [Git](https://git-scm.com) :For storage of the project.
* HTML5 & CSS3: Markup and styling for the application.


## Implementation
Category Selection and Filters: The app uses the useState hook to manage the selected category and filter options (color, price). When a user selects a category or modifies a filter option, the corresponding state variables are updated, and the product list is filtered accordingly.

Dynamic Color Options: The color options for the color filter are dynamically generated from the product data using the generateColorOptions function.

Sorting: The app provides a sorting dropdown that allows users to change the sorting order of products based on different criteria. The handleSortChange function updates the state and re-renders the products accordingly.

Load More: The "Load More" button fetches the next set of products from the data and appends them to the existing product list. The handleLoadMore function manages this functionality.

Product Counter: The app displays the total number of products and the number of currently displayed products.

## Challenges
During the project, I encountered quite a lot challenges,most of which connected to  implementing media queries for seamless website responsiveness on both mobile and desktop devices, and efficiently handling data.


<p align="right">(<a href="#top">back to top</a>)</p>

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
<p align="right">(<a href="#top">back to top</a>)</p>
