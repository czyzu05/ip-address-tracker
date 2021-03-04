import { useEffect, useState } from "react";
import { css } from "@emotion/core";
import axios from "axios";
import "./App.css";
import Header from "./components/Header";
import Input from "./components/Input";
import Map from "./components/Map";
import ResultDetails from "./components/ResultDetails";
import { BeatLoader } from "react-spinners";

const App = () => {
  const [ipDetails, setIpDetails] = useState(null);
  const [loading, setLoading] = useState(true);

  const override = css`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  `;

  useEffect(() => {
    axios
      .get(
        "https://geo.ipify.org/api/v1?apiKey=at_ZWKzYUZKAzmM4UgDjLGmuKXgGtCML"
      )
      .then((res) => {
        setIpDetails(res.data);
        setLoading(false);
      });
  }, []);

  return (
    <>
      {loading ? (
        <BeatLoader css={override} loading={loading} size={50} />
      ) : (
        <>
          <header>
            <Header>IP Address Tracker</Header>
            <Input />
          </header>
          <section>
            <Map />
          </section>
          <ResultDetails {...ipDetails} />
        </>
      )}
    </>
  );
};

export default App;
