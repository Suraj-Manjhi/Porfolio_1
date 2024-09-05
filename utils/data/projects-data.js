import ayla from '/public/image/ayla.jpg';
import crefin from '/public/image/crefin.jpg';
import realEstate from '/public/image/real-estate.jpg';
import travel from '/public/image/travel.jpg';

export const projectsData = [
    {
        id: 1,
        name: 'Credit Card Transaction Analysis',
        description: "I conducted an in-depth analysis of credit card transaction data to identify spending patterns across various merchant categories. The project involved examining how transaction amounts varied between early and late transactions, focusing on trends that could inform business strategies. I employed Python, Pandas, and Matplotlib to clean and visualize the data, uncovering key insights that were then presented using Power BI dashboards.",
        tools: ['Python', 'Pandas', 'Matplotlib', 'Power BI'],
        role: 'Data Analyst',
        code: '',
        demo: '',
        image: crefin,
    },
    {
        id: 2,
        name: 'Power BI Dashboard for Investment Insights',
        description: "I developed a Power BI dashboard to provide comprehensive insights into investment behavior. The dashboard included gender-based analysis, investment duration and frequency, and the reasons for investment, offering a clear view of investor preferences. I leveraged Power BI's advanced data visualization techniques to create a user-friendly and interactive dashboard.",
        tools: ['Power BI', 'Excel', 'DAX'],
        role: 'Power BI Developer',
        code: '',
        demo: '',
        image: travel,
    },
    {
        id: 3,
        name: 'SQL-Based Sales Performance Analysis',
        description: "This project involved analyzing sales transaction data to evaluate product and customer performance, transaction frequency, and revenue trends. I utilized SQL queries to clean and organize the data, calculated key performance indicators, and performed a comprehensive analysis to provide actionable insights.",
        tools: ['SQL', 'MySQL', 'Excel'],
        role: 'Data Analyst',
        code: '',
        demo: '',
        image: realEstate,
    },
    {
        id: 4,
        name: 'Comprehensive Data Analysis Project',
        description: "This project was a culmination of my Data Analysis skills, where I combined Python, SQL, and Power BI to perform a full-scale analysis of a complex dataset. The project involved data cleaning, manipulation, visualization, and interpretation, providing valuable insights into the dataset's trends and patterns. The final deliverable was an interactive Power BI dashboard that summarized the findings.",
        tools: ['Python', 'Pandas', 'SQL', 'Power BI'],
        role: 'Data Analyst',
        code: '',
        demo: '',
        image: ayla,
    }
];


// Do not remove any property.
// Leave it blank instead as shown below

// {
//     id: 1,
//     name: '',
//     description: "",
//     tools: [],
//     role: '',
//     code: '',
//     demo: '',
//     image: crefin,
// },