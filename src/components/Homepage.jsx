import Navbar from "./Navbar";
import Footer from "./Footer";

const Homepage = () => {
  const owlStyle = {
    height: "45%",
    width: "30%",
    position: "relative",
    bottom: "5vw"
  };
  return (
    <>
      <Navbar />
      <div className="homeParentDiv">
        {/* section 1 */}
        <div id="sectionOne" className="bg-black">
          <span>
            <i id="owlText1" className="d-block font-weight-bold">
              MEET <i id="owlText1" className="stylester">MR.STYLESTER</i>
            </i>
          </span>
          <span>
            <i id="owlText2" className="d-block text-light font-weight-bold">
              HE WILL DESIGN FOR YOU!
            </i>
          </span>
          <img src="/img/OWL.png" alt="img" style={owlStyle} />
        </div>
        {/* section 2 */}
        <div className="secondBulk">
        <div id="sectionTwo">
          <div className="text3Parent">
            <div className="text3Container">
              <p
                id="text3"
                className="display-4 text-light font-weight-bold text m-5"
              >
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Doloribus, eos.
              </p>
            </div>
          </div>
        </div>
        {/* section 3 */}
        <div
          id="sectionThree"
          className=" bg-black text-light font-weight-bold"
        >
          <div className="container">
            <div className="row">
              <div className="col-6">
                {/* first obj */}
                <div className="objParent my-5">
                  <div id="obj">
                    <div id="img1" className="my-5"></div>
                    <div id="img2" className="bg-black text-light">
                      Lorem ipsum dolor sit amet consectetur adipisicing
                    </div>
                  </div>
                </div>
                {/* second obj */}
                <div className="objParent my-5">
                  <div id="obj">
                    <div id="img1" className="my-5"></div>
                  </div>
                  <div id="img2" className="bg-black">
                    Lorem ipsum dolor sit amet consectetur adipisicing
                  </div>
                </div>
              </div>
              <div className="col-6">
                {/* object 1 */}
                <div className="objParent my-5">
                  <div id="obj">
                    <div id="img2" className="bg-black">
                      Lorem ipsum dolor sit amet consectetur adipisicing
                    </div>
                    <div id="img1" className="my-5"></div>
                  </div>
                </div>
                {/* object 2 */}
                <div className="objParent my-5">
                  <div id="obj">
                    <div id="img2" className="my-5">
                      Lorem ipsum dolor sit amet consectetur adipisicing
                    </div>
                    <div id="img1"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* section 4 */}
        <div id="sectionFour">
          <div className="container">
            <span>
              <p id="fourthSectionText" className="text-light pb-0 mb-0">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea
                consequuntur magnam vel? Atque, vel commodi?
              </p>
            </span>
          </div>
        </div>
        <Footer />
      </div>
      </div>
    </>
  );
};
export default Homepage;
