# Live Chart Viewer

Setup:

Enter the project directory from your terminal and run the following command to install all necessary dependencies:

```
npm install
```

To run the application, enter:

```
npm run dev
```

Open the port at which the app opens(check terminal)

## Languages/Libraries/Tools used:

-Built using React, TypeScript, Vite. Styled using CSS.

-Used the "Chart.js" library to handle charting functionality

## Q/A

1. **_How long did you spend on the coding test? What would you add to your solution if you had more time and expected it to be used in a production setting?_**

   It took me about 3 hours to complete this assignment. If I had more time to work on this app and it was being used in a production setting, I would:

   - Spend more time on testing to make sure it is as fault-tolerant as possible.
   - Use a library that can handle more datapoints(I learned quickly that chart.js isn't the best for plotting 300 data points) as the chart that I used got very cluttered and condensed the data together very closely.
   - Improve UI/UX a little bit more. I didn't do much styling for this assignment so there's a lot of room for improvement there.
   - Handle edge cases such as: outliers in the data, adjust the y-axes so the date is shown more "zoomed in".
   - Think a little bit more about performance as there is near-constant(every second) polling from the API.

2. **_Why did you use the libraries you did?_**

   The only libraries I used were Chart.js and a React-based plugin for it. I used Chart.js as it allows for easy graph displays without too much setup and I have prior experience using it. I spent some time looking at d3.js(and even started using it for a bit) before realizing that it would be too much setup for a smaller project. I do think it would be the better choice for a production app, as it has a lot more options and would be able to show data without condensing it(ex: x-axes of my graphs).

3. **_What was the reasoning behind the type(s) of graph you used?_**

   I chose a line graph as it is best suited to show changes in data over a period of time, making it perfect for someone looking to see how the metrics are changing in real-time. We also had 3 data sets for each metric(min, max, avg), so using a line graph would allow us to see the fluctiuations in data easily.

4. **_How would you improve the timeseries API that you just used?_**

   I've worked with websockets before and it makes working with real-time data very easy! There are tradeoffs as far as performance vs. polling(which is what I'm doing here by fetching from the API every second) but getting data as it's updating is great for real-time functionality

Thank you!
