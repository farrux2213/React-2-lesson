import "./App.css";
import insunicon from "/insunicon.svg";
import sixline from "/sixline.svg";
import staricon from "/staricon.svg";
import unvonicon from "/unvonicon.svg";
import searchicon from "/searchicon.svg";
import bagicon from "/bagicon.svg";

function App() {
  return (
    <>
      <div className="head">
        <div className="headLeft"></div>
        <div className="headRight"></div>
      </div>
      <div className="followers">
        <div className="followers-top">
          <h1>Check This Before Hiring Anyone</h1>
        </div>
        <div className="followers-bottom">
          <div className="K-plus-1">
            <h1>150K+</h1>
            <p>Freelance Worker</p>
          </div>
          <div className="K-plus-2">
            <h1>7K+</h1>
            <p>Professional Clients</p>
          </div>
          <div className="K-plus-3">
            <h1>8K+</h1>
            <p>Engineering Expart</p>
          </div>
          <div className="K-plus-4">
            <h1>2K+</h1>
            <p>Top Companies</p>
          </div>
        </div>
      </div>
      <div className="six-box">
        <div className="all-six-box">
          <div className="first-series">
            <div className="first-series-1">
              <h1>Our Features To Find Talent</h1>
              <button>
                <p className="button-p">Try For Free</p>
              </button>
            </div>
            <div className="first-series-2">
              <div className="sunicon">
                <img src={insunicon} className="insunicon" />
              </div>
              <h2>Strong Social Proof</h2>
              <p>Impress your boss with a professional in UI design.</p>
            </div>
            <img src={sixline} className="sixline" />
          </div>
          <div className="second-series">
            <div className="second-series-1">
              <div className="sunicon">
                <img src={staricon} className="staricon" />
              </div>
              <h2>Collected Review</h2>
              <p>Impress your boss with a professional in UI design.</p>
            </div>
            <img src={sixline} className="sixline2" />

            <div className="second-series-2">
              <div className="sunicon">
                <img src={unvonicon} className="unvonicon" />
              </div>
              <h2>Top Rated Telent</h2>
              <p>Impress your boss with a professional in UI design.</p>
            </div>
            <img src={sixline} className="sixline3" />
          </div>
          <div className="third-series">
            <div className="third-series-1">
              <div className="sunicon">
                <img src={searchicon} className="searchicon" />
              </div>
              <h2>Find Out Project</h2>
              <p>Impress your boss with a professional in UI design.</p>
            </div>
            <img src={sixline} className="sixline4" />

            <div className="third-series-2">
              <div className="sunicon">
                <img src={bagicon} className="bagicon" />
              </div>
              <h2>Portfolio Creator</h2>
              <p>Impress your boss with a professional in UI design.</p>
            </div>
            <img src={sixline} className="sixline5" />
          </div>
        </div>
      </div>
      <div className="market">
        <h1>Explore The Marketplace</h1>
        <p>
          Find the perfect freelance services for your business · Popular
          professional services ·
        </p>
        <div className="marketboxex">
          <div className="birinchi-qator">
            <div className="marketboxex1">
              <div className="belgi1"></div>
              <div className="boldtext1">
                <b>Graphic Design</b>
              </div>
              <div>
                <h4>1k Jobs Available</h4>
              </div>
            </div>
            <div className="marketboxex2">
              {/* <div></div>
            <h2>UI Designer</h2>
            <p>5k Jobs Available</p> */}
            </div>
            <div className="marketboxex3">
              {/* <div></div>
            <h2>UX Designer</h2>
            <p>7k Jobs Available</p> */}
            </div>
          </div>
          <div className="ikkinchi-qator">
            <div className="marketboxex4">
              {/* <div></div>
            <h2>Content Writing</h2>
            <p>500 Jobs Available</p> */}
            </div>
            <div className="marketboxex5">
              {/* <div></div>
            <h2>Digital Marketing</h2>
            <p>2k Jobs Available</p> */}
            </div>
            <div className="marketboxex6">
              {/* <div></div>
            <h2>SEO</h2>
            <p>1.5k Jobs Available</p> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
