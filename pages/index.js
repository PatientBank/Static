import Head from "next/head";

export default class extends React.Component {
  render() {
    return (
      <div className="body">
        <Head>
          <title>PatientBank</title>
          <meta
            name="description"
            content="Request your medical records online with PatientBank. We make it easy to request records from anywhere in the US."
          />
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
          <link
            rel="shortcut icon"
            type="image/x-icon"
            href="/static/favicon.ico"
          />

          <link
            href="https://fonts.googleapis.com/css?family=Source+Sans+Pro"
            rel="stylesheet"
          />
        </Head>

        <div className="bg" />

        <div className="wrapper">
          <div>
            <img src="/static/logo-square.png" />
          </div>
          <br />
          <p>
            We are sorry to say that PatientBank shut down on January 12th,
            2018.
          </p>
          <br />
          <a href="https://blog.patientbank.us/saying-goodbye-to-patientbank-7456247851b6">
            Read our blog post &nbsp;&rarr;
          </a>
        </div>
        <style jsx>{`
          .bg {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            overflow-y: scroll;
            background-image: linear-gradient(
              to right,
              #6a11cb 0%,
              #2575fc 100%
            );
            z-index: -1;
          }
          .wrapper {
            padding: 50px;
            text-align: left;
            width: 100%;
            max-width: 600px;
            font-family: "Source Sans Pro", sans-serif;
            box-sizing: border-box;
          }
          .wrapper p {
            font-size: 34px;
            line-height: 1.4;
            color: white;
          }
          .wrapper img {
            width: 60px;
          }
          .wrapper a {
            color: white;
            border: 2px solid white;
            border-radius: 6px;
            font-size: 24px;
            padding: 8px;
            text-decoration: none;
            transition: 0.1s ease-out;
          }
          .wrapper a:hover {
            background-color: rgba(255, 255, 255, 0.2);
          }
        `}</style>
      </div>
    );
  }
}
