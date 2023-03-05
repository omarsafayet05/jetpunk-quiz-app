import React, { useEffect, useState } from "react";
import axios from "axios";
import Figure from "react-bootstrap/Figure";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./Rechart.css";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";
import "./Rechart.css";

const Rechart = () => {
  const [recharts, setRecharts] = useState([]);
  useEffect(() => {
    axios.get("https://openapi.programming-hero.com/api/quiz").then((data) => {
      const rechartsLoaded = data.data.data;
      const rechartData = rechartsLoaded.map((rechart) => {
        const singleChart = {
          name: rechart.name,
          total: rechart.total,
        };
        return singleChart;
      });
      console.log(rechartData);
      setRecharts(rechartData);
    });
  }, []);

  return (
    <div className="main-container">
      <Row className=" justify-content-center">
        <Col md="auto" sm="auto" lg="auto">
          <h2 className="text-style my-3">Simple Line Chart</h2>
          <LineChart width={300} height={300} data={recharts}>
            <Line
              type="monotone"
              dataKey="total"
              stroke="#8884d8"
              activeDot={{ r: 8 }}
            />
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip></Tooltip>
          </LineChart>

          <Figure.Caption className="my-2">
            Chart:Total Quiz No and Topics
          </Figure.Caption>
        </Col>
      </Row>
    </div>
  );
};

export default Rechart;
// <ResponsiveContainer width="100%" height="100%">
//  <BarChart width={500} height={400} data={recharts}>
//                 <Bar dataKey="name" fill="#8884d8" />
//                 < XAxis datakey="total" />
//                 <YAxis />
//                 <Tooltip></Tooltip>
//             </BarChart></div>
