import React, { useState } from "react";
import icon1 from '../components/images/arrow.png'

const FundRaising = () => {
  const [show, setShow] = useState();


  const showData = () => {
    if (show === undefined) {
      setShow(0);
    } else {
      setShow(1);
    }
  };
  return (
    <div>
      <div className="mainFundRaisingContainer">
        <div className="headerContainerFundRaising">
          <h1 className="headingFundRaising">pitchBLACK</h1>
        </div>

        <div className="paragraphsFundRaisingConatiner">
          <div>
            <p className="fundRaisingP1">
              Start fundraising for your
              <br /> company today!
            </p>
          </div>
          <div>
            <p className="fundRaisingP2">
              We can help you go from idea to fundable <br />
              company
            </p>
          </div>
        </div>

        <div class="mainCardContainerFundRaising">
          <div className="infoToGetStart">
            <p className="paragraphInfoToGetStart">
              Enter the information we need to get started{" "}
            </p>
            <div>
              {" "}
              <input
                className="inputNameFundRaising"
                type="text"
                placeholder="What's your name?"
              />
            </div>
            <div className="line"> </div>
            <div>
              {" "}
              <input
                className="inputEmailToGetStart"
                type="text"
                placeholder="Whta's your email?"
              />
            </div>
            <div className="line"> </div>
          </div>
          {(show === 0 || show === 1) && (
            <div className="incorporateCompany">
              <p className="incorporateParagraph">
                {" "}
                Are you looking to incorporate your company<br/>today?
              </p>
              <div className="radioDivIncorporate">
                <input
                  type="radio"
                  value=""
                  name="radioIncorporate"
                  className="inputRadio"
                />
                <label className="labelIncorporate">
                  Yes, let's set up my company.
                </label>
              </div>
              <div className="radioDivIncorporate1">
                <input
                  type="radio"
                  name="radioIncorporate"
                  className="inputRadio"
                  value=""
                />
                <label className="labelIncorporate">
                  Yes, let's set up my company.
                </label>
              </div>
            </div>
          )}

          {show === 1 && (
            <div className="yourCompany">
              <p className="yourCompanyParagraph">
                Can you tell us about your company?
              </p>
              <div>
                {" "}
                <input
                  className="inputCompanyName"
                  type="text"
                  placeholder="What is the name of your company?"
                />
              </div>
              <div className="line"> </div>
              <div>
                {" "}
                <input
                  className="inputComapnyDesc"
                  type="text"
                  placeholder="Give us a short description of what your copmany does."
                />
              </div>
              <div className="line"> </div>

              <p className="companyStateP">
                What state is your company registered in?{" "}
              </p>

              <textarea rows="4" type="text" className="stateCompanyInput" />

              <div>
                
                    <input
                    className="inputUrl"
                    type="text"
                    placeholder="What is your company url?"
                    />
              </div>
              <div className="lineEnd"> </div>
            </div>
          )}
           <div className="btnMainContinue">
          <button className="btnContinue" onClick={() => showData()}>Continue</button>
          <span><img className="icon-img" src={icon1} alt="" /></span>
          </div>
        </div>
        <div className="bottomFundRaising"></div>
      </div>
    </div>
  );
};

export default FundRaising;
