# Weather App

This project is bootstrapped with [Create React App](https://github.com/facebook/create-react-app) with TypeScript.

Styling is done using [Semantic UI](https://semantic-ui.com/) and custom CSS. I used Semantic UI because it is highly customizable and I wanted to display my component building skills.

I used [Recharts](https://recharts.org/en-US) to display bar chart due to its simple nature.

I have also used redux and redux-thunk for state management.

You can find the version deployed on Netlify [here](https://upbeat-joliot-66527d.netlify.app/). It is built and deployed automatically every time you make a commit.


### Components
There are 8 components in this App with `App.tsx` being the main one.\
List of weather details are rendered in `WeatherList.tsx` and an individual item in `WeatherCard.tsx`.\
Temperature type can be changed from `TempType.tsx`.\
The bar chart is displayed in `TempChart.tsx`. You can see error and loading status in `Error.tsx` and `Loader.tsx` respectively.

### Naming Convention
- Interfaces are preceded with `I`
- Enums are preceded with `E`
- Types are preceded with `T`
- Components are named in TitleCase and function are named camelCase.

### Local Running

In the project directory, you can run:

 `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### Testing

The page will reload if you make edits.\
You will also see any lint errors in the console.

 `yarn test`

Launches the test runner in the interactive watch mode. Testing is done using `react-test-renderer`
