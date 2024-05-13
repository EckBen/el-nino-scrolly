<style>
  #footer-content {
    color: white;
    display: flex;
    justify-content: space-between;
  }

  #footer-content-center {
    min-width: fit-content;
  }

  #footer-content-right,
  #footer-content-left {
    width: calc((100% - 50px) / 2);
    display: flex;
  }

  #footer-content-left {
    align-items: center;
  }

  #footer-content-left > div {
    text-align: left;
    margin-left: 12px;
    font-size: 12px;
  }

  #footer-content-right {
    font-style: italic;
    text-align: right;
    flex-direction: column;
    justify-content: center;
  }

  #footer-content-left > p,
  #footer-content-left > div > p,
  #footer-content-right > p,
  #footer-content-right > div > p {
    margin: 0px;
    line-height: 16px;
  }

  #footer-content-left > div > p {
    margin-bottom: 4px;
  }
</style>


<div id='footer-content'>
  <div id='footer-content-left'>
    <p style='margin-top: 4px; align-self: start'>Contact:</p>
    <div>
      <p>Ellen Mecray (Ellen.L.Mecray@noaa.gov)</p>
      <p>Northeast Regional Climate Center (nrcc@cornell.edu)</p>
    </div>
  </div>
  <div id='footer-content-center'>
    <img src='./assets/noaa_emblem_logo-2022.png' alt='NOAA emblem' style='height: 50px' />
  </div>
  <div id='footer-content-right'>
    <p style='font-size: 16px;'>Northeast Region El Niño Impacts and Outlook | October 2018</p>
    <p><a href='https://www.drought.gov/drought/resources/reports' style='color: white; font-size: 12px; text-decoration: none'>https://www.drought.gov/drought/resources/reports</a></p>
  </div>
</div>