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
  const [addressIp, setAddressIp] = useState("");
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");

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
        setLatitude(res.data.location.lat);
        setLongitude(res.data.location.lng);
        setIpDetails(res.data);
        setLoading(false);
        setAddressIp(res.data.ip);
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
            <Input
              addressIp={addressIp}
              handleAddressIpChange={(e) => setAddressIp(e.target.value)}
            />
          </header>
          <section>
            <Map lat={latitude} lng={longitude} />
          </section>
          <ResultDetails {...ipDetails} />
        </>
      )}
    </>
  );
};

export default App;
