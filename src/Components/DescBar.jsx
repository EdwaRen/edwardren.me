import React, {Component} from 'react';
import '../css/HtmlStyle.css';



function Desc(props) {

  const descImage = {
    /*position: static;*/
    display: "block",
    margin: "auto",
    width: "80px",
    height: "80px",
    marginTop: "20px",
    backgroundSize: "cover",

    opacity: "1.0",
    /*background-color: #111111;*/
    /*background-image: url("images/Edward_ProfilePic.png");*/
  }
  var imageDiv = <div></div>
  if props.image != "" {
    imageDiv = <div id="descImage" style={{
      backgroundImage: `url(${props.image})`
    }}></div>
  }


  var description = <p id="fileDescription" dangerouslySetInnerHTML={{
    __html: props.text
  }}></p>
  var startTitle = <p></p>;
  if (props.duration != "") {
    startTitle = <p id="startTitle">Start</p>
  }
  var locationTitle = <p></p>
  if (props.location != "") {
    locationTitle = <p id="untilTitle">Location</p>

  }

  return (
    <div id="separator">
      <div id="descReadmeTutorial">

        {imageDiv}

        <div id="descDescription">
          <h1 id="fileTitle">{props.title}</h1>
          <h2 id="fileSubTitle">{props.subtitle}</h2>
          {/* <p id="fileDescription">{props.text}</p> */}
          {description}

        </div>
        {/* <div id="chartEnclosure">
        <dl id = "myChardId">

      </dl>
    </div> */}

    <div id="datesContainer">

      <div id="datesTitle">
        {startTitle}
        {locationTitle}
      </div>

      <div id="datesText">
        <p id="startDate">{props.duration}</p>
        <p id="untilDate">{props.location}</p>

      </div>

    </div>
  </div>
</div>
);

}

class DescBar extends Component {

  renderDisplay() {
    console.log("Image", this.props.contentImages);
    if ((this.props.content).length > 6) {
      return (
        <Desc
          title={this.props.content[0]}
          image={this.props.contentImages}
          subtitle={this.props.content[2]}
          text={this.props.content[3]}
          duration={this.props.content[4]}
          location={this.props.content[5]}
          chart={this.props.content[6]}
        />
      );
    } else {
      return (
        <Desc
          title={this.props.content[0]}
          image={this.props.contentImages}
          subtitle={this.props.content[2]}
          text={this.props.content[3]}
          duration={this.props.content[4]}
          location={this.props.content[5]}
          chart={"0"}
        />
      );
    }
  }

  render() {
    return (
      <div>
        {this.renderDisplay()}
      </div>
    );
  }
}

export default DescBar;
