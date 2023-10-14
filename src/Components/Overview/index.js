import { BarChart, Bar, XAxis, Legend, ResponsiveContainer } from "recharts";
import "./overview.css";

const data1 = [
  {
    month: "jan",
    money: 250,
  },
  {
    month: "feb",
    money: 100,
  },
  {
    month: "mar",
    money: 300,
  },
  {
    month: "Apr",
    money: 600,
  },
  {
    month: "May",
    money: 300,
  },
  {
    month: "Jun",
    money: 200,
  },
  {
    month: "Jul",
    money: 200,
  },
  {
    month: "Aug",
    money: 1000,
  },
  {
    month: "Sep",
    money: 500,
  },
  {
    month: "Oct",
    money: 200,
  },
  {
    month: "Nov",
    money: 400,
  },
  {
    month: "Dec",
    money: 200,
  },
];

const Overview = () => (
  <div className="containers">
    <div className="overview-container">
      <h1 className="heading">Overview</h1>
      <p>Monthl Earnings</p>
      <div className="overview">
        <ResponsiveContainer width="100%" height={300}>
          <BarChart
            data={data1}
            margin={{
              top: 5,
            }}
          >
            <XAxis
              dataKey="month"
              tick={{
                stroke: "gray",
                strokeWidth: 1,
              }}
            />

            <Legend
              wrapperStyle={{
                padding: 2,
              }}
            />
            <Bar
              dataKey="money"
              name="months"
              fill="#5A32EA"
              barSize={30}
              radius={[10, 10, 10, 10]}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
    <div className="customer-container">
      <h1 className="heading">Customer</h1>
      <p>Customers that buy products</p>
      <div className="pie">
        <img
          src="https://scontent-pnq1-2.xx.fbcdn.net/v/t39.30808-6/391488364_6495750833869702_8321711683868374166_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_ohc=CU449T2EI2MAX9H18Kd&_nc_ht=scontent-pnq1-2.xx&oh=00_AfCx4zsRk9iON4loGOrjRGu9uF9QvROPVCN98yDRa7CYmw&oe=653099FE"
          alt="pie chart"
          className="pie-img"
        />
      </div>
    </div>
  </div>
);

export default Overview;
