// import squid from "../squid.svg";

export const Loader = ({ message }: { message: string }) => {
  return (
    <div className="overflow-hidden">
      {/* <section className="sticky">
        <div className="squids">
          <img src={squid} className="squid" alt="logo" />
          <img src={squid} className="squid" alt="logo" />
          <img src={squid} className="squid" alt="logo" />
          <img src={squid} className="squid" alt="logo" />
          <img src={squid} className="squid" alt="logo" />
          <img src={squid} className="squid" alt="logo" />
          <img src={squid} className="squid" alt="logo" />
        </div>
        <img src={squid} className="big-squid" alt="logo" />
      </section> */}
      <div className="container">
        <div className="text-info">
          <h1>Pink Robot</h1>
          <div className="tag-line">
            {/* <div>
              {" "}
              Pink Robot{" "}
              <a
                href="https://github.com/paritytech/ink"
                target="_blank"
                rel="noopener noreferrer"
              >
                ink! smart contract language
              </a>
            </div> */}
            .<div className="animate-pulse">{message}</div>
          </div>
        </div>
      </div>
    </div>
  );
};
