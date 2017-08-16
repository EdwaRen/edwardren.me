import React, {Component} from 'react';
import '../css/HtmlStyle.css';
import { fadeIn } from 'react-animations';
import { fadeOut } from 'react-animations';

import { StyleSheet, css } from 'aphrodite/no-important';


function Group(props) {
  var groupStyle = {};
  var groupStyle2 = {};

  var imageStyle = {};
  if (props.indexed == 0) {
    groupStyle = ({
      position: "absolute",

      // backgroundColor: "#eef2f2",
      backgroundColor: "",
      height: "32px",
      width: "var(--groupWidth)",

    })
    groupStyle2 = ({
      // backgroundColor: "#eef2f2",
      height: "32px",
      width: "var(--groupWidth)",
      color: "#333333",


    })
    imageStyle = {
      position: "absolute",

      float: "left",
      margin: "0",
      marginLeft: "15px",
      padding: "12px",
      maxWidth: "24",
      backgroundSize: "cover",
      opacity: "0.6",
      marginTop: "4px",
      backgroundImage:`url(${props.image})`,
    }
  } else {
    groupStyle = {
      position: "absolute",
      backgroundColor: "#BBBBBB",
      height: "32px",
      width: "var(--groupWidth)",
      opacity:"0.9",
    }
    groupStyle2 = {
      height: "32px",
      width: "var(--groupWidth)",
      opacity: "1.0",
      color:"#000000",
    }
    imageStyle = {
      zIndex: "2",
      position: "absolute",

      float: "left",
      margin: "0",
      marginLeft: "15px",
      padding: "12px",
      maxWidth: "24",
      backgroundSize: "cover",
      opacity: "0.9",
      marginTop: "4px",
      backgroundImage:`url(${props.image})`,
    }
  }

  const styles = StyleSheet.create({

    fadeIn: {
      animationName: fadeIn,
      animationDuration: '0.3s'
    }
  })
  return (

    <div style={groupStyle2} id="myGroupId0" onClick={props.onClick}>
      <div style={imageStyle}></div>
      <div key = {props.groupIndex} className={css(styles.fadeIn)} >

        <div style = {groupStyle}></div>
      </div>
      {/* <img src = {props.image}/> */}
      <div id="profileDiv">
        <p >{props.value}</p>
      </div>
    </div>

  );
}

class GroupsBar extends React.Component {

  componentDidUpdate() {


  }

  renderGroup(i) {
    var indexReturn = 0;
    if (i == this.props.groupIndex) {
      indexReturn = 1;
    }
    return (
      <Group
        groupIndex = {this.props.groupIndex}
        indexed={indexReturn}
        value={this.props.groups[i+1]}
        image={this.props.groupsImage[i]}
        onClick={() => this.props.onClick(i)}
        animate = {this.props.animate}
      />
    );
  }

  render() {

    // const styles = StyleSheet.create({
    //   fadeOut: {
    //     animationName: fadeOut,
    //     animationDuration: '0s'
    //   },
    //   bounce: {
    //     animationName: fadeIn,
    //     animationDuration: '1s'
    //   }
    // })


    return (
      <div >
        {/* <div id = "groupBar" className={css(styles.bounce)}> */}
        <div id="findSideTopBar">
          <p>Find</p>

        </div>
        {this.renderGroup(0)}
        {this.renderGroup(1)}
        {this.renderGroup(2)}
        {this.renderGroup(3)}
        {this.renderGroup(4)}
        {this.renderGroup(5)}
        {this.renderGroup(6)}

      </div>



    );
  }

}

export default GroupsBar;
